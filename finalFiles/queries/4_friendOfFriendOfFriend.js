use('FriendWorker');
const output = db.users.aggregate([
    {
        $lookup:
        {
            from: "users",
            localField: "friends",
            foreignField: "_id",
            as: "friends"
        }
    },
    { $unwind: "$friends" },
    {
        $lookup:
        {
            from: "users",
            localField: "friends.friends",
            foreignField: "_id",
            as: "friends_of_friends"
        }
    },
    { $unwind: "$friends_of_friends" },
    {
        $match:
        {
            $and:
                [
                    { "_id": { $eq: "$friends_of_friends._id" } }
                ]
        }
    },
    {
        $group:
        {
            _id: "$_id",
            firstName: { $first: "$firstName" },
            lastName: { $first: "$lastName" },
            email: { $first: "$email" },
            address: { $first: "$address" },
            dateOfBirth: { $first: "$dateOfBirth" }
        }
    }
])

printjson(output.explain());
printjson(output);
