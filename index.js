const mainElement = document.querySelector("main#main");
mainElement.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Quachell is the champion";

// Append the newHeader to the DOM
document.body.appendChild(newHeader);