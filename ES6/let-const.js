// Cú pháp ES5
// for (var i = 0; i < 5; i++) {
//     console.log(i); // 0,1,2,3,4
// }
// console.log(i); // 5


// Cú pháp ES6
// for (let i = 0; i < 5; i++) {
//     console.log(i); // 0,1,2,3,4
// }
// console.log(i); // undefined





// class Person {
    
//     constructor (fullName, age) {
//         this.fullName = fullName;
//         this.age = age;
//     }
//      get = () => {
       
            
//             console.log (this.fullName + this.age);
//         };
//  }

 
// var p = new Person('Mỹ Linh', 18);
// var printInfo = p.get();
// printInfo; // Tôi là Mỹ Linh. 18 tuổi


// for ... of : gia tri
// for ... in :index



// const team = [
//     {member: 'John',km: 3},
//     {member: 'Jane',km: 4},
//     {member: 'David',km: 5},
//     {member: 'Peter',km: 2},
// ];

// let  sum = 0;

// // Sử dụng vòng lặp for để duyệt qua các phần tử, tính tổng số km team chạy được.
// for (const {km} of team) {
//     sum += km;
// }

// console.log(`Tổng số km: ` + sum); // 14
debugger;
let students = ['John', 'Sofia', 'Bob'];
let copy_students = students;
console.log(copy_students);
console.log(students);
students.push('Sally'); // Change students

console.log(copy_students);

