/*
== เท่ากับ
!=
<
>
>=
<=
+
-
*
/
% หารเอาเศษ
*/
/*
>= 80 =A
*/
/*
let number1 = 5;
let number2 = 5;
/*
let condition1 = number1 >= number2; //booleanค่าที่ได้จะเป๋น true,false
console.log('result of condition is',condition1); */
//if - else
//if condition is true do smth if false dont have any condi do not do anything
//if (number1 != number2) {
    //console.log('this is if');
//}else if(number1==number2) {
    //console.log('this is else if');
//}else {
    //console.log('this is else');
//}
/* เงื่อนไข if else ดูเงื่อนไขไปทีล่ะเงื่อนไข */
//let score = prompt('Enter your score : ');
//console.log('Your score is',+score)
//if (score >= 80) {
    //console.log('You are grade A');
//}else if (score >= 70) {
    //console.log('You are grade B');
//}else if (score >= 60) {
    //console.log('You are grade C');
//}else if (score >= 50) {
    //console.log('You are grade D');
//}else {
    //console.log('You are grade F');
//}
/*let number1 = 5;
let number2 = 8;
//true || false = true
let condition = number1 >= 3 || number2 >= 10;
console.log('result of condition',condition);

let age = 30;
let gender = 'male'
//true && true = true
if (age >= 20 && gender == 'male') { //ต้องเป็นตามเงื่อนไขเท่านั้นถึงจะขึ้นconsoleนี้
    console.log('You are male adult');
} */
// &&และ,||หรือ,!ไม่
/*let number1 = 25;
if (!(number1 % 2 == 0)) {
    console.log('You are even number');
}*/
/* loop
while loop
for
*/
//while loop
/*let counter = 0;

while (counter <= 10 ) { //true
    console.log('while loop')
    counter=counter+1;
}
for (let counter = 0) */
//array
/*let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1,age2,age3,age4);*/
/*let ages = [,90,60,40,45,50];
console.log(ages);
ages.sort();
console.log(ages);

let name_list = ['John','Bob','Alice','Mary']
name_list.push('Mike');
console.log(name_list.length);
console.log(name_list[0]);
console.log(name_list[1]);
console.log(name_list[2]);

for (let index = 0; index <= name_list.length; index++){
    console.log('name list', name_list[index])
}*/

/*let student = [{
    name: 'wes',
    age: 90,
    grade: 'A'
},{
    name: 'aa',
    age: 66,
    grade: 'B'
}];
for (let index = 0; index < student.length; index++){
    console.log('Student number',(index+1));
    console.log('name',student[index].name);
    console.log('age',student[index].age);
    console.log('grade',student[index].garde);
}*/

/*let scores1 = 50
let scores2 = 90
let grades = '' //ค่าว่าง
function calculateGrade(scores){
    if (scores >= 80){
        grades = 'A'
    }else if (scores >= 70){
        grades = 'B'
    }else if (scores >= 60){
        grades = 'C'
    }else if (scores >= 50){
        grades = 'D'
    }else {
        grades = 'F'
    } return grades
}
let student1 = calculateGrade(scores1)
let student2 = calculateGrade(scores2)
console.log('grade:',student1,student2)*/

/*console.log('new age',ages[2]);//แทนที่ค่าในอาเร
console.log('ages list',ages);

ages = [45,50]; //1.แทนที่ในค่า
console.log('new age',ages);

ages.push(55) //2.ต่อ
console.log('new age',ages);*/
/*let scores = [10,20,30,40];
//let newScoretes = []
/*for (let index = 0; index < scores.length; index++){
    console.log('Score',scores[index]);
    /*if (scores[index]>=30){
        newScoretes.push(scores[index]);
    }*/
/*}
let newScoretes = scores.filter((s) => {
    if s >= 30;
})
newScoretes.forEach((ns) => {
    console.log('New Score',ns)
})
//arrow function result are the same as up there but shorter
/*
scores[0] = scores[0] * 2;
scores[1] = scores[1] * 2;
scores[2] = scores[2] * 2;
scores[3] = scores[4] * 2;
scores[5] = scores[5] * 2;
*/
/*scores = scores.map((s)=>{
    return s * 2;
});
scores.forEach((s) => {
    console.log('new scores:',s)
}) */
/* let students = [
    {
        name: "John",
        age: 90,
        score: 'A'
    },{
        name: "Jane",
        age: 75,
        score: 'B'
    },{
        name: "Jim",
        age: 60,
        score: 'C'
    }
]
let student = students.find((s) => {
    if (s.name === "Jane"){
        return true;
    }
})
let doublescore_student = students.map((s) => {
    s.score = score * 2
})
let highscore_student = students.filter((s) => {
    if (s.score > 80) {
        return true
    }
})
console.log('student:',student) */