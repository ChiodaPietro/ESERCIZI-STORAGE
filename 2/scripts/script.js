document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submit").addEventListener("click", function(){
localStorage.setItem("items", '[{"name":"arancia" ,"price": 10}, {"name":"arancia", "price": 10}, {"name":"arancia" ,"price": 10}, {"name":"arancia", "price": 10}]')

window.location.href = 'second.html';

    })
})