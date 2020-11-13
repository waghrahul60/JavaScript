console.log("We are at tut 6");

const name = 'Rahul';
const g = 'Good Morhing';

console.log(g +' '+name)


let html;
html = '<h1> This is heading </h1>'+
        '<p> This is para </p>';

html = html.concat('this', '  str2');
console.log(html);
console.log(html.length);
console.log(html.toLocaleLowerCase());
console.log(html.toUpperCase());
console.log(html);



//String  Index
console.log(html[5]);
console.log(html.indexOf('This'));
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));


//charAt position
console.log(html.charAt(7));

//endsWith
console.log(html.endsWith('flkgh'));
console.log(html.endsWith('str2'));

//includes
console.log(html.includes('ejrhg'));
console.log(html.includes('str2'));

//substring
console.log(html.substring(1,6));

//slice
console.log(html.slice(0,6));
console.log(html.slice(-4));//returns last 4

//Split and returns arry
console.log(html.split(' '));
console.log(html.split('>'));


console.log(html.replace('This', 'it')); //replace 1st Occurance


let fruits1 = 'Oreange';
let fruits2 = 'apple';
let myHtml  = `Hello ${name}
            <h1>THIS IS HEADING </h1>
            <p> You Like ${fruits1} and ${fruits2}


`;

document.body.innerHTML =   myHtml;





