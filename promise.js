console.log(" ");
console.log("------------------------- Promise -----------------------");
var promise = new Promise((resolve, reject) => {
    var a = new XMLHttpRequest();
    a.open("GET", 'https://jsonplaceholder.typicode.com/posts', false);
    a.send();
    var output = a.response;
    console.log(JSON.parse(output));
    if(a.status != '404'){
        resolve("if");
    } else {
        reject("error");
    }
})
promise.then(result => console.log(result)).catch(()=> {    
    console.log('error');
})
promise.then(function(){
    var promise_next = new Promise((resolve, reject) => {
        var a = new XMLHttpRequest();
        a.open("GET", 'https://jsonplaceholder.typicode.com/posts', false);
        a.send();
        var output = a.response;
        console.log(JSON.parse(output));
        if(a.status != '404'){
            resolve("iffffffffffffffffffffffffffffffffffffffffffffffff");
        } else {
            reject("errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        }
    })
    promise_next.then(result1 => console.log(result1)).catch(()=> {    
        console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    })
}).catch(()=> {    
    console.log('error');
})