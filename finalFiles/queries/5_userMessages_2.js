use('FriendWorker');
const output = db.users.aggregate([
    {
        $lookup: {
            from: "messages",
            let: { user_id: "$_id" },
            pipeline: [
                {
                    $facet: {
                        sent_messages: [
                            {
                                $match: {
                                    author: "$$user_id"
                                }
                            },
                            {
                                $count: "count"
                            }
                        ],
                        received_messages: [
                            {
                                $match: {
                                    receiver: "$$user_id"
                                }
                            },
                            {
                                $count: "count"
                            }
                        ]
                    }
                },
                {
                    $project: {
                        total_sent_messages: { $sum: "$sent_messages.count" },
                        total_received_messages: { $sum: "$received_messages.count" }
                    }
                }
            ],
            as: "messages"
        }
    },
    {
        $project: {
            firstName: 1,
            lastName: 1,
            email: 1,
            address: 1,
            dateOfBirth: 1,
            friends: 1,
            sent_messages_count: { $arrayElemAt: ["$messages.total_sent_messages", 0] },
            received_messages_count: { $arrayElemAt: ["$messages.total_received_messages", 0] }
        }
    }
])


printjson(output.explain());
printjson(output);
