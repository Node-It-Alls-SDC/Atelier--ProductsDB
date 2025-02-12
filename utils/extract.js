const fs = require('fs');
const csv = require('csv-parser');

const extract = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      })
      .on('error', (err) => reject(err));
  })
}

module.exports = { extract };
