//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://hw3:hw3@ds157873.mlab.com:57873/cen3031hw3', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-ccULx4lvvPRO8n7WvgIvRyGzBDF6sL8'
  },
  port: 8080
};