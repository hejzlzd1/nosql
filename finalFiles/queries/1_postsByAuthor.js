use('FriendWorker');
const output = db.posts.aggregate([
    {
        $lookup:
        {
            from: "users",
            localField: "author",
            foreignField: "_id",
            as: "author_info"
        }
    },
    {
        $match:
        {
            "author_info.lastName": 'Geraghty'
        }
    }
])

printjson(output.explain());
printjson(output);
