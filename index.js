const { createCanvas, loadImage } = require('canvas')
const Canvas = require('canvas')
const fs = require('fs')

const secondColor = 'rgb(35, 154, 59)'
const fourthColor = 'rgb(198, 228, 139)'

// Context生成
let image = Canvas.image;
let canvas = new createCanvas(200, 200);
let ctx = canvas.getContext('2d');

let left = 0
let top = 0
for (let i = 0; i < 225; i++) {
  console.log(i)
  ctx.fillStyle = fourthColor
  ctx.strokeStyle = 'rgb(255, 255, 255)'
  ctx.lineWidth = 10
  ctx.fillRect(left, top, 10, 10);
  ctx.fill()
  left += 12
  if (i % 14 ===0) {
    console.log('here')
    top += 12
  }
}

// 書き出し
canvas.toBuffer((err, buf)=>{
  fs.writeFile("image.png", buf);
})
