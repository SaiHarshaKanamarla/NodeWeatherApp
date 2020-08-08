const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


let value = process.argv[2];

geocode(value,(error, data) =>{
    if(error){
       return console.log("There is an error with the location");
    }
    console.log("Error",error);
    console.log("Data",data);
    console.log("lat is "+data.latitude);
    console.log("=============================");
    forecast(data.latitude,data.longitude,(error,forecastData)=>{
        if(error){
            return console.log("Unable to fetch weather");
        }
        console.log("Error",error);
        console.log("Data",forecastData);
    })

})

// forecast(-75.088,44.1545,(error,data)=>{
//     console.log("Error",error);
//     console.log("Data",data);
// })