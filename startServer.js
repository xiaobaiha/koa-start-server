let childProcess = require('child_process');

const port = process.argv[3] || '8080';
const path = process.argv[2];

childProcess.exec(`http-server ${path} -p ${port}`, (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        reject(err);
    }
    console.log(stdout);
    console.error(stderr);
    resolve(`${stdout} \n ${stderr} \n`);
});
