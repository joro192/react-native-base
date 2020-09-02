const fs = require('fs')

const imageFileNames = () => {
  const array = fs
    .readdirSync('app/assets/images')
    .filter((file) => {
      return file.endsWith('.png')
    })
    .map((file) => {
      return file.replace('.png', '').replace('@2x.png', '').replace('@3x.png', '')
    })
    
return Array.from(new Set(array))
}

const generate = () => {
  let properties = imageFileNames()
    .map((name) => {
      return `${name}: require('../assets/images/${name}.png')`
    })
    .join(',\n  ')
    
const string = `const images = {
  ${properties}
}

export default images
`

fs.writeFileSync('app/res/images.js', string, 'utf8')
}

generate()