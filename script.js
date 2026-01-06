const colorPicker = document.getElementById("color");
const brushSizeSelector = document.getElementById("BrushSize");
const penTool = document.getElementById("pen");
const eraserTool = document.getElementById("eraser");
const drawSquareBtn = document.getElementById("square");
const clearCanvasBtn = document.getElementById("clean");
const DownloadDrawingBtn = document.getElementById("download");
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

canvas.height = 420;
canvas.width = 800;

let isDrawing = false;
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = brushSizeSelector.value;
ctx.lineCap = "round";

function startDraw(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}
function draw(e) {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}
function stopDrawing() {
  isDrawing = false;
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
