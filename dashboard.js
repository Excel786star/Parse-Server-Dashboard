const ParseDashboard = require('parse-dashboard');
const express = require('express');

const dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
      appId: process.env.APP_ID || 'myAppId',
      masterKey: process.env.MASTER_KEY || 'myMasterKey',
      appName: 'My Parse App'
    }
  ],
  users: [
    {
      user: process.env.DASHBOARD_USER || 'admincrownstar25',
      pass: process.env.DASHBOARD_PASS || 'Datacrownstarpassword25$'
    }
  ],
  trustProxy: 1
}, { allowInsecureHTTP: true });

const app = express();
app.use('/', dashboard);

module.exports = app;
