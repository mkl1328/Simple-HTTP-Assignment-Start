const fs = require('fs');

const spongeGar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/x-png' });
  response.write(spongeGar);
  response.end();
};

module.exports.getSpongegar = getSpongegar;
