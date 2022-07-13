import captureWebsite from 'capture-website';
import fs from 'fs'
import { join, resolve } from 'path'

const __dirname = resolve();

const imagePath = join(__dirname, './images', 'readme-index-image.png')

if (fs.existsSync(imagePath)) {
  fs.unlinkSync(imagePath)
}

await captureWebsite.file('http://localhost:3000', imagePath);


