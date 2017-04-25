const chalk = require('chalk');


const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)



const figlet = require('figlet');


figlet('Anton Potgieter', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});