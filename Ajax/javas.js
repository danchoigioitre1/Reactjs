
list = [];

async function getToDo() {

    try {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
        list = response.data;

        toDo()

    } catch (error) {
        throw new Error(error);
    }
}

function toDo() {
    let ele = `<tr> 
    <th> check </th>
    <th> Jobs </th>
     </tr>`

    // list.map(value => {

    //     ele += `<tr> 
    //     <td style="width = 50px" > <input id="check"  type = "checkbox"> </td>
    //     <th> ${value.title} </th>
    //      </tr>`

    // }
    // )
   

let checked = "checked"

    for (i = 0; i < list.length; i++) {
        if (list[i].completed) {

            ele += `<tr> 
                <td style="width = 50px" > <input ${checked}  type = "checkbox"> </td>
                 <th> ${list[i].title} </th>
                 </tr>`
        } else {
            ele += `<tr> 
                <td style="width = 50px" > <input  type = "checkbox"> </td>
                 <th> ${list[i].title} </th>
                 </tr>`
        }
    }
    document.getElementById('table').innerHTML = ele

}

function add(){
    let Input = document.getElementById('input').value;
    let listItem = document.createElement('tr');
    let  table = document.getElementById('table');
    listItem.innerHTML = ` 
    <td style="width = 50px" > <input  type = "checkbox"> </td>
     <th> ${Input} </th>`
     
   table.appendChild(listItem);
}