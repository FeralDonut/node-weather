const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an Address')
} else {

  geocode(address, (error, {latitude, longitude, location}) => {
    if (error) {
      return console.log(error);
    } else {
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          console.log(error);
        } else {
          console.log(location);
          console.log(forecastData);
        }
      });
    }
  });
}

