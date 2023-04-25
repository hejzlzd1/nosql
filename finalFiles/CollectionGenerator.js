const { spawn } = require('child_process');
initDatabaseSchema();
function initDatabaseSchema(){
// Command to execute MongoDB command using docker exec
const copy = spawn('docker', ['cp', 'DBSchema/dbSchema.js', 'mongodbPrimary:home/mongoSchema']);

// Listen for exit event
copy.on('exit', (code) => {
  code===0?console.log(`Copying schema to docker container went OK`):console.log("Copying schema to docker container failed!");
});

// Command to execute MongoDB command using docker exec
const initDatabase = spawn('docker', ['exec', 'mongodbPrimary', 'mongosh',"--file", '/home/mongoSchema']);

// Listen for stderr data
initDatabase.stderr.on('data', (data) => {
  console.error(`Oh no! Error happened: ${data}`);
});

// Listen for exit event
initDatabase.on('exit', (code) => {
  code===0?console.log(`Creating schema in mongoDB went alright! Everything is ready for data now!`):console.log("Creating schema was not successful - mongodb got error :/");
})}
