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
        {
            "_id":3,
            "host": "mongo3:27017",
            "priority": 2
        }
    ]
};
rs.initiate(config);