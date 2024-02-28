const myBody = document.querySelector("body");

function setGrid() {
  const container = document.createElement("div");
  container.style.flexWrap = "wrap";
  container.style.display = "flex";
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const innerDiv = document.createElement("div");
      // innerDiv.textContent = " -";
      const width = "50px";
      const height = "50px";
      innerDiv.style.height = height;
      innerDiv.style.width = width;
      innerDiv.style.border = "10px solid pink";
      innerDiv.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
        // create with intial height and width initally not with event listnere
      });

      container.appendChild(innerDiv);
      myBody.appendChild(container);
    }
  }
}
setGrid();
