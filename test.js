const myBody = document.querySelector('body');
let amount = prompt("Enter a amount");

// try {
// } catch (amount > 100) {
//   console.error(error);
//   // Expected output: ReferenceError: nonExistentFunction is not defined
//   // (Note: the exact output may be browser-dependent)
// }



// fix height and width to share it evenly between div using flex

function setGrid() {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexWrap = "wrap"; // Wrap items to the next line
  for (let i = 0; i < Number(amount); i++) {
    const rowContainer = document.createElement("div");
    rowContainer.style.display = "flex";
    for (let j = 0; j < Number(amount); j++) {
      const innerDiv = document.createElement("div");
      const width = "50px";
      const height = "50px";
      innerDiv.style.height = height;
      innerDiv.style.width = width;
      innerDiv.style.border = "2px dotted grey"
      innerDiv.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
      });

      rowContainer.appendChild(innerDiv);
    }
    container.appendChild(rowContainer);
  }
  myBody.appendChild(container);
}
setGrid();
console.log("Hello");