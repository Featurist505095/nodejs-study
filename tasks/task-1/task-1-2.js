import csv from 'csvtojson';
import fs from 'fs';

const inputFilePath = './tasks/task-1/csv/input.csv';
const outputFilePath = './tasks/task-1/csv/output.txt';

const readStream = fs.createReadStream(inputFilePath, {
  highWaterMark: 65535
});
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
      downstreamFormat: "line",
      delimiter: "auto"
    })
  )
  .pipe(writeStream);