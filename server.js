const express = require('express');
const { ParseServer } = require('parse-server');
const path = require('path');

const app = express();

const api = new ParseServer({
  databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || path.join(__dirname, '/cloud/main.js'),
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || 'myMasterKey',
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
  allowClientClassCreation: true
});

app.use('/parse', api);

const dashboard = require('./dashboard');
app.use('/dashboard', dashboard);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Parse Server + Dashboard running on port ${port}`);
});
