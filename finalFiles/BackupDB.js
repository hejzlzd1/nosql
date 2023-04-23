const { exec } = require('child_process');
const fs = require('fs').promises;

// Command to execute
var makeBackup = 'docker exec mongodbPrimary mongodump --db "FriendWorker"  --out "backup"';

// Execute command in the terminal
exec(makeBackup, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing command: ${err.message}`);
        return;
    }
    console.log("Successfull backup of db")
    fs.writeFile("backup/output.log",stderr)
});

var copyBackup = "docker cp mongodbPrimary:backup backup"

exec(copyBackup, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing command: ${err.message}`);
        return;
    }
    console.log("Copying files from docker successful")
});