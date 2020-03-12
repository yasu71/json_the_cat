const request = require('request');
const arg = process.argv.slice(2);
// const base = 'https://api.theatapi.com'; /* broken URL*/
const base = 'https://api.thecatapi.com';

const url = base + '/v1/breeds/search?q=' + arg[0];

request(url , (error, response, body) => {
  if (error) {
    console.log('error: Your URL is something wrong! \n', error);
    return;
  }

  const data = JSON.parse(body)[0];
  if (data) {
    console.log('body:', data.description);
  } else if (data === undefined) {
    console.log(`ERROR: ${arg[0]} was not found and no description`);
  }

  if (response) {
    console.log('statusCode:', response && response.statusCode);
  }
});

