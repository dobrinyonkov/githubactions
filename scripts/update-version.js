const args = process.argv.slice(2)

console.error('Updating version to ' + args[0]);

const fs = require('fs')
const path = require('path')

const content = args[0]

try {
  fs.writeFileSync(path.resolve(__dirname, '../dist/test.txt') , content)
  //file written successfully
} catch (err) {
  console.error(err)
}