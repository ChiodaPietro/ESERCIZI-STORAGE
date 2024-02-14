document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submit").addEventListener("click", function(){
localStorage.setItem('cols', document.getElementById("rows").value);
localStorage.setItem('rows', document.getElementById("cols").value )

window.location.href = 'second.html';

    })
})