console.log('this is tut10 | Functions In java script');


let name = 'Rahul';
let naame2 = 'Klpesh'

console.log(`Happy Divali ${name}`);


console.log(`Happy Divali ${naame2}`);




function greet(n,thanks='Thanks You') {
    console.log(`Happy Divali ${n}
        ${thanks}`);
        return 4;
}

let n = 'Sudya';
let n2 = 'Mohit';

let val = greet(n, 'Thanks a lot');
console.log(val);


//Assign variable to function
const myGreet = 
function greet1(n,thanks='Thanks You') {
    console.log(`Happy Divali ${n}
        ${thanks}`);
        return 4;
}

let val2 = myGreet(n2,'gfg');

//Object
const myObj = {
    name : 'rahul',
    game : function(){
        //Call function in obj
        return "GTA";
    }

}

console.log(myObj.game());


arr = ['fruit', 'apple','oreange'];

arr.forEach(function (element,index,array) {
    console.log(element,index);
});


//Scope Of var | lat | Const
if(1){
var i = 234;
console.log(i);
}
 console.log(i);

function ui(name) {
    let i = 4;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("Rahul"),i);