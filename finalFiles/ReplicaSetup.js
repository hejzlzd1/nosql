var config = {
    "_id": "replicaSet",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongoPrimary:27017",
            "priority": 4
        },
        {
            "_id": 2,
            "host": "mongo2:27017",
            "priority": 3
        },
    ]
};
rs.initiate(config);



//or use rs.reconfig(config); if reconfiguration