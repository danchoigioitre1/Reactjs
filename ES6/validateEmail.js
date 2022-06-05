function isValidateEmail(str){
  let  check =  /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
  if (check.test(str)) return true;
  return false;
}


console.log(isValidateEmail("a@gmail.com"))
console.log(isValidateEmail("@#abc@gmail.com"));