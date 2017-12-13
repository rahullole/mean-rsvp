// server/config.js
module.exports = {
  AUTH0_DOMAIN: 'ral.auth0.com/', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://mean:mymeanpassword@ds019786.mlab.com:19786/meandb' //mongodb://[USER]:[PASSWORD]@[DS######].mlab.com:[PORT]/[DB_NAME]
};