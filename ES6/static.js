// ây dựng lớp thông tin gồm các thuộc tính tên, mô tả và hàm tính toán có 1 tham số  mặc định có giá trị bằng 1, hàm này tăng gấp 3 lần giá trị của tham số truyền vào.

// Xây dựng lớp hình học kế thừa từ lớp trên. Có các thuộc tính là chiều dài, mô tả và hàm tính toán với 1 tham số truyền vào.

// Tạo các đối tượng của lớp hình học và gọi các thuộc tính của lớp đó, các thuộc tính của lớp cha, và hàm để quan sát kết quả.

class infor {
    constructor(name, des) {
        this.name = name;
        this.des = des;
    }

    funct(agr=9) {
        return agr*3;
    }

}
let obj = new infor('obj',"this is a obj")
// console.log(obj)
// console.log(obj.funct(9))


class hinhHoc extends infor{
    constructor(name,age,length)
    {
        super(name,age)
        this.length =length;
    }
    
    
    

}

let obj2 =new hinhHoc(564)
console.log(obj2.funct(133))
console.log(obj2.name)
console.log(obj2.des)
console.log(obj2.length)
