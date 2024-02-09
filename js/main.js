
import fs from 'fs'
import csv from 'csv-parser'


const getCities = async () => {
    const data = [];
    fs.createReadStream('../city_coordinates.csv')
    .pipe(csv())
    .on('data', (row) => {
        data.push(row)
    })
    .on('end',() => {
        console.log('Datos leidos del archivo csv:',data);

    });
}

getCities()

const getData = async () => {
    const response = await fetch("https://www.7timer.info/bin/api.pl?lon=-99.139&lat=19.434&product=civil&output=json");
    const data = await response.json();
    return data;
}


const render = async () => {
    const data = await getData();
    console.log(data);
}

window.addEventListener('load', render);