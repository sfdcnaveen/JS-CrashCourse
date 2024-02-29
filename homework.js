console.log('Test javascript file')

//objects
let student1 = {'Name':'Naveen', 'Age' :27, 'Degree':'B.tech', 'class':undefined, 'State':'AP', 'feesPaid':true, 'Address':{'Street':'SaiRam Street', 'Pincode':'524201'}}
let student2 = {'Name':'Nageswari', 'Age' :26, 'Degree':'B.Com','class':undefined, 'State':'Telangana','feesPaid':false, 'Address':{'Street':'Narasinghrao Peta', 'Pincode':'524101'}}
let students =[student1,student2, {'Name':'Sai Krupa', 'Age' :24, 'Degree':'B.Sc','class':undefined, 'State':'MP', 'feesPaid':true, 'Address':{'Street':'BC Colony', 'Pincode':'524101'}}]
//console.log(students);


//HW3
let printStudents = (stud) => {
  return [stud.Name,stud.Age,stud.Degree,stud.feesPaid];
}
let mapStudent = students.map(x=>
  printStudents(x));
console.log(mapStudent);


//HW4 Print string Length without inbuilt function
let str = "Naveen Pasupuleti";
let strLength = 0;
for (let i = 0; str[i] !== undefined; i++) {
  strLength++;
}
console.log("The length of the string is " + strLength);



//HW5
let ArrObj = [{Name : 'Manoj',Age : 25},{Name : 'Reena',Age : 22}];
let result = ArrObj.map(obj => {
  
  let entries = Object.entries(obj);
  let key = entries[0][1];
  let value = entries[1][1];
  return {[key]: value};
});
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}


// HW6

let input = [1,8,5,2,6,4,9,5,2,10];
let output = [];
for (let i = 0; i < input.length; i++) {
  if (i === 0) {
    output.push(input[i]);
  } else {
    output.push(input[i] + input[i-1]);
  }
}
console.log(output);


//HW7 using for loop
const students2 = [{ name: "Saurabh", age: 22 },{ name: "Maheshwari", age: 25 }, { name: "Pratiksha", age: 30 },{ name: "Nilesh", age: 20 },{ name: "Aaditya", age: 25 },{ name: "Priyanka", age: 30 },{ name: "Rohan", age: 22 },{ name: "Seema", age: 28 },{ name: "Vikram", age: 20 },{ name: "Anushka", age: 24 },];
const studentsByAge = {};
for (const student of students2) {
  const age = student.age;
  if (!studentsByAge[age]) {
    studentsByAge[age] = student.name;
  } else {
    studentsByAge[age] += `, ${student.name}`;
  }
}
console.log(studentsByAge);

// hw8 using map
let inputArr = [10, 20, 30, 40, 8, 45];
console.log(inputArr);
let n=0;
let temp = 5;
let outputArr = inputArr.map(x =>{
  n= x+temp;
  (temp+=15);
  return n;
});
console.log('HW8 output using map')
console.log(outputArr);
/*
n= 0, temp =5;  map method is used to tranform each element from inputArr as x 
1st step n=10+5 = 15 then temp is incremented by 15 then temp will be 20
2nd step n= 20 + 20 = 40 then temp wil be 35
3rd step n= 30+35 = 65 then temp will be 50
4th step n= 40 + 50 = 90 then temp will be 65
5th step n= 8+65 = 73 then temp will be 80
6th step n = 45 + 80 = 125 temp will be 95
*/
//HW8 using for-loop
let k=5;
let out=[];
let i = 0;
inputArr.forEach((x) => {
  i = x+k;
  k+=15;
  out.push(i);
});
console.log('HW8 output using for-loop')
console.log(out);


for (const [key, value] of Object.entries(students)) {
    console.log(key + ": " + value);
  }

//var num1, num2;
const n1 = 20;
const n2 =3;
let addition = () => {
    return n1 + n2;
}

let subtraction = () => {
    return n1-n2;
}

let multiplication = () => {
    return n1* n2;
}

let division = () => {
    if (n2!=0) {
        return n1/n2;
    } else {
        console.log('Can not divide by zero')
    }
    
}

console.log(addition());
console.log(subtraction());
console.log(multiplication());
console.log(division());

let add = (a,b) => {
    return a + b;
}

let sub = (a,b) => {
    return a-b;
}

let mul = (a,b) => {
    return a* b;
}

let div = (a,b) => {
    if (b!=0) {
        return a/b;
    } else {
        console.log('Can not divide by zero')
    }
    
}

console.log(add(10,20));
console.log(sub(30,40));
console.log(mul(2,3));
console.log(div(20,2));
console.log(div(2,0));


a = 21;
a++;
++a;
console.log(a++);
a+=9;
console.log(++a);


let num1 = 5
let num2 = 7
let num3 = 12
let num4 = 2
let num5 = 16


let capitalNumber = (num1>num2 && num1 > num3 && num1>num4 && num1 > num5 ) ? 'num1' :
(num2>num1 && num2 > num3 && num2>num4 && num2 > num5 ) ? 'num2' :
(num3>num1 && num3 > num2 && num3>num4 && num3 > num5 ) ? 'num3' :
(num4>num1 && num4 > num2 && num4>num3 && num4 > num5 ) ? 'num4' : 'num5'
console.log('greater number is '+ capitalNumber);

//otherway

let capitalNumber2 = (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) ? num1 : 
(num2 > num3 && num2 > num4 && num2 > num5) ? num2 : 
(num3 > num4 && num3 > num5)? num3: 
(num4 > num5)? num4 : num5;

console.log('The greater number is ' + capitalNumber);

 