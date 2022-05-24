
alert("Hello World!");

// If Condition
// console.log(' ');
// console.log("-------------- If Condition -------------------");
var js = 'amazing';
if(js == 'amazing') {
    alert("amazing");
}

// Function
console.log(' ');

console.log("-------------- Function -------------------");
function test(val){
    var val = val * 2;
    return val;
}
console.log(test(2));

// Data Type
console.log(' ');

console.log("-------------- Data Type -------------------");
var check_data_type = true;
console.log(check_data_type);
console.log(typeof check_data_type);
console.log(typeof "hello");
console.log(typeof 123);

// Basic Operator
console.log(' ');

console.log("-------------- Basic Operator -------------------");
var a = 10;
var cal = 10 - 5;
console.log(cal);


var now = 2037;
var ageJohn = now - 1991;
var ageOther = now - 2018;
console.log(ageJohn, ageOther);
console.log(ageJohn * 2, ageOther / 2, ageOther + 2, ageJohn - ageOther, 2 ** 3);

var x = 10;
x += 10;
x *= 10;
x--;
x--;
console.log(x);

console.log(ageJohn > ageOther);
console.log(ageJohn <= 18);
 

// String and Template
console.log(' ');

console.log("-------------- String and Template -------------------");
var string = "Javascript";
console.log(string+" Example");
console.log("I'm "+ string);
console.log(`I'm `+ string);
console.log('I\'m '+ string);

// True and false values
console.log(' ');
console.log("-------------- True and false values -------------------");
console.log(Boolean('john'));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log("5 false value: 0, '', undefined, Nan, null");

// Equality Oprators == And ===
console.log(' ');
console.log("-------------- Equality Oprators == And ===  -------------------");
var num = 18;
if(num == 18){
    console.log("== Success");
} 
if(num === '18'){
    console.log("=== Sucess");
}

// Logical Oprators 
console.log(' ');
console.log("-------------- Logical Oprators -------------------");
var logical1 = false;
var logical2 = true;
console.log(logical1 && logical2);
console.log(logical1 || logical2);
console.log(!logical1);

// The Switch Statement
console.log(' ');
console.log("-------------- The Switch Statement -------------------");
var day = "monday";
switch(day){
    case "monday":
        console.log("Monday");
        break;
    case "tuesday":
        console.log("Tuesday");
        break;
    case "wednesday":
        console.log("Wednesday");
        break;
    case "thursday":
       console.log("Thursday");
       break;
   case "friday":
        console.log("Friday");
        break;
    case "saturday":
        console.log("Saturday");
        break;
    case "sunday":
        console.log("Sunday");
        break;
    defalult:
        console.log("Nothing");
}

// Expression 
console.log(' ');
console.log("-------------- Expression -------------------");

if(23 > 14){
    console.log('23 is biggner');
}

// Ternary Oprator
console.log(' ');
console.log("-------------- Ternary Oprator -------------------");
var ternary_val = 23 < 14 ? '23 is biggner' : '23 is samller';
console.log(ternary_val);

// Arrow Function
console.log(' ');
console.log("-------------- Arrow Function -------------------");
var arrow_fun = birthYear => 2037 - birthYear;
console.log(arrow_fun(2000));

// Function calling other function
console.log(' ');
console.log("-------------- Function calling other function -------------------");
function fun1(a){
    return fun2(a);
}

function fun2(a){
    return a * 2;
}
 
console.log(fun1(10));

// Array
console.log(' ');
console.log("-------------- Array Function -------------------");
var arra = ['Abc', 'Xyz', 'MNO'];
console.log(arra);
console.log(arra[1]);
console.log(arra[arra.length - 1])


// Basic Array Opration
console.log(' ');
console.log("-------------- Basic Array Function -------------------");
// Add Add Array
var arra_add = ['John', 'Steven', 'Peter'];
var arra_push = arra_add.push('Jay');
console.log(arra_add);

var arra_add_unshift = ['John', 'Steven', 'Peter'];
var arra_unshift = arra_add_unshift.unshift('Jay');
console.log(arra_add_unshift);

// Remove Add Array
var arra_remove_pop = ['John', 'Steven', 'Peter'];
var arra_pop = arra_remove_pop.pop();
console.log(arra_remove_pop);

var arra_remove_shift = ['John', 'Steven', 'Peter'];
var arra_pop = arra_remove_shift.shift();
console.log(arra_remove_shift);

//  Index of in array
// check value and return index key
var arra_indexOf = ['John', 'Steven', 'Peter'];
console.log(arra_indexOf.indexOf('Peter'));
console.log(arra_indexOf.indexOf('Abc'));

// check value in array and return true or false
console.log(arra_indexOf.includes('John'));
console.log(arra_indexOf.includes('Abc'));

// Dot And Bracket
console.log(" ");
console.log("-------------- Dot And Brteacket -------------------");
var val = {
    firstName : 'John',
    age: '28',
    state: 'Gujarat',
    city: 'surat'
}
console.log(val);
console.log(val.firstName);
console.log(val['state']);

// Object Method
console.log(" ");
console.log("-------------- Object Method -------------------");
var obj = {
    firstName : 'John',
    lastName : 'Abc',
    birthYear : '2000',
    hasDriverLicance: true,
    calcAge: function(){
        var age = 2037 - this.birthYear;
        return age;
    }

}
console.log(obj.calcAge());

console.log(' ');
console.log("-------------- For Loop -------------------");
for(var i = 0; i < 10000; i++){
    console.log('For Loop example '+ i);
}

// Looping array, Breaking, Continuing
console.log(' ');
console.log("-------------- Looping array, Breaking, Continuing -------------------");

var obj1 = [
    'John',
    3000,
    'Abc',
    2000,
    'aaaaa'
]
// console.log(obj1);
for(var i = 0; i < obj1.length; i++){
    console.log(obj1[i]);
}

console.log("------ continue -----");
for(var i = 0; i < obj1.length; i++){
    if(typeof obj1[i] !== 'string') {
        continue;
    }
    console.log(obj1[i], typeof obj1[i]);
}

console.log("------ break -----");
for(var i = 0; i < obj1.length; i++){
    if(typeof obj1[i] !== 'string') {
        break;
    }
    console.log(obj1[i], typeof obj1[i]);
}

console.log(" ");
console.log("-------------- Loops in Loop -------------------");
for(var i = 0; i < 4; i++){
    console.log('-------------- String exercise ' + i);
    for(var r = 1; r < 6; r++){
        console.log('Exercise '+i+': Lifiting weight repetition ' + r);
    }
}

console.log(" ");
console.log("-------------- While Loop -------------------");
// for(var r = 0; r <= 10; r++){
//     console.log('Lifiting weight repetition '+ r);
// }
var  r = 1;
while(r <= 10){
    console.log('Lifiting weight repetition '+ r);
    r++;
}


// queryselector
console.log(" ");
console.log("-------------- queryselector -------------------");
document.querySelector(".message").style.color = "red";
document.querySelector('.message_change_text').textContent = "Query Selector change text example";

document.querySelector("#check_num_btn").addEventListener('click', function(){
    var val = document.querySelector('#check_number').value;
    if(val != ''){
        document.querySelector('.num_val').textContent = "Number is: "+val;
    } else {
        document.querySelector('.num_val').textContent = "";
    }

});

document.querySelector("#text_show").addEventListener('click', function(){
    document.querySelector('.show_text').classList.remove('d-none');
});
document.querySelector("#text_hide").addEventListener('click', function(){
    document.querySelector('.show_text').classList.add('d-none');
});

// document
document.querySelector('#key_down').addEventListener('keydown', function(){
    if(this.value != ""){
        console.log(this.value) ;
    }
});
document.querySelector('#key_up').addEventListener('keyup', function(){
    console.log(this.value);
});

// Destructing Array
console.log(" ");
console.log("-------------- Destructing Array -------------------");
var arr = [2,3,4];
// var a = arr[0];
// var b = arr[1];
// var c = arr[2];
var [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

console.log(" ");
console.log("-------------- Spread Array -------------------");
var array = [7,8,9];
var newArray = [1, 2, ...array];
console.log(newArray);

var array1 = ['a', 'b', 'c'];

for (var element of array1) {
  console.log(element);
}

// Set Method
console.log(" ");
console.log("---------------- Set Method ----------------");
var sel_demo = new Set([
    'pista',
    'pista',
    'green',
    'red',
    'pista',
    'pink'
]);
console.log(sel_demo);

console.log(" ");
console.log("---------------- Set Add Method ----------------");
var add_set = new Set();
add_set.add("a");
add_set.add("b");
add_set.add("c");
console.log(add_set.size);

console.log(" ");
console.log("---------------- Set Delete Method ----------------");
var set_delete = new Set([
    'pista',
    'pista',
    'green',
    'red',
    'pista',
    'pink'
]);
set_delete.delete("pista");
console.log(set_delete);

console.log(" ");
console.log("---------------- Map Function ----------------");
// every element mate function call thay
var numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));

console.log(" ");
console.log("---------------- Working With Strings ----------------");
var string = "working with string";
var str = 'ABC123';
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log('Xyz123'[0]);

console.log(string.length);
console.log('Xyz123'.length);
console.log("--------------");
console.log(string.indexOf('w'));
console.log(string.lastIndexOf('w'));
console.log(string.indexOf('string'));

console.log('---------------');
console.log(string.slice(8));
console.log(string.slice(8,14));
console.log(string.slice(-2));

console.log('---------------');
console.log(string.toLowerCase());
console.log(string.toUpperCase());

var str1 = "  ABC 123 ";
console.log(str1.trim());
var str_replace = "hyyy javascript";
console.log(str_replace.replace("hyyy", "hello"));

// 
console.log(" ");
console.log("---------------- How to pass argument ----------------");
var flight = "AB123";
var passager = {
    name : 'john',
    passport: 2342345432
} ;
function demo_pass_arg(flight, passager){
    flight = 'CD123';
    if(passager.passport == 2342345432){
        console.log(passager.passport);
    }
}
demo_pass_arg(flight, passager);

// console.log(" ");
// console.log("---------------- synchronous JavaScript ----------------");
// for(var s=0; s < 50; s++){
//     console.log(s);
// }
// console.log("hello");

// console.log(" ");
// console.log("---------------- Asynchronous JavaScript ----------------");
// setTimeout(function(){
//     for(var as=0; as < 50; as++){
//         console.log(as);
//     }
// }, 1000);

// console.log("hyyyyyyyyyyyyyyyyyy");

console.log(" ");
console.log("---------------- simpal api call ----------------");


var a = new XMLHttpRequest();
a.open("GET", 'https://jsonplaceholder.typicode.com/albums', false);
a.send();
var output = a.response;
console.log(JSON.parse(output));
console.log("##########################################################");


var b = new XMLHttpRequest();
b.open("GET", 'https://jsonplaceholder.typicode.com/users', false);
b.send();
var output = b.response;
console.log(JSON.parse(output));


console.log(" ");
console.log("---------------- callback function using api call ----------------");
var call_demo1 = (api_name) => {
    console.log("***************************************************************************");
    var a = new XMLHttpRequest();
    a.open("GET", api_name, false);
    a.send();
    var output = a.response;
    console.log(JSON.parse(output));
}
var get_api_data1 = (callback) => {
    var api_data = 'https://jsonplaceholder.typicode.com/albums';
    callback(api_data);
}


var call_demo = (api_url) => {
    var a = new XMLHttpRequest();
    a.open("GET", api_url, false);
    a.send();
    var output = a.response;
    console.log("-------- (((((((((((((((((((((((((((((((((((((((((((((((((((((((((");
    console.log(JSON.parse(output));
    get_api_data1(call_demo1);
}
var get_api_data = (callback) => {
    var api_data = 'https://jsonplaceholder.typicode.com/posts';
    callback(api_data);
}
get_api_data(call_demo);


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

console.log(" ");
console.log("----------------- Async & Await ------------------");
var ascyncAwit = async() => {
    var response = await fetch('https://jsonplaceholder.typicode.com/users');
    var ok = await response.json();
    var response = await fetch('https://jsonplaceholder.typicode.com/users');
    var ok2 = await response.json();
    console.log(ok);
    console.log('-----------------');
    console.log(ok2);
}
ascyncAwit();

console.log(" ");
console.log("------------- Closures -------------");
var first = () => {
    var text = "hello";
    var second = () => {
        var name = "jack";
        console.log(text);
    }
    return second();
}
console.log(first());


console.log(" ");
console.log("------------- LocalStorage -------------");
localStorage.setItem("name", "Jack");
console.log(localStorage.getItem('name'));
console.log(localStorage.removeItem('name'));
console.log(" ");
console.log("------------- sessionStorage -------------");
sessionStorage.setItem("namess", "Jack");
console.log(sessionStorage.getItem('namess'));
console.log(sessionStorage.removeItem('namess'));