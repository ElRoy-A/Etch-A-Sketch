const gridContainer = document.getElementById("grid-container");

const black_btn = document.getElementById("black");
const RGB_btn = document.getElementById("RGB");
const erase_btn = document.getElementById("eraser");
const reset_btn = document.getElementById("reset");

let colorChoice = "black";

function createGrid(rows, columns) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-columns', columns);
    
    for (i = 0; i < (rows * columns); i++) {
        let gridElement = document.createElement("div");
        gridContainer.appendChild(gridElement).className = "grid-item";

        gridElement.addEventListener("mouseover", function () {
            if (colorChoice === "black") {
                gridElement.style.backgroundColor = "black";
            }
            else if (colorChoice === "RGB") {
                gridElement.style.backgroundColor = "crimson";
            }
            else if (colorChoice === "eraser") {
                gridElement.style.backgroundColor = "var(--clr-bg)";
            }
        })
    };
};

createGrid(16, 16);


// event listeners for changing of colour choices
RGB_btn.addEventListener("click", function() {
    colorChoice = "RGB";
})
black_btn.addEventListener("click", function() {
    colorChoice = "black";
})
erase_btn.addEventListener("click", function() {
    colorChoice = "eraser";
})

reset_btn.addEventListener("click", function() {
    location.reload();
})