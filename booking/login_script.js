var get_token = localStorage.getItem('token');
var get_email = localStorage.getItem('email');
// console.log(get_token);
// console.log(get_email);
if((get_token != '' && get_token != null) && (get_email != ''  && get_email != null)){
    window.location.href = "user.html";
}

function login(){
    var email = document.forms["login_frm"]["email"].value;
    var pass = document.forms["login_frm"]["psw"].value;
    if(email == ""){
        alert("Please enter email");
    } else if(pass == ""){
        alert("Please enter password");
    } else if(email != "" && pass != "") {
        var ascyncAwit = async () => {
            const rawResponse = await fetch('https://reqres.in/api/login', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({email: 'eve.holt@reqres.in', password: 'cityslicka'})
            });
            const content = await rawResponse.json();
            
            console.log(content);
            if(content.error){
                alert("Your password and email address are worng. Please try again");
            } else {
                localStorage.setItem("email", "eve.holt@reqres.in");
                localStorage.setItem("token", content.token);
                window.location.href = "user.html";
            }
        }
        ascyncAwit();
      
    }
}
