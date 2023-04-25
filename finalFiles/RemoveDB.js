const { spawn } = require('child_process');

dropDatabase();
function dropDatabase(){
// Command to execute MongoDB command using docker exec
const cmd = spawn('docker', ['exec', 'mongodbPrimary', 'mongosh', 'FriendWorker', '--eval', 'db.dropDatabase()']);

// Listen for stderr data
cmd.stderr.on('data', (data) => {
    console.error(`Database not deleted: ${data}`);
});

// Listen for exit event
cmd.on('exit', (code) => {
    code===0?console.log(`Database deleted successfully!`):console.log("Database deletion failed miserably, oops.");
})}
