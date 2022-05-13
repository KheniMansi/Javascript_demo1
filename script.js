
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
console.log("-------------- Foor Loop -------------------");
for(var i = 0; i < 10; i++){
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
