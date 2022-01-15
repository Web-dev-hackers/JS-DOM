console.log("index.js file is connected, enjoy DOM ;)");

const inputElement = document.createElement("input");
const lable= document.createElement("label");
const unorderedList= document.createElement("ul");

lable.innerText = "write your note";
inputElement.style.width = "60%";

document.body.appendChild(lable);
document.body.appendChild(inputElement);
document.body.appendChild(unorderedList);


inputElement.onchange = (event) => {
    console.log(event.target.value);
    let currentValue = event.target.value;

let divElement = document.createElement("div");
divElement.style.width = "50%";
divElement.style.display = "flex";
divElement.style.justifyContent = "space-between";

let buttonElement = document.createElement('button');
let newLiElement = document.createElement("li");

newLiElement.innerText = currentValue;
buttonElement.innerText = "delete";

divElement.appendChild(newLiElement);
divElement.appendChild(buttonElement);
unorderedList.appendChild(divElement);

inputElement.value = "";

buttonElement.onclick = () => {
    unorderedList.removeChild(divElement);
};
};


