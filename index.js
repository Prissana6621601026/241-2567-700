const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql_db');
const app = express();
const cors = require('cors');
const e = require('express');
const port = 8000;
app.use(bodyParser.json());
app.use(cors());
let conn = null;

const initMySQL = async () => {
    try {
        conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'webdb',
            port: 8830
        });
    } catch (error) {
        console.error("MySQL connection failed:", error);
        process.exit(1);
    }
}

/* 1.GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
   2.POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
   3.GET /users/:id สำหรับดึง users รายคนออกมา
   4.PUT /users/:id สำหรับแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
   5.DELETE /users/:id สำหรับลบ users รายคน (ตาม id ที่บันทึกเข้าไป) 
*/

const validateData = (userData) => {
    let errors = [];
    if (!userData.firstName) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastName) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.interests) {
        errors.push('กรุณาเลือกงานอดิเรก');
    }
    return errors;
};

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', async (req, res) => {
    try {
        const [rows] = await conn.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Database query failed" });
    }
});

// path = POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/users', async (req, res) => {
    try {
        let user = req.body;
        const errors = validateData(user);
        if (errors.length > 0) {
            throw {
                message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                errors: errors
            };
        }
        const [result] = await conn.query('INSERT INTO users SET ?', [user]);
        res.json({
            message: 'Create user successfully',
            data: result[0]
        });
    } catch (error) {
        const errorMassage = error.message || "something went wrong";
        const errors = error.errors || [];
        console.error("Error message: ", error.message);
        res.status(500).json({
            message: errorMassage,
            errors: errors
        });
    }
});

// path = GET /users/:id สำหรับ users รายคนออกมา 
app.get('/users/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let id = req.params.id;
        const result = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
        if (result[0].length == 0) {
            throw { statusCode: 404, message: "User not found" };
        }
        res.json(result[0][0]);
    } catch (error) {
        console.error("Error: ", error.message);
        let statusCode = error.statusCode || 500;
        res.status(500).json({
            message: "something went wrong",
            errorMassage: error.message
        });
    }
});

// path = PUT /users/:id ใช้สำหรับแก้ไขข้อมูล user รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/users/:id', async (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    try {
        let user = req.body;
        const [result] = await conn.query(
            'UPDATE users SET ? WHERE id = ?',
            [updateUser, id]);
        res.json({
            message: 'Update user successfully',
            data: result[0]
        });
    } catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({
            message: "something went wrong",
            errorMassage: error.message
        });
    }
});

// path = DELETE /users/:id ใช้สำหรับลบข้อมูล user รายคน (ตาม id ที่บันทึกเข้าไป)
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const [results] = await conn.query('DELETE from users WHERE id = ?', [parseInt(id)]);
        res.json({
            message: 'Delete user successfully',
            data: results
        });
    } catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({
            message: "something went wrong",
            errorMassage: error.message
        });
    }
});

app.listen(port, async () => {
    await initMySQL();
    console.log('Http Server is running on port ' + port);
});