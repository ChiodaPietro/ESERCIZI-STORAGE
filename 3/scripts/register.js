
document.addEventListener("DOMContentLoaded", ()=>{
    const register_btn=document.getElementById("register");
    register_btn.addEventListener("click",()=>{
        const mail=document.getElementById("mail").value
        const password=document.getElementById("password").value
        const body=document.querySelector("body")
      if(sessionStorage.getItem(mail)){
        if(!document.getElementById("alert")){
            const alert=document.createElement("label")
            alert.id="alert"
                alert.textContent="invalid email";
                const body=document.querySelector("body")
                body.appendChild(alert);
        }
      }else{
        // for (let index = 0; index < sessionStorage.length; index++) {
        //     const element=sessionStorage.key(index);
        //     console.log(element)
            
        // }
        
        sessionStorage.setItem(mail, password)
        const confirmation= document.createElement("p");
        confirmation.textContent="go chekc out at the login page";
        body.appendChild(confirmation)
        
      }
})
})
