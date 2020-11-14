console.log("This is tut 16");

let element = document.createElement('li');
let text = document.createTextNode('I am text node');
element.appendChild(text);
//add a class name to li element
element.className = 'childul';
element.id = 'createdli';
element.setAttribute('title','mytitle');
// element.innerText = 'Hello Created By Rahul';//innerHtml


let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);


let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';

let tnode = document.createTextNode('this is node for ele2');
elem2.appendChild(tnode);

console.log(elem2);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('lui'));
myul.removeChild(document.getElementById('a'));

let pr = elem2.getAttribute('class');
console.log(elem2, pr);