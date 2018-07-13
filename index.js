const  fs = require('fs');
const http = require('http');
const path = require('path');
const methods = require('methods');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const errorhandler = require('errorhandler');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const app = express();
const port = process.env.PORT || 5000;

// API calls
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server")
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpackConfig = require("./config/webpack.config.dev");

const compiler = webpack(webpackConfig);


const sourceDir = 'dist'
var history = require('connect-history-api-fallback');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:true,credentials: true}));

var cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['conduit'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))



dotenv.load();

// var configDB = require('./config/config').db

mongoose.connect('mongodb://localhost/tutorial', {
  useMongoClient: true
})

var db = mongoose.connection

db.on('error', () => {
  console.log('failed')
})

db.once('open', () => {
  console.log('connected to mongoose')
})
// const staticMiddleware = express.static("public")
// app.use(staticMiddleware)
mongoose.Promise = global.Promise

// app.use(require('./routes'))
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

  // Step 3: Attach the hot middleware to the compiler & the server
  

  app.use(history())


if (process.env.NODE_ENV !== 'production') {
  // Serve any static files
  app.use(require("webpack-dev-middleware")(compiler, {
    logLevel: 'warn', publicPath: webpackConfig.output.publicPath
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));


}
else {

  app.use(express.static(path.join(__dirname, 'dist')));

  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));

