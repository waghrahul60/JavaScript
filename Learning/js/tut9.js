console.log('This is tutorial 9 | Loops');

// Loops : for while, do-while
let a = 34;
a += 1;
a++;
console.log(a);

for (let i = 0; i < 100; i++) {
    console.log(i);
}


let j = 0;
while (j < 100) {
    console.log(j + 1);
    j += 1;
}


//Do While Loop
let k = 0;
do {
    if(k===5){
        k+=1;
        // break;
        continue;
    }
    console.log(k+1);
    k += 1;
} while (k < 10);

console.log("done");

let arr = [1,2,3,4,5,6];


//For Each Loop
arr.forEach(function(element, index, array){
    console.log(element, index, array);
});


//Object Printing
let obj = {
    name : 'Sudya',
    age: 78,
    type: 'ML Programer',
    os: 'Ubantu'
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}