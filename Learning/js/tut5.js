console.log('tut5');


//Type Conversion
let myVar;
myVar = 34;

console.log(myVar);
myVar = String(34);
console.log(myVar, (typeof myVar));


let booleanvar = String(true);
console.log(booleanvar, (typeof booleanvar));

let date = new Date();
console.log(date);

let date1 = String(new Date());
console.log(date1, (typeof date1));


let arr = String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let i = 8;
console.log(i.toString());


let stri = Number("3636");
stri = Number("3636h");
stri = Number(false);
stri = Number([1,2,3,4,5]);

console.log(stri, (typeof stri));


let number = Number('34.125');
number = parseInt('34.156');
number = parseFloat('34.156');

console.log(number, (typeof number));
console.log(number.toFixed(7), (typeof number));

//Type Coercion

let mystr = "698";
let myNum = 34;
console.log(mystr + myNum);





