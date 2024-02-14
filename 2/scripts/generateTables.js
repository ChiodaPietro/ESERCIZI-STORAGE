const items=JSON.parse(localStorage.getItem("items"))
console.log(typeof(items))
document.addEventListener("DOMContentLoaded",function(){
    let table=document.getElementById("table");
    items.forEach(element => {
        let row =document.createElement("tr");
        let name=document.createElement("td");
        let value=document.createElement("td")
        name.textContent=element['name']
        value.textContent=element['price']
        row.appendChild(name);
        row.appendChild(value);
        table.appendChild(row)
    });
    // for (const key in items) {
    //     if (Object.hasOwnProperty.call(items, key)) {
    //         const element = items[key];
    //         let row =document.createElement("tr");
    //         let name=document.createElement("td");
    //         let value=document.createElement("td")
    //         name.textContent=key;
    //         value.textContent=element;
    //         row.appendChild(name);
    //         row.appendChild(value);
    //         table.appendChild(row)
    //     }
    // }
    // if(rows||cols==null){
    //     for (let index = 0; index < 2; index++) {
    //         let row=document.createElement("tr");
    //         for (let i = 0; i < 2; i++) {
    //             let col=document.createElement("td")
    //             col.textContent="vamo raga"
    // row.appendChild(col)
    //             console.log("new row")
    //         }
    //         table.appendChild(row);
    //     }

    // }else{

    // console.log(table)
//     for(let i=0; i<parseInt(cols);i++){
//         let col=document.createElement("tr")
//         console.log("new col")
//         for(let j=0;j<parseInt(rows); j++){
//             let row= document.createElement("td")
//             row.textContent="vamo raga"
//             col.appendChild(row)
//             console.log("new row")
//         }
//         table.appendChild(col);
//         console.log(table.children)
//     }
// }
})
