const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');

const form = new FormData();
const fileStream = fs.createReadStream('image.jpg');
form.append('file', fileStream);

const options = {
  method: 'POST',
  body: form,
  headers: {
    "Authorization": "03f489ea-6083-41a5-98bb-facdeb5d1f55",
  },
};

fetch("https://api.nftport.xyz/v0/files", options)
  .then(response => {
    return response.json()
  })
  .then(responseJson => {
    // Handle the response
    console.log(responseJson);
  })


