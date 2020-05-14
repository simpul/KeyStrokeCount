const figlet = require('figlet');
const clc = require('cli-color');

const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.blue;

module.exports = {
  welcome() {
    const logo = figlet.textSync('KeyStrokeCount', {
      font: 'ANSI Shadow',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })
    const instruction = `Welcome to KeyStrokeCount, which is a program can monitor and count your key strokes and output a visualizing data about it.\nEnter 'start' to permit the counting and 'help' for more instructions.\n`
    return logo + '\n' + instruction + '\n';
  },
  start() {
    return notice(`Start to monitor and count the key stroke\n`);
  },
  total(time, times) {
    return notice(`Start from ${time}, your total key strokes are ${times} times\n`);
  },
  reset(times) {
    return notice(`Reset the result, and now is ${times}`);
  },
  default() {
    return error(`Invalid instructions, please enter 'help' to know more instructions\n`);
  },
  help() {
    const title = warn(`Available instructions as below：\n`);
    const start = notice(`start   ---you need to enter 'start' to start monitoring after running this program\n`);
    const total = notice(`total   ---review the current statistics\n`);
    const reset = notice(`reset   ---reset the result\n`);
    const view = notice(`view    ---check the visualizing data through the browser(heatmap and histogram are available currently)\n`);
    const help = notice(`help    ---view help\n`);
    const exit = notice(`exit    ---exit the program\n`);
    return title + start + total + reset +  view + help + exit;
  },
};
