use('FriendWorker');
const output = db.users.aggregate([
    {
        $lookup:
        {
            from: "messages",
            let: { user_id: "$_id" },
            pipeline: [
                {
                    $match:
                    {
                        $expr:
                        {
                            $and:
                                [
                                    { $or: [{ $eq: ["$author", "$$user_id"] }, { $eq: ["$receiver", "$$user_id"] }] },
                                ]
                        }
                    }
                }
            ],
            as: "messages"
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
            sent_messages_count:
            {
                $size:
                {
                    $filter:
                    {
                        input: "$messages",
                        cond: { $eq: ["$$this.author", "$_id"] }
                    }
                }
            },
            received_messages_count:
            {
                $size:
                {
                    $filter:
                    {
                        input: "$messages",
                        cond: { $eq: ["$$this.receiver", "$_id"] }
                    }
                }
            }
        }
    }
])

printjson(output.explain());
printjson(output);
