#!/usr/bin/node
const request = require('request'):
const url = 'http://swapi-api.hbtn.io/api/films/' + ProcessingInstruction.argv[2];

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(body).title);
  }
});