const { exec } = require('child_process');

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
        console.log(stdout); //output console - TODO: Save to file + copy to local machine
        console.log(`Successfull running file CheckValidation.js`)
    });
}