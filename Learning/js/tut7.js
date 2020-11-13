console.log('We are in tut 7 | Array')


const marks = [43,25,76,93,56];
const fruits = ['Oreange','Apple','Banana'];
const mixed = ['Oreange',67,[44,66]];


const arr = new Array(23,123,21,'Oreange');
console.log(arr);
console.log(fruits);
console.log(mixed);
console.log(marks);



console.log(marks.length);
console.log(Array.isArray(arr));


arr[0] = 'Rahul';
console.log(arr);


let arrElement = arr[0];
console.log(arrElement);

//Index Of
let value = marks.indexOf(25);
console.log(value);

//Mutating Or Modifying Arrays
marks.push(99);//aat end
console.log(marks);

marks.unshift(1009);//at start
console.log(marks);

//Remove from end
// marks.pop();
// console.log(marks);

//Remove from staart
// marks.shift();
// console.log(marks);

//Remove elements between range
marks.splice(1,2); 
console.log(marks);

//Reverse array
marks.reverse();
console.log(marks);

//Make maarks const to let
// let marks2 = [1,2,3,4]
// marks = marks.concat(marks2);
// console.log(marks);

// Object
let myObj ={
    'first name' : 'Rahul',
    channel : 'freeStyleCoder',
    isActive : true,
    marks : [1,2,3,4]
}
console.log(myObj);
console.log(myObj.marks);
console.log(myObj['first name']);


