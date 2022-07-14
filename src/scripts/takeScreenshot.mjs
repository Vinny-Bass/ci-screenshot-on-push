import captureWebsite from 'capture-website';
import fs from 'fs'
import { join, resolve } from 'path'

const __dirname = resolve();

const imagePath = join(__dirname, './images', 'readme-index-image.png')

console.log(imagePath)

if (fs.existsSync(imagePath)) {
  console.log('file exists')
  fs.unlinkSync(imagePath)
}

await captureWebsite.file('https://screenshot-pipeline.herokuapp.com/', imagePath);


