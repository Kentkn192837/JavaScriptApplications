const bar = (ctx) => {
  const start_x = 300;
  const start_y = 250;

  const bar_width = 30;
  const bar_height = 30;
  ctx.strokeStyle = '#0f0';
  ctx.fillStyle = '#0f0';
  ctx.beginPath();
  ctx.moveTo(start_x, start_y);
  ctx.lineTo(start_x + bar_width, start_y);

  ctx.moveTo(start_x + bar_width / 2, start_y);
  ctx.lineTo(start_x + bar_width / 2, start_y + bar_height);
  
  ctx.fillRect(start_x, start_y + bar_height, bar_width, bar_height + 40);
  
  ctx.moveTo(start_x + bar_width / 2, start_y + bar_height + 40);
  ctx.lineTo(start_x + bar_width / 2, start_y + bar_height + 80);

  ctx.moveTo(start_x, start_y + bar_height + 80);
  ctx.lineTo(start_x + bar_width, start_y + bar_height + 80)
  ctx.stroke();
}

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
  bar(ctx);
}
