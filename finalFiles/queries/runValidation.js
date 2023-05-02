const { exec } = require('child_process');
const fs = require('fs');

copy();
function copy() {
    const cmd = `docker cp CheckValidation.js mongodbPrimary:/home/CheckValidation.js`
    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            console.error(`Something went wrong when copying CheckValidation.js: ${err.message}`);
            return;
        }
        console.log(`Successfull copy of CheckValidation.js.`)
    });
    run();
}

function run() {
    const cmd = `docker exec mongodbPrimary mongosh --file home/CheckValidation.js`
    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error happened when running file CheckValidation.js: ${err.message}`);
            return;
        }
        console.log(stdout);
        console.log(`Successfull running file CheckValidation.js, output is saved in validation.log`)
        fs.writeFileSync("validation.log",stdout)
    });
}