const { spawn } = require('child_process');

setupReplica()
function setupReplica(){
// Command to execute MongoDB command using docker exec
    const copy = spawn('docker', ['cp', './replication.js', 'mongodbPrimary:/home/replication']);
    // Listen for exit event
    copy.on('exit', (code) => {
        code===0?console.log(`Replication config copied to docker container successfully!`):console.log("Replication config copy to docker container failed");
    });
    replicaConfig()
}

function replicaConfig(){
// Command to execute MongoDB command using docker exec
const replicationSetup = spawn('docker', ['exec', 'mongodbPrimary', 'mongosh',"--file", '/home/replication']);

// Listen for stderr data
    replicationSetup.stderr.on('data', (data) => {
        console.error(`Replication failed: ${data}`);
    });
// Listen for exit event
replicationSetup.on('exit', (code) => {
    code===0?console.log(`Replication setup was successful!`):console.log("Replication setup failed somehow!");
    console.log("Please wait few seconds for database reinitialize to primary node");
});
}