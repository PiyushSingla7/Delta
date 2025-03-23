let modebtn = document.querySelector("#mode");
let currmode = "Light-mode";
let body = document.querySelector("body");

let handler = () => {
    console.log("You Are Trying To Change The Theme");
    if(currmode=="Light-mode"){
        currmode="Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode="Light-mode";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
}
modebtn.addEventListener("click",handler);