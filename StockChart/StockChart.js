const bar = (ctx, start_x, start_y, openingQuotation, closingQuotation, highest, lowest) => {
  const bar_width = 30;
  const bar_height = Math.abs(closingQuotation - openingQuotation);

  const bar_center = start_x + bar_width / 2;
  const upper_line = Math.abs(highest - closingQuotation);        // 上ひげの長さ
  const under_line = Math.abs(openingQuotation - lowest);   // 下ひげの長さ

  if (closingQuotation > openingQuotation) {
    ctx.strokeStyle = '#0f0';
    ctx.fillStyle = '#0f0';
  } else if (closingQuotation == openingQuotation) {
    ctx.strokeStyle = '#fff';
    ctx.fillStyle = '#fff';
  } else {
    ctx.strokeStyle = '#f00';
    ctx.fillStyle = '#f00';
  }

  ctx.beginPath();
  // 上ひげ
  ctx.moveTo(bar_center, start_y);
  ctx.lineTo(bar_center, start_y - upper_line);
  
  ctx.fillRect(start_x, start_y, bar_width, bar_height);

  if (closingQuotation == openingQuotation) {
    const canvas_height = document.getElementById("canvas").height;
    ctx.moveTo(start_x, canvas_height - openingQuotation);
    ctx.lineTo(start_x + bar_width, canvas_height - openingQuotation);
  }
  
  // 下ひげ
  ctx.moveTo(bar_center, start_y + bar_height);
  ctx.lineTo(bar_center, start_y + under_line);
  ctx.stroke();
}


const draw = (ctx) => {
  let x = 0;
  let i = 0;
  while (i < 10) {
    bar(ctx, x, 50, 80, 120, 200, 250);
    x += 31;
    i++;
  }

  bar(ctx, 20, 200, 150, 120, 200, 250);
  bar(ctx, 430, 100, 300, 250, 90, 250);
  bar(ctx, 300, 400, 150, 150, 80, 250);
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
  draw(ctx);
}
