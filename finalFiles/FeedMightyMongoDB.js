const { exec } = require('child_process');

let datasets = ["users", "posts", "messages", "likes", "comments"];
feedDatabase();

//insert data into database
function feedDatabase(){
datasets.forEach(dataName =>{
    var copyCommand = `docker cp mongoDatasets/${dataName}.json mongodbPrimary:/home/${dataName}.json`
    exec(copyCommand, (err,stdout,stderr) =>{
        if (err) {
            console.error(`Something went wrong when copying datasets: ${err.message}`);
            return;
        }
        console.log("Successfull copy of dataset "+ dataName)
    });
})
    setTimeout(function () {
        insertData()
    },10000)
}

function insertData(){
datasets.forEach(dataName =>{
    var insertDataCommand = `docker exec mongodbPrimary mongoimport --db FriendWorker --collection ${dataName} --jsonArray --batchSize 1 --file ./home/${dataName}.json`
    exec(insertDataCommand, (err,stdout,stderr) =>{
        if (err) {
            console.error(`Error happened when importing data to database: ${err.message}`);
            return;
        }
        console.log(stderr)
        console.log("Successfull import of dataset "+ dataName)
    });
})
}

