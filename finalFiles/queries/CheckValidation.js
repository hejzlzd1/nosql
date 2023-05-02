use('FriendWorker');
try{
db.users.insertOne(
    {
        "firstName": "",
        "lastName": "",
        "email": "rreolfo0@@sciencedaily.com",
        "dateOfBirth": {
            "$date": "2007-07-31T13:06:00Z"
        },
        "address": {
            "city": "Cagnes-sur-Mer",
            "postal": "629 392",
            "street": "311 American Alley",
            "country": "France"
        }
    }
)}
catch (e){
    console.log("User validator error");
    printjson(e.errInfo)
    console.log("\n");
}

try{
db.posts.insertOne(
    {
        "_id": "post_1",
        "text": "ipsum ullamco esse dolore dolor commodo nisi amet sit fugiat",
        "attachmentPath": "images/files/3d4e9506-4638-41fc-85d6-7e97378cfb19.png",
        "comments": [
            {
                "id": "comment_497"
            },
            {
                "id": "comment_340"
            }
        ],
        "likes": [
            {
                "id": "like_428"
            }
        ]
    })
}catch (e){
    console.log("Post validator error");
        printjson(e.errInfo)
    console.log("\n");
}

try{
    db.messages.insertOne(
        {
            "author": "user_570",
            "receiver": "user_8",
            "seen": true
        }
    )
} catch (e){
    console.log("Message validator error");
    printjson(e.errInfo)
    console.log("\n");
}

try{
    db.likes.insertOne(
    {
        "_id": "like_8",
        "author": "user_788"
    }
)
}catch (e){
    console.log("Like validator error");
    printjson(e.errInfo)
    console.log("\n");
}

try{
db.comments.insertOne(
    {
        "_id": "comment_5",
        "author": "user_276",
        "text": "",
        "post": "post_19",
        "replies": [
            {
                "id": "comment_11"
            }
        ],
        "flaggedAsSpam": true
    }
)
}catch (e){
    console.log("Comment validator error");
    printjson(e.errInfo)
    console.log("\n");
}
