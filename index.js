const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors');
app.use(bodyParser.json());
let users = []
let counter = 1
/*
GET /user สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /users สำหรับสร้าง users ในบันทึกเข้าไป
GET /users/:id สำหรับดึง users รายคนออกมา
PUT /users/:id สำหรับแก้ไข users รายคน (ตามไอดีที่บันทึกเข้าไป)
DELETE /users/:id สำหรับลบ users รายคน (ตามไอดีที่บันทึกเข้าไป)
*/
//path: GET /users ใช้สำหรับแสดงข้อมูล user ทั้งหมด 
app.get('/users', async (req, res) => {
    const result = await conn.query('SELECT * FORM users')
    res.json(result[0]);
})
//path: /user ใช้ในการสร้างข้อมูล user ใหม่
app.post('/users', async (req, res) => {
    try{
        let user = req.body;
        const result = await conn.query('INSERT INTO users SET ?',user)
        res.json({
            message: 'Create user successfully',
            data: result[0]
        })
    }
    catch(error){
        console.error('error: ',error.message)
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
        })
    }
    
})
app.put('/user/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let updateUser = req.body;
        const result = await conn.query(
            'UPDATE users SET ? WHERE id = ?',
            [updateUser, id]
        )
        res.json({
            message: 'Update user successfully',
            data: result[0]
        })
    } catch (error) {
        console.error('error: ',error.message)
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
        })
    }
}
)
//path: PUT /user /:id ใช้สำรับแก้ไขข้อมูล user โดยใช้ id
app.get('/user/:id', async (req, res) => {
    try{
        let id = req.params.id;
        const result = await conn.query('SELECT * FROM users WHERE id = ?',id)
        if(result[0].length > 0) {
            res.json(result[0][0])
        }else {
            res.status(404).json({
                message: 'user not found'
            })
        }
        res.json(result[0][0])
    }catch(error){
        console.error('error: ', error.message)
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
        })
    }
    //let updateUser = req.body;
    //หาuserจาก id ที่ส่งมา
    /*let selectedIndex = users.findIndex(user => user.id == id)
    users[selectedIndex]=updateUser;
    if (updateUser.firstname) {
        user[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
    }
    if (updateUser.lastname) {
        user[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
    }
    res.json({
        message: 'Update user successfully',
        data: {
            user: updateUser,
            indexUpdated: selectedIndex
        }
    })*/
    //แก้ไขข้อมูล users ที่หาเจอ
    //users ที่ update ใหม่ กลับไปเก็บใน users เดิม
})
//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user โดยใช้ id เป็นตัวระบุ
app.delete('/user/:id', async (req, res) => {
    try{
        let id = req.params.id;
        const result = await conn.query('DELETE from users WHERE id = ?',parseInt(id))
        res.json({
            message: 'Delete user successfully',
            data: result[0]
        })
    } catch (error) {
        console.error('error: ', error.message)
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
        })
    }
})

app.listen(port, async (req, res) => {
    console.log('Http server is running on port' + port)
});