console.log('this is tut 18 | Events');

let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('dbclick', func2);
btn.addEventListener('mousedown', func3);




function func1(e){
    console.log("Thanks",e);
    e.preventDefault();
}


function func2(e){
    console.log("Thanks its a double click ",e);
    e.preventDefault();
}

function func3(e){
    console.log("Thanks its a mouse click ",e);
    e.preventDefault();
}


//Mouse enter

document.querySelector('.no').addEventListener('mouseenter',function () {
    console.log("You entered no");
});

document.querySelector('.no').addEventListener('mouseleave',function () {
    console.log("You exist no");
});

document.querySelector('.container').addEventListener('mousemove',function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},15)`;
    console.log("You triggered mouse ");
});