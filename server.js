// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
var fs = require('fs');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: process.env.PUBLIC_KEY
, privateKey: process.env.PRIVATE_KEY
});

let creators = [{
  "first": "Stan",
  "last": "Lee"
},{
  "first": "Steve",
  "last": "Ditko"

}
]

// Loop over creators
creators.forEach((creator) => {
  marvel.creators.findByName(creator.first, '', creator.last)
    .then(function(data) {
      console.log(data);
    var 
    // create a while loop
    while () {
           
    }
  
  });

});

  marvel.characters.findAll()
  .then(function(data) {
    // console.log(data.data);
    return new Promise(function(resolve, reject){
      fs.writeFile('characters.json', JSON.stringify(data.data, null, 2), (err) => {
      if(err) reject (err);
        else resolve();
        console.log('hi there we did it');

      });
    });
      
  })
  .fail(console.error)
  .done();


app.get('/characters', function(request, response) {
  response.sendFile(__dirname + '/characters.json');

});

/* marvel.characters.findAll()
  .then(console.log)
  .fail(console.error)
  .done();

marvel.characters.findByName('spider-man')
  .then(function(res) {
    console.log('Found character ID', res.data[0].id);
    return marvel.characters.comics(res.data[0].id);
  })
  .then(function(res) {
    console.log('found %s comics of %s total', res.meta.count, res.meta.total);
    console.log(res.data);
  })
  .fail(console.error)
  .done(); */


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});