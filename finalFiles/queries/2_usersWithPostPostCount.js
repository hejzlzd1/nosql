use('FriendWorker');
const output = db.users.aggregate([
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
            "posts": { $gt: [] }
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


printjson(output.explain());
printjson(output);
