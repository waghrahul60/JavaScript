console.log("This is ut8 | If else");

const age = '65';
const vari = 34;
const doesDrive = true;

if(age == 19){
    console.log('Age is 19');
}else if(age == 65){
    console.log('Age is 65');
}
else{
    console.log('Age is not 19')
}

//To check value ==
//To check value + data type ===
//Not Equal !=
//Not Double equal value and data type not matching !==


//To Check Wether Variable Is Define Or not
if(typeof vari !== 'undefine'){
    console.log('Vari is defile')
}else{
    console.log('Vari is not defile')
}

if (doesDrive) {
    console.log('You can drive');
}


//Turnary Operator
console.log(age == 45? 'Age is 45':'Age is not 45');


//Switch case
switch (age) {
    case 18:
        console.log('Age is 18');
        break;

    default:
        console.log('Age is not valid');
        break;
}