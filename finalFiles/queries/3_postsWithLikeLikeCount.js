use('FriendWorker');
const output = db.posts.aggregate([
    {
        $lookup:
        {
            from: "likes",
            localField: "_id",
            foreignField: "post",
            as: "likes"
        }
    },
    {
        $match:
        {
            "likes": { $gt: [] }
        }
    },
    {
        $project:
        {
            text: 1,
            attachmentPath: 1,
            author: 1,
            comments: 1,
            likes_count: { $size: "$likes" }
        }
    }
])

printjson(output.explain());
printjson(output);
