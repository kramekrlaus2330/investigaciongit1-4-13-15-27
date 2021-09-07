window.onload = function(){
var canvas = document.getElementById("canvas-fondo");
var ctx = canvas.getContext("2d");

var stgw = 720;
var stgh = 350;

var count = 196;
var lcount = 2;

var layer = [];
var layery = [];

ctx.fillStyle = "rgba(255,325,255,0.5)";
for (var l = 0; l < lcount; l++) {
  ctx.clearRect(0, 0, stgw, stgh);
  for (var i = 0; i < (count * (lcount - l)) / 3.5; i++) {
    var myx = Math.floor(Math.random() * stgw);
    var myy = Math.floor(Math.random() * stgh);
    var myh = l * 4 + 6;
    var myw = myh / 8;
    ctx.beginPath();
    ctx.moveTo(myx, myy);
    ctx.lineTo(myx + myw, myy + myh);
    ctx.arc(myx, myy + myh, myw, 0, 1 * Math.PI);
    ctx.lineTo(myx - myw, myy + myh);
    ctx.closePath();
    ctx.fill();
  }
  layer[l] = new Image();
  layer[l].src = canvas.toDataURL("img/png");
  layery[l] = 0;
}

var stt = 0;
var str = Date.now() + Math.random() * 10;
var stact = false;

function animate() {
  ctx.clearRect(0, 0, stgw, stgh);

  for (var l = 0; l < lcount; l++) {
    layery[l] += (l + 1.5) * 6;
    if (layery[l] > stgh) {
      layery[l] = layery[l] - stgh;
    }
    ctx.drawImage(layer[l], 0, layery[l]);
    ctx.drawImage(layer[l], 0, layery[l] - stgh);
  }
  if (Date.now() > str) {
    stact = true;
  }
  if (stact) {
    stt++;
    if (stt < 5 + Math.random() * 10) {
      var ex = stt / 30;
    } else {
      var ex = (stt - 10) / 30;
    }
    if (stt > 15) {
      stt = 0;
      stact = false;
      str = Date.now() + Math.random() * 8000 + 2000;
    }

    ctx.fillStyle = "rgb(255, 255, 255," + ex + ")";
    ctx.fillRect(0, 0, stgw, stgh);
  }
  window.requestAnimationFrame(animate);
}

animate();

}