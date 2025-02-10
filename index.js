const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

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
app.get('/users',(req, res) => {
    res.json(users);
})

//path: /user ใช้ในการสร้างข้อมูล user ใหม่
app.post('/users', (req, res) => {
    let user = req.body;
    users.push(user);
    res.json({
        message: 'Create new user successfully',
        user: user
    });
})
//path: PUT /user /:id ใช้สำรับแก้ไขข้อมูล user โดยใช้ id
app.put('/user/:id',(req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    //หาuserจาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id)
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
    })
    //แก้ไขข้อมูล users ที่หาเจอ
    //users ที่ update ใหม่ กลับไปเก็บใน users เดิม
})
//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user โดยใช้ id เป็นตัวระบุ
app.delete('/user/:id',(req, res) => {
    let id = req.params.id;
    //หา index of user ที่ต้องการลบ
    let selectedIndex=users[selectedIndex] = users.findIndex(user => user.id == id)
    //delete
    user.splice(selectedIndex, 16)
    delete users[selectedIndex]
    res.json({
        message: 'Delete user successfully',
        indexDeleted: selectedIndex
    })
})

app.listen(port,(req, res) => {
    console.log('Http server is running on port' + port)
});