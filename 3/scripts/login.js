document.addEventListener("DOMContentLoaded", function(){
    const btn_login=document.getElementById("login")

    btn_login.addEventListener("click", ()=>{
        const mail=document.getElementById("mail").value
        const password=document.getElementById("password").value
        console.log("clicked")
        console.log(mail)
        if(sessionStorage.getItem(mail)==password){
            sessionStorage.setItem("cred", mail+"åååå"+password);
            window.location.href="login.html"
        }else{
            if(!document.getElementById("alert")){
                const alert=document.createElement("label")
                alert.id="alert"
                    alert.textContent="invalid email or password";
                    const body=document.querySelector("body")
                    body.appendChild(alert);
            }
        }
    })
})