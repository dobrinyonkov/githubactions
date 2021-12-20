const args = process.argv.slice(2)

console.error('Updating version to ' + args[0]);

const fs = require('fs')

const content = args[0]

try {
  fs.writeFileSync('./test.txt', content)
  //file written successfully
} catch (err) {
  console.error(err)
}