const canvasInit = (canvas) => {
  const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 500;
  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.onload = function() {
  const canvas = document.getElementById("canvas");
  const ctx = document.getElementById("canvas").getContext("2d");
  
  canvasInit(canvas);
}
