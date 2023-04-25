function initDatabase(){
    startReplication()
    setTimeout(function () {
        console.log(" ------------------ \nCreating database schema now...");
        startSchemaGenerating()
        setTimeout(function (){
            console.log("------------------\nFeeding mighty mongodb with test data... ");
            startDatabaseFeeding()
        },15000)
    },15000)
}
function startReplication(){
    console.log("Preparing replication... \n ------------------");
    require("./ReplicaSetup.js");
}
function startSchemaGenerating(){
    require("./CollectionGenerator.js");
}

function startDatabaseFeeding(){
        require("./FeedMightyMongoDB.js");
}
initDatabase();
