function isValidateAcc(str){
    let  check =  /^[_a-z0-9]{6,}$/;
    if (check.test(str)) return true;
    return false;
  }
  
  
  console.log(isValidateAcc("123abc_"))
  console.log(isValidateAcc("@#abc@gmail.com"));

//   Ký hiệu	Mô tả
// ^	Bắt đầu chuỗi regex
// [_a-z0-9]	Ký tự cho phép dấu gạch dưới (_) chỉ là các chữ thường từ a-z hoặc 0-9
// {6,}	Ít nhất là 6 ký tự
// $	Kết thúc chuỗi regex
