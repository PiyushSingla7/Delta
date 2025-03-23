// the differnce between console.log and console.dir is that console.log is used to print the value of the variable and console.dir is used to print the properties of the variable.console.log print the value on the other hand console.dir print the object.

let one = document.getElementById("first-heading");
console.dir(one);

let two = document.getElementsByClassName("heading-class");
console.dir(two);

let three = document.getElementsByTagName("h1");
console.dir(three);

// querySelector and querySelectorAll are used to select the element from the DOM It automatically identifies the type of element wheather it is tag or class or id. querySelector is used to select the first element from the DOM and querySelectorAll is used to select all the elements from the DOM.
let four = document.querySelector("#first-heading");
console.dir(four);

let five = document.querySelectorAll(".heading-class");
console.dir(five);

let six = document.querySelector("h1");
console.dir(six);

let seven = document.querySelectorAll("h1");
console.dir(seven);

// tagName is used to get the tag name of the element.
console.log(six.tagName);

// innerHTML is used to get the inner content of the element it displays text that is present inside along with html tags.
console.log(six.innerHTML);

// innerText is used to get the inner content of the element only displays the text present.
console.log(six.innerText);

// textContent is used to get the inner content of the element works like innertext it also works on hidden elements.
console.log(six.textContent);

// outerHTML is used to get the outer content of the element.
console.log(six.outerHTML);

// outerText is used to get the outer content of the element.
console.log(six.outerText);

// .children is used to get the children of the element.
document.querySelector(".first-div").children;

// .getAttribute is used to get the attribute of the element.
let div = document.querySelector(".first-div");
console.log(div);
let cl = div.getAttribute("class");
console.log(cl);

// .setAttribute is used to set the attribute of the element.
div.setAttribute("class", "new-class");
let cl2 = div.getAttribute("class");
console.log(cl2);

// .style is used to set the style of the element.
let div2 = document.querySelector("#box");
console.log(div2);
console.log(div2.style);
div2.style.backgroundColor = "red";
div2.style.color = "white";
div2.style.fontSize = "20px";

// node.append(el) adds at the end of node(inside)
// node.prepend(el) adds at the start of node(inside)
// node.before(el) adds before the node(outside)
// node.after(el) adds after the node(outside)
// node.remove(el) removes the node
let newbtn = document.createElement("button");
newbtn.innerHTML = "Click Me";
console.log(newbtn);
let div3 = document.querySelector("#box");
div3.append(newbtn);

let newheading = document.createElement("h1");
newheading.innerHTML = "<i>Hi I Am New !!</i>";
document.querySelector("body").prepend(newheading);

let para = document.querySelector(".para");
para.remove();

let btn1 = document.querySelector("#first-button");
btn1.onclick = (evt) => {
  console.log("Btn1 Was Clicked");
  let a = 25;
  a++;
  console.log(a);

  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX,evt.clientY);
};

let div5 = document.querySelector("#div2");
div5.onmouseover = (evt1) => {
  console.log("You Are Inside Div2");

  console.log(evt1);
  console.log(evt1.type);
  console.log(evt1.target);
  console.log(evt1.clientX,evt1.clientY);
};

let btn3 = document.querySelector("#third-button");
btn3.addEventListener("click",()=>{
    console.log("Button 3 Was Clicked Handler - 1");
})
btn3.addEventListener("click",()=>{
    console.log("Button Was Clicked Handler - 2");
})
btn3.addEventListener("click",(evt3)=>{
    console.log(evt3);
    console.log(evt3.type);
    console.log(evt3.target);
    console.log(evt3.clientX,evt3.clientY);
})

let handler4 = () => {
    console.log("Button 3 Was Clicked Handler - 4");
}
btn3.addEventListener("click",handler4);
btn3.removeEventListener("click",handler4);