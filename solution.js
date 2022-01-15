const inputElement = document.createElement("input");
const uListElement = document.createElement("ul");
const inputLabel = document.createElement("label");
const noNotesElement = document.createElement("p");
noNotesElement.innerText = "There are no notes";

inputElement.style.width = "60%";
inputElement.style.marginLeft = "auto";
inputElement.style.marginRight = "auto";
inputLabel.innerText = "note: ";

document.body.appendChild(inputLabel);
document.body.appendChild(inputElement);
document.body.appendChild(uListElement);
document.body.appendChild(noNotesElement);

inputElement.onchange = (e) => {
  let inputValue = e.target.value;

  noNotesElement.style.display = "none";
  let div = document.createElement("div");
  let newLi = document.createElement("li");
  let deleteButton = document.createElement("button");
  deleteButton.onclick = (buttonEvent) => {
    console.log(inputValue);
    uListElement.removeChild(div);
    console.log(uListElement.childElementCount);
    if (!uListElement.childElementCount) {
      noNotesElement.style.display = "block";
    }
  };
  deleteButton.innerText = "Delete";
  deleteButton.style.color = "red";
  div.style.display = "flex";
  div.style.marginTop = "10px";
  div.style.marginBottom = "10px";
  div.style.justifyContent = "space-between";
  div.style.width = "200px";

  newLi.innerText = inputValue;
  div.appendChild(newLi);
  div.appendChild(deleteButton);
  uListElement.appendChild(div);
  inputElement.value = "";
};
