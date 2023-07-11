function rect(x, y, w, h, c, s) {
this.width = w;
this.height = h;
this.x = x;
this.y = y;
this.speedX = 0;
this.speedY = 0;
this.update = function() {
ctx.fillRect(this.x, this.y, this.width, this.height);
}
this.position = function() {
this.x += this.speedX;
this.y += this.speedY;
}
ctx.fillStyle = c;
ctx.strokeStyle = s;
ctx.rect(this.x, this.y, this.width, this.height);
ctx.fill();
ctx.stroke();
}
