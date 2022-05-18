var get_token = localStorage.getItem('token');
var get_email = localStorage.getItem('email');
console.log(get_token);
if((get_token == '' || get_token == null) || (get_email == '' || get_email == null)){
    window.location.href = "login.html";
}
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

let value = params.id;
if(value != '' && value != null ){
    singleUser();
    function singleUser(){
        var ascyncAwit = async () => {
          var response = await fetch('https://reqres.in/api/users/'+value);
          var data = await response.json();
          console.log(response.status);
          if(response.status == 404){
            window.location.href = "user.html";
          } else {
              var data_response = data.data;
              console.log(data_response.first_name);
              document.getElementById("fname").value = data_response.first_name;
              document.getElementById("lname").value = data_response.last_name;
              document.getElementById("email").value = data_response.email;
            }
        }
        ascyncAwit();
    }
}

function validateForm() {
  var first_name = document.forms["form"]["fname"].value;
  var last_name = document.forms["form"]["lname"].value;
  var email = document.forms["form"]["email"].value;
  if (first_name == "") {
    alert("Please enter first name");
    return false;
  } else {
    var ascyncAwit = async () => {
        const rawResponse = await fetch('https://reqres.in/api/users/'+value, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({first_name: first_name, last_name: last_name, email: email})
        });
        const content = await rawResponse.json();
        
        console.log(content);
        if(rawResponse.status == 404){
            // alert("Your password and email address are worng. Please try again");
        } else {
            // localStorage.setItem("email", "eve.holt@reqres.in");
            // localStorage.setItem("token", content.token);
            // window.location.href = "user.html";
        }
    }
    ascyncAwit();
  }

}