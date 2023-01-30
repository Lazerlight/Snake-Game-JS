const mainEl = document.querySelector("main");
const SNAKE_SPEED = 1;

let lastRenderTime = 0;

function renderGame(Time) {
  const timeSinceLastRender = (Time - lastRenderTime) / 1000;
  window.requestAnimationFrame(renderGame);
  lastRenderTime = Time;
  console.log(timeSinceLastRender + "s");
}

window.requestAnimationFrame(renderGame);
