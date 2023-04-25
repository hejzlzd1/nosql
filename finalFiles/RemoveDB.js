const { exec } = require('child_process');
//TODO fix me
// Command to execute
var connectToMongoSH = 'docker exec -i mongodbPrimary mongosh';

// Execute command in the terminal
exec(connectToMongoSH, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing command: ${err.message}`);
        return;
    }
    console.log("Successfull connection to db");


});
