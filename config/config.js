require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.JAWS_USERNAME,
    "password": process.env.JAWS_PASS,
    "database": process.env.JAWS_DB,
    "host": process.env.JAWS_HOST,
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.JAWS_USERNAME,
    "password": process.env.JAWS_PASS,
    "database": process.env.JAWS_DB,
    "host": process.env.JAWS_HOST,
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
