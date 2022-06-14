function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}


// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}


// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);


// // a promise
// let promise = new Promise(function (resolve, reject) { 
// 	setTimeout(function () { 
// 	resolve('Promise resolved')}, 4000); 
// });

// // async function
// async function asyncFunc() { 
 
// 	// wait until the promise resolves 
// 	let result = await promise; 
 
// 	console.log(result); 
// 	console.log('hello'); 
// }

// // calling the async function
// asyncFunc();