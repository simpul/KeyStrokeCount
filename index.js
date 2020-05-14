#!/usr/bin/env node
const iohook = require('iohook');
const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const keyMapObj = require('./src/handle/keymap');
const transfer = require('./src/handle/transfer');
const instruction = require('./src/handle/instruction');

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8888);
app.use(express.static(__dirname, ''));

const url = `http://localhost:${app.get('port')}`;
let totalKeyStrokeTimes = 0;
let keyMapCountObj = {};
let startTime;

process.stdin.setEncoding('utf8');
process.stdout.write(instruction.welcome());

// receive order
process.stdin.on('data', (order) => {
  order = order.toString().trim();
  switch (order) {
    case 'start':
      process.stdout.write(instruction.start());
      startTime = Date.now();
      iohook.on('keyup', (e) => {
        for (const key in keyMapObj) {
          // eslint-disable-next-line no-prototype-builtins
          if (keyMapObj.hasOwnProperty(key)) {
            if (keyMapObj[key].code === e.rawcode) {
              keyMapCountObj[key] ? keyMapCountObj[key]++ : keyMapCountObj[key] = 1;
              break;
            }
          }
        }
        totalKeyStrokeTimes++;
      });
      iohook.start();
      break;
    case 'total':
      process.stdout.write(instruction.total(new Date(startTime).toLocaleString(), totalKeyStrokeTimes));
      break;
    case 'reset':
      totalKeyStrokeTimes = 0;
      keyMapCountObj = {};
      startTime = Date.now();
      process.stdout.write(instruction.reset(totalKeyStrokeTimes));
      break;
    case 'view':
      switch (process.platform) { // judge the platform
        case 'darwin':
          exec(`open ${url}`);
          break;
        case 'win32':
          exec(`start ${url}`);
          break;
        case 'linux':
          exec(`xdg-open ${url}`);
          break;
        default:
          exec(`open ${url}`);
      }
      break;
    case 'help':
      process.stdout.write(instruction.help());
      break;
    case 'exit':
      process.exit();
      break;
    default:
      process.stdout.write(instruction.default());
  }
});

app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.get('/heatmapData', (req, res) => {
  res.send(JSON.stringify(transfer(keyMapCountObj).heatMapData));
});
app.get('/histogramData', (req, res) => {
  res.send(JSON.stringify(transfer(keyMapCountObj).histogramData));
});
app.listen(app.get('port'), () => {
  console.log('Server is ready');
});
