let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

let turnO= true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", function() {
        console.log("Box was clicked!");
        if(turnO){
            box.textContent = "O";
            turnO = false;
        } else {
            box.textContent = "X";
            turnO = true;
        }
        box.disabled = true;
    });
});