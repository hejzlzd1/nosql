use('FriendWorker');
function request() {
    return db.users.aggregate([
        {
            $lookup:
            {
                from: "posts",
                localField: "_id",
                foreignField: "author",
                as: "posts"
            }
        },
        {
            $match:
            {
                "posts": { $ne: [] }
            }
        },
        {
            $project:
            {
                firstName: 1,
                lastName: 1,
                email: 1,
                address: 1,
                dateOfBirth: 1,
                friends: 1,
                posts_count: { $size: "$posts" }
            }
        }
    ])
}
const output1 = request();
db.collection.createIndex({ "posts": 1 })
const output2 = request();
db.collection.dropIndex("posts")


printjson(output1.explain("executionStats"));
printjson(output1);
printjson(output2.explain("executionStats"));
printjson(output2);
