const exec = require('child_process').exec;
const rimraf = require('rimraf');
var argv = require('minimist')(process.argv.slice(2));
var cmd = '';

if (argv._.length > 0) {
    rimraf(`${argv._[0]}`, function (error) {
        if (error) {
            console.log(error);
        }

        if (argv.typescript) {
            if (argv.bootstrap) {
                if (argv.redux) {
                    cmd = `git clone https://github.com/Kurtaclan/react-template-typescript-bootstrap.git ${argv._[0]} `
                } else {
                    cmd = `git clone https://github.com/Kurtaclan/react-template-typescript-bootstrap-redux.git ${argv._[0]}`
                }
            } else {
                cmd = `git clone https://github.com/Kurtaclan/react-template-typescript.git ${argv._[0]}`
            }
        } else {
            if (argv.bootstrap) {
                if (argv.redux) {
                    cmd = `git clone https://github.com/Kurtaclan/react-template-bootstrap.git ${argv._[0]}`
                } else {
                    cmd = `git clone https://github.com/Kurtaclan/react-template-bootstrap-redux.git ${argv._[0]}`
                }
            } else {
                cmd = `git clone https://github.com/Kurtaclan/react-template.git ${argv._[0]}`
            }
        }


        exec(cmd, function (error, stdout, stderr) {
            if (error) {
                console.log('Error');
                console.log(error);
            } else {
                rimraf(`${argv._[0]}/.git`, function (error) {
                    if (error) {
                        console.log(error);
                    }
                });
            }
        });
    });
}