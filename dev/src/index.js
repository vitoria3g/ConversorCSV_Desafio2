const fs      = require('fs');
const path    = require('path');
const parse   = require('csv-parse');
const file    = path.resolve(__dirname, 'doc', 'teste.csv');
const csvData = [];

fs.createReadStream(file)
  .pipe(parse({delimiter: ','}))
  .on('data', function(dataRow){
      let json = {
        valorText: dataRow[0],
        valorDate: dataRow[1],
        valorInt: dataRow[2]
      };
      csvData.push(json)
  })
  .on('end', function(){
    console.log(csvData)
  })