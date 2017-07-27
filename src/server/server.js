'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');
const marked = require('marked');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const env = nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  noCache: true,
  express: app
});

env.addFilter('markdown', function(text) {
  return marked(text);
});

app.use('/dist', express.static(path.join(__dirname, '../../dist')));

app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, './../../readme.md'), 'utf8', function(err, text) {
    res.render('index.njk', {
      text: text
    });
  });
});

app.get('/react/', (req, res) => {
  res.render('react.njk');
});

app.get('/vue/', (req, res) => {
  res.render('vue.njk');
});

app.get('/api/get-players/', (req, res) => {
  fs.readFile(path.join(__dirname, './players.json'), 'utf8', function(err, players) {
    res.json(JSON.parse(players));
  });
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
