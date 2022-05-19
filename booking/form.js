var get_token = localStorage.getItem('token');
var get_email = localStorage.getItem('email');
console.log(get_token);
if ((get_token == '' || get_token == null) || (get_email == '' || get_email == null)) {
  window.location.href = "login.html";
}
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let value = params.id;
if (value != '' && value != null) {
  document.getElementById("email").setAttribute("disabled", "disabled");
  singleUser();
  function singleUser() {
    var ascyncAwit = async () => {
      var response = await fetch('https://reqres.in/api/users/' + value);
      var data = await response.json();
      console.log(response.status);
      if (response.status == 404) {
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
  } else if (last_name == "") {
    alert("Please enter last name");
  } else if (email == "") {
    alert("Please enter email");
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
    alert("You have entered an invalid email address!");
  } else {
    if (value != '' && value != null) {
      var ascyncAwit = async () => {
        const rawResponse = await fetch('https://reqres.in/api/users/' + value, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ first_name: first_name, last_name: last_name })
        });
        const content = await rawResponse.json();

        console.log(content);
        if (rawResponse.status == 404) {
          alert("Something went wrong please try again");
        } else {
          // localStorage.setItem("email", "eve.holt@reqres.in");
          // localStorage.setItem("token", content.token);
          alert("User update sucessfully");
          window.location.href = "user.html";
        }
      }
      ascyncAwit();
    } else {
      var ascyncAwit = async () => {
        const rawResponse = await fetch('https://reqres.in/api/users', {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ first_name: first_name, last_name: last_name, email: email })
        });
        const content = await rawResponse.json();

        console.log(content);
        console.log(rawResponse);
        if (rawResponse.status == 404) {
          alert("Something went wrong please try again");
          // alert("Your password and email address are worng. Please try again");
        } else {
          alert("User create sucessfully");
          // localStorage.setItem("email", "eve.holt@reqres.in");
          // localStorage.setItem("token", content.token);
          // window.location.href = "user.html";
          window.location.href = "user.html";
        }
      }
      ascyncAwit();
    }
  }

}