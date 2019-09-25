const sharp = require('sharp')
const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))

app.get('/', (req, res) => {
  sharp('input.jpg')
    .resize({ width: 320 })
    .toFile('output.jpg')
    .then(info => {
      res.send(info)
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

