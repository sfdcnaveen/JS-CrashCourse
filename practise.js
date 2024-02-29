let student1 = {'Name':'Naveen', 'Age' :27, 'Degree':'B.tech', 'class':undefined, 'State':'AP', 'feesPaid':true, 'Address':{'Street':'SaiRam Street', 'Pincode':'524201'}}
let student2 = {'Name':'Nageswari', 'Age' :26, 'Degree':'B.Com','class':undefined, 'State':'Telangana','feesPaid':false, 'Address':{'Street':'Narasinghrao Peta', 'Pincode':'524101'}}
let students =[student1,student2, {'Name':'Sai Krupa', 'Age' :24, 'Degree':'B.Sc','class':undefined, 'State':'MP', 'feesPaid':true, 'Address':{'Street':'BC Colony', 'Pincode':'524101'}}]

//Concatination
let msg= 'hello'+ student1.Name;
console.log(msg);
let name = 'naveen';
let msg2 = '${msg} ${name}';
console.log(msg2);


/* 
// For loop
for (let student of students)
{
    console.log(student);
}
*/
// For Each
students.forEach( (student,index,allstudents) => {
    console.log(student);
    console.log(index);
    console.log(allstudents);
});
// Map
let mapstudents = students.map((x) => {
    return {'studName':x.Name, 'studage':x.Age}
})
console.log(mapstudents);
// Filter
let filterStudents = students.filter((x)=> {
    return x.feesPaid === true;
}
)
console.log(filterStudents);

let mapFilter = students.filter((x)=> {
    return x.feesPaid === true;
}).map((x)=> {
    return {'studName':x.Name, 'studage':x.Age};
})
console.log(mapFilter);

// Spread operator 
let array2 = {'Name':'Rajinikanth', 'Age' :60, 'Degree':'MBBS','class':undefined, 'State':'TamilNadu','feesPaid':true, 'Address':{'Street':'Anna Nagar', 'Pincode':'560037'}}
let allarrays = [...students, ...array2];
console.log(allarrays);