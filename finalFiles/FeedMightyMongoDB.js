const { exec } = require('child_process');

var datasets = ["users","posts","messages","likes","comments"];

copyFiles();
insertData();

function copyFiles(){
datasets.forEach(dataName =>{
    var copyCommand = `docker cp mongoDatasets/${dataName}.json mongodbPrimary:/${dataName}.json`
    exec(copyCommand, (err,stdout,stderr) =>{
        if (err) {
            console.error(`Error executing command: ${err.message}`);
            return;
        }
        console.log(stdout)
        console.log(stderr)
        console.log("Successfull copy of dataset "+ dataName)
    });
})
}

function insertData(){
datasets.forEach(dataName =>{
    var insertDataCommand = `docker exec mongodbPrimary mongoimport --db FriendWorker --collection ${dataName} --jsonArray --batchSize 1 --file ./${dataName}.json`
    exec(insertDataCommand, (err,stdout,stderr) =>{
        if (err) {
            console.error(`Error executing command: ${err.message}`);
            return;
        }
        console.log(stdout)
        console.log(stderr)
        console.log("Successfull import of dataset "+ dataName)
    });
})
}

//docker cp users.json CONTAINER_NAME:/users.json

//docker exec -it CONTAINER_NAME  bash

//mongoimport --db MY_DB --collection users --drop --jsonArray --batchSize 1 --file ./users.json


