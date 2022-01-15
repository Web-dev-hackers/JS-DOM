console.log("index.js file is connected, enjoy DOM ;)");
const inputel = document.createElement("input");
const labelel = document.createElement("label");
const unorderedlist = document.createElement("ul");

labelel.innerText ="write your notes";
inputel.style.width ='60%';

document.body.appendChild(inputel);

document.body.appendChild(labelel);

document.body.appendChild(unorderedlist);

inputel.onchange = (event) => {
    console.log(event.target.value);
    let currentValue = event.target.value;

    //create div Element
    let newLdivelement = document.createElement("div");
    newLdivelement.style.width ="50%";
    newLdivelement.style.display = "flex";
    newLdivelement.style.justifycontent = "space-between";

    //create button Element
    let buttonelement = document.createElement("button");
    //create li Element
    let newLielement = document.createElement("li");
    //give it the current value
    newLielement.innerText = currentValue;
buttonelement.innerText = "delete";




    newLdivelement.appendChild(newLielement);
    newLdivelement.appendChild(buttonelement);
    //append to unordred list value

    unorderedlist.appendChild(newLdivelement);
    inputel.value = "";

    buttonelement.onclick =() => {
        console.log("deleted");
        unorderedlist.removeChild(newLdivelement);

    }
}

