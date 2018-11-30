const { createCanvas, loadImage } = require('canvas')
const Canvas = require('canvas')
const fs = require('fs')
const alphabets = require('./alphabets')

const firstColor = '#196127'
const secondColor = '#239a3b'
const thirdColor = '#7bc96f'
const fourthColor = '#c6e48b'
const fifthColor = '#ebedf0'

const generateRadomInt = () => {
  const  min = 1
  const  max = 9
  return Math.floor(Math.random() * (max + 1 - min)) + min
}

// Context生成
let image = Canvas.image;
let canvas = new createCanvas(212, 106);
let ctx = canvas.getContext('2d');

const createBase = (ctx) => {

  let left = 0
  let top = 0
  for (let i = 0; i <= 81; i++) {
    const random = generateRadomInt()
    let fillColor = fourthColor;
    if (random >= 1 && random <= 2) {
      fillColor = fifthColor
    } else if (random === 9) {
      fillColor = thirdColor
    }
    ctx.fillStyle = fillColor
    ctx.fillRect(left, top, 10, 10);
    ctx.fill()
    left += 12
    if (i % 9 === 0 && i !== 0) {
      left = 0
      top += 12
    }
  }
}

const createText = (alphabet, ctx) => {
  ctx.fillStyle = firstColor
  if (alphabet === 'A') {
    alphabets.A(ctx)
  } else if (alphabet === 'B') {
    alphabets.B(ctx)
  }
}

// ベースとなるcontext作成
createBase(ctx)

// Aを入れる
createText('A', ctx)

// 書き出し
canvas.toBuffer((err, buf)=>{
  fs.writeFile("image.png", buf);
})