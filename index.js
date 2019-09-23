const sharp = require('sharp')

sharp('input.jpg')
  .resize({ width: 320 })
  .toFile('output.jpg', function(err) {
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });