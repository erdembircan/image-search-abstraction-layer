const express = require('express');
const chalk = require('chalk');
const path = require('path');
const config = require('./config');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const searchImage = require('./utils/googleSearch');

class App {
  constructor() {
    this._app = express();
    this._app.set('port', process.env.PORT || config.serverPort);
    this._app.set('json spaces', 2);
    this._latestSearchs = [];

    this._app.use(express.static(path.resolve(__dirname, 'public')));
    this._app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'public', 'main.html'));
    });

    this._app.get('/api/imagesearch/:search', (req, res) => {
      const searchQuery = req.params.search;
      const { offset } = req.query;

      this._addToLatest(searchQuery);

      searchImage(searchQuery, (err, body) => {
        if (err) {
          res.send(`An error occured: ${err}`);
        } else {
          const dom = new JSDOM(body);
          const { document } = dom.window;
          const data = document.querySelectorAll('td a');
          const resArray = [];
          Array.from(data).map((a) => {
            if (!a.href.startsWith('/url')) return;
            const thumbnail = a.querySelector('img').src;
            const tempObj = {
              thumbnail,
              context: a.href.match(/url\?q=(.*?)&sa/)[1],
              snippet: a.parentNode.textContent,
              url: thumbnail,
            };
            resArray.push(tempObj);
          });
          const sliceVal = offset
            ? offset <= resArray.length ? offset : resArray.length
            : resArray.length;
          res.send(resArray.slice(0, sliceVal));
        }
      });
    });

    this._app.get('/api/latest/imagesearch', (req, res) => {
      res.send(this._latestSearchs);
    });
  }

  _addToLatest(query) {
    this._latestSearchs.push({
      term: query,
      when: new Date().toString(),
    });
  }

  listen() {
    this._app.listen(this._app.get('port'), () => {
      console.log(`${chalk.bgBlue.bold('[SERVER]:')} 🌍  started at port: ${this._app.get('port')}`);
    });
  }
}

module.exports = App;
