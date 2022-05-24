
var get_token = localStorage.getItem('token');
var get_email = localStorage.getItem('email');

if ((get_token == '' || get_token == null) || (get_email == '' || get_email == null)) {
    window.location.href = "login.html";
} else {
    var get_sucess_msg_check = localStorage.getItem('login_sucess_msg');
    console.log(get_sucess_msg_check);

    if (get_sucess_msg_check == '' || get_sucess_msg_check == null) {
        var get_sucess_msg = localStorage.setItem('login_sucess_msg', 'You are login sucessfully');
        var get_sucess_msg_show = localStorage.getItem('login_sucess_msg');

        document.getElementById("sucess_msg").innerHTML = get_sucess_msg_show;
        setTimeout(function () {
            document.getElementById("sucess_msg").innerHTML = "";
        }, 3000);
    }
}

// User List Fetch
function user_list() {
    var promise = new Promise((resolve, reject) => {
        var a = new XMLHttpRequest();
        a.open("GET", 'https://reqres.in/api/users', false);
        a.send();
        var output = a.response;
        var data = JSON.parse(output);
        if (data.total != '0') {
            resolve(data);
        } else if (data.total == '0') {
            resolve("not")
        } else {
            reject("error");
        }
    });
    // promise.then(result => console.log(result)).catch(()=> {    
    //     console.log('error');
    // })
    promise.then(function (result) {
        console.log(result);
        if (result.total != 0) {
            if (result.data != '') {
                var get_data = result.data;
                console.log(get_data)
                user_list_html = '';
                for (var ul = 0; ul < get_data.length; ul++) {
                    var data_response = get_data[ul];
                    var no = ul + 1;
                    user_list_html += '<tr>\
                    <td>'+ no + '</td>\
                    <td>'+ data_response.first_name + ' ' + data_response.last_name + '</td>\
                    <td>'+ data_response.email + '</td>\
                    <td><a href="form.html?id='+ data_response.id + '">Edit   </a><a href="javascript:void(0)" onclick="delete_user(' + data_response.id + ')"> Delete</a></td>\
                  </tr>';
                }
                document.getElementById("tbody").innerHTML = user_list_html;
            }
        }

    }).catch(() => {
        console.log('error');
    })
}
user_list();

// Delete User 
function delete_user(id) {
    if (confirm("Are you sure you want to delete user?")) {
        var ascyncAwit = async () => {
            const rawResponse = await fetch('https://reqres.in/api/users/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            });
            console.log(rawResponse);
            if (rawResponse.status == 404) {
                alert("Something went wrong please try again");
            } else {
                alert("User deleted Sucessfully");
                user_list();
            }
        }
        ascyncAwit();
    } else {
        // cancle press button
    }
}

function logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('login_sucess_msg');
    window.location.href = "login.html";
}
