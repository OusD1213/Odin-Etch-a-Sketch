const myBody = document.querySelector("body");
let amount;
let userChoicebtn = document.getElementById("userChoice");
userChoicebtn.addEventListener("click", () => {
  amount = prompt("Enter a amount");
  if (isNaN(amount) || amount > 100) {
    alert("Enter a valid number <= 100");
  } else {
    resetGrid();
    setGrid();
  }
});


function resetGrid(){
  const container = document.getElementById('gridContainer');
  if (container){
    myBody.removeChild(container);
  }
}
function randColorNum() {
  return Math.floor(Math.random() * 256);
}

function randomRGB() {
  return `rgb(${randColorNum()},${randColorNum()},${randColorNum()})`;
}

function setGrid() {
  const container = document.createElement("div");
  container.id = "gridContainer";
  container.style.height = "800px";
  container.style.width = "800px";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  for (let i = 0; i < Number(amount); i++) {
    const rowContainer = document.createElement("div");
    rowContainer.style.display = "flex";
    for (let j = 0; j < Number(amount); j++) {
      const innerDiv = document.createElement("div");
      const width = 800 / Number(amount);
      innerDiv.style.width = width + "px";
      innerDiv.style.border = "1px solid grey";
      innerDiv.addEventListener("mouseover", (e) => {
        const color = randomRGB();
        e.target.style.backgroundColor = color;
      });

      rowContainer.appendChild(innerDiv);
    }
    container.appendChild(rowContainer);
  }
  myBody.appendChild(container);
}
