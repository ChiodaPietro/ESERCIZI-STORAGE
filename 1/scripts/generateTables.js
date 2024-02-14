let rows=localStorage.getItem("rows");
let cols=localStorage.getItem("cols");

document.addEventListener("DOMContentLoaded",function(){
    let table=document.getElementById("table");

    if(rows||cols==null){
        for (let index = 0; index < 2; index++) {
            let row=document.createElement("tr");
            for (let i = 0; i < 2; i++) {
                let col=document.createElement("td")
                col.textContent="vamo raga"
    row.appendChild(col)
                console.log("new row")
            }
            table.appendChild(row);
        }

    }else{

    console.log(table)
    for(let i=0; i<parseInt(cols);i++){
        let col=document.createElement("tr")
        console.log("new col")
        for(let j=0;j<parseInt(rows); j++){
            let row= document.createElement("td")
            row.textContent="vamo raga"
            col.appendChild(row)
            console.log("new row")
        }
        table.appendChild(col);
        console.log(table.children)
    }
}
})
