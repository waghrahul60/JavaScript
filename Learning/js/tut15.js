console.log("welcome to tut 15");

let cont = document.querySelector('.no');
cont = document.querySelector('.container');

console.log(cont.childNodes);
console.log(cont.children);


let nodeName = cont.childNodes[6].nodeName;
console.log(nodeName);

/*
Node Type
1. element
2. Attribute
3. Text nose
8. Comment
9. document
10. docType 
*/
let nodeType = cont.childNodes[6].nodeType;
console.log(nodeType);

let container = document.querySelector('.container');
console.log(container.children[0].children[0].children);

console.log(container.firstChild);//text, comment
console.log(container.firstElementChild);// 1st element


console.log(container.lastChild);//text, comment
console.log(container.lastElementChild);//last element


console.log(container.childElementCount);//last element

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);



