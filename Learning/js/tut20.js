console.log('this is tut 20');

let impArray = ['rahul','kalpesh','sudya'];

//Add key Value into Local Storage
localStorage.setItem('Name','Rahul');
localStorage.setItem('Name2','Kalpesh');
localStorage.setItem('nav', JSON.stringify(impArray));



//Clear Entire Local Storage
// localStorage.clear();

//Clear Particulat Key
localStorage.removeItem('Name2');


//Retrive from local storage
let a = localStorage.getItem('Name');
let b = JSON.parse(localStorage.getItem('nav'));

console.log(a);
console.log(b);


//Session Storage

sessionStorage.setItem('sessionName','Rahul');
sessionStorage.setItem('sessionName2','Kalpesh');
sessionStorage.setItem('sessionnav', JSON.stringify(impArray));

// sessionStorage.clear();