let kids = [
    {id: 1, name: "a", age: 3},
    {id: 2, name: "b", age: 2},
    {id: 3, name: "c", age: 7},
    {id: 4, name: "d", age: 4},
    {id: 5, name: "e", age: 8}
    ];


//     const mau_giao = [];
//     kids.forEach(kid => {
//         if (kid.age < 6) {
//             mau_giao.push({
//                 id: kid.id,
//                 name: kid.name
//             })
//         }
//     });
// console.log(mau_giao);
/////////////////////////////////

const kids2 = kids.filter(kid => kid.age < 11 && kid.age > 5).map(kid => ({
    id: kid.id,
    name: kid.name
}));
 console.log(kids2);