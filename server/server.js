const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api.js');
const path = require('path');

// create express server
const app = express();

// initialize middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(function(err, req, res, next) {
  res.status(422).send({error: err.message})
});

//initialize routes mw
app.use(routes);

// listen
app.listen(process.env.port || 3000, () => {
  console.log('listening for requests on port 3000');
});

//LOAD DATA LOCAL INFILE 'MOCK_DATA.csv' INTO TABLE bnb.reviews;

// LOAD DATA LOCAL INFILE 'MOCK_DATA.csv'
// INTO TABLE reviews
// FIELDS TERMINATED BY ','
// ENCLOSED BY '"'
// LINES TERMINATED BY '\n'
// (id,name,avatar,numDaysAgo,content);

// allows you to keep track of days by using an auto-incrementer on event;
// SET GLOBAL event_scheduler = ON;

//edit event
// alter event updateReviewAge on schedule every 2 minute;