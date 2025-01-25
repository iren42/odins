console.log("Hello");

const container = document.querySelector("#container");

const red_p = document.createElement("p");
red_p.setAttribute("style", "color: red");
red_p.textContent = "Hey I'm red!";

const blue_h3 = document.createElement("h3");
blue_h3.setAttribute("style", "color: blue");
blue_h3.textContent = "I'm blue h3!";

const div_bp = document.createElement("div");
div_bp.setAttribute("style", "border: solid black; background-color: pink;");
div_bp.textContent = "div";

container.append(red_p, blue_h3, div_bp);


const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p = document.createElement("p");
p.textContent = "ME TOO";

div_bp.append(h1, p);


let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    // event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
});
