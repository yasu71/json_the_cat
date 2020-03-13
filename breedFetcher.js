const request = require('request');
const arg = process.argv.slice(2);
// const base = 'https://api.theatapi.com'; /* broken URL*/
const base = 'https://api.thecatapi.com';

const fetchBreedDescription = function(breedName, callback) {
  const url = base + '/v1/breeds/search?q=' + breedName;
  
  request(url , (error, response, body) => {

    if (error) {
      callback('Your URL is something wrong!', null);
      return;
    }

    const data = JSON.parse(body)[0];
    if (data) {
      callback(null, data.description);
    } else {
      callback(`${breedName} was not found and no description`, null);
    }

  });
};

module.exports = fetchBreedDescription;