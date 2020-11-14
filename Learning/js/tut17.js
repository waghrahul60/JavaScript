console.log('This is tut 17 | Events');

document.getElementById('heading').addEventListener('click', function (e) {

    let variable;
    console.log('You have click here');
    variable = e.target;
    variable = e.target.className;
    variable = e.target.id;
    variable = e.target.classList;

    variable = e.offsetX;
    variable = e.offsetY;

    variable = e.clientX;
    variable = e.clientY;



    console.log(variable);
    // location.href='//freestylecoder.com'
});