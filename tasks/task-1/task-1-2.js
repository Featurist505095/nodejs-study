const csv = require('csvtojson');
const inputFilePath = './tasks/task-1/csv/input.csv';
const outputFilePath = './tasks/task-1/csv/output.txt';
const fs = require('fs');

const readStream = fs.createReadStream(inputFilePath);
const writeStream = fs.createWriteStream(outputFilePath, {
  "flags": "a+"
});

const onError = (err) => {
  console.log('Something was wrong!');
  console.log(err);
};

readStream.on('error', onError);
writeStream.on('error', onError);

readStream
  .pipe(
    csv({
      maxRowLength: 65535,
      downstreamFormat: "line",
      delimiter: "auto"
    })
  )
  .pipe(writeStream);