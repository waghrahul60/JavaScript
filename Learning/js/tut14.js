console.log("Welcome to tut14 | Dom Selector");

/*
Element Selectors:
1. Single element Selector
2.Multi element Selector



*/

// Single element Selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = "Rahul";
element.innerHTML = '<b>Rahul Wagh</b>'
console.log(element);


let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div'); //get 1st element
sel.style.color = 'green';
console.log(sel);


//Multi Element Selector

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
});

// console.log(elems[0].getElementsByClassName('child'));



// for (let index = 0; index < array.length; index++) {
//     const element = elems[index];
//     console.log(element);
    
// }