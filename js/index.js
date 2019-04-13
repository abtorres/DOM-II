// Your code goes here

//fun bus logo
let logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', function(event){
    event.target.style.color = 'green';    
});

logo.addEventListener('mouseout', function(e){
    event.target.style.color = '';
});

//button changes colors randomly when pressed
let btns = document.querySelectorAll('.btn');
btns.forEach(e => {
    e.addEventListener('click', function(e){
        let colors = ['red', 'blue', 'green', 'yellow'];
        let r = Math.floor(Math.random() * colors.length);
        e.target.style.color = colors[r];
    });
});


//nav changes color
let navColor = document.querySelector('.container');
navColor.addEventListener('keydown', e => {        //does not work ???
    e.target.style.background = 'yellow';
    console.log(e) //nothing
});
//body changes color when key pressed 
let bodyColor = document.querySelector('body');
bodyColor.addEventListener('keydown', e => {       //this works
    e.target.style.background = 'lightyellow';
    console.log(e) //returns: keydown {target: body, key: "?", charcode: ?, keyCode: ?}
});


