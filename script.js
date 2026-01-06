const colorPicker = document.getElementById("color");
const brushSizeSelector = document.getElementById("BrushSize");
const penTool = document.getElementById("pen");
const eraserTool = document.getElementById("eraser");
const drawSquareBtn = document.getElementById("square");
const clearCanvasBtn = document.getElementById("clean");
const DownloadDrawingBtn = document.getElementById("download");
const canvas = document.getElementById("canvas");

// Line , eraser , clear drawing , Sqaure , downaload

const ctx = canvas.getContext("2d");

canvas.height = 420;
canvas.width = 800;

let isDrawing = false;
let currentTool = "pen";
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
  ctx.strokeStyle = currentTool == "eraser" ? "#ffffff" : colorPicker.value;
  ctx.lineWidth = brushSizeSelector.value;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}
function stopDrawing() {
  isDrawing = false;
}

eraserTool.addEventListener("click", function () {
  penTool.classList.remove("active");
  eraserTool.classList.add("active");
  currentTool = "eraser";
});
penTool.addEventListener("click", function () {
  penTool.classList.add("active");
  eraserTool.classList.remove("active");
  currentTool = "pen";
});

clearCanvasBtn.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

DownloadDrawingBtn.addEventListener("click", function () {
  let canvasImage = canvas.toDataURL("image/png");
  let anchorEle = document.createElement("a");
  anchorEle.href = canvasImage;
  anchorEle.download = "WhiteBoard.png";
  document.body.appendChild(anchorEle);
  anchorEle.click();
  document.body.removeChild(anchorEle);
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
