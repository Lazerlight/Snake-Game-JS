const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

let inputDirection = { x: 0, y: 0 };
let previousInputDirection = { x: 0, y: 0 };

export function getInputDirection() {
  previousInputDirection = inputDirection;
  return inputDirection;
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (previousInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (previousInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (previousInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (previousInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

upBtn.addEventListener("click", (e) => {
  if (previousInputDirection.y !== 0) {
    return;
  }
  inputDirection = { x: 0, y: -1 };
});
downBtn.addEventListener("click", (e) => {
  if (previousInputDirection.y !== 0) {
    return;
  }
  inputDirection = { x: 0, y: 1 };
});
rightBtn.addEventListener("click", (e) => {
  if (previousInputDirection.x !== 0) {
    return;
  }
  inputDirection = { x: -1, y: 0 };
});
leftBtn.addEventListener("click", (e) => {
  if (previousInputDirection.x !== 0) {
    return;
  }
  inputDirection = { x: 1, y: 0 };
});
