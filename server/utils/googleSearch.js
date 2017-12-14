const request = require('request');

const imgSearchEndpoint = 'https://www.google.com/search?tbm=isch&q={searchquery}';

function getSearchResuls(query, callback) {
  const endPoint = imgSearchEndpoint.replace(/(\{searchquery\})/, query);
  request(endPoint, (err, res, body) => {
    callback(err, body);
  });
}

module.exports = getSearchResuls;
