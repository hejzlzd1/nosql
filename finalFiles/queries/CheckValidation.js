use('FriendWorker');
try{
db.users.insertOne(
    {
        "firstName": "arnold",
        "lastName": "netrefil validaci",
        "email": "arny01moczavinacu@@sciencedaily.com",
        "dateOfBirth": {
            "$date": "No-one expects string on date field!"
        },
        "password": "testovaci heslo, ktere absolutne nesplnuje validaci :) Tato validace me naprosto odmitne a neprijme dokument",
        "address": {
            "city": "Cagnes-sur-Mer (long text validation error)",
            "postal": "629 392 (long text validation error)",
            "street": "311 American Alley (long text validation error)",
            "country": "France is great country (long text validation error)"
        }
    }
)}
catch (e){
    console.log("User validator error (value validation)");
    printjson(e.errInfo)
    console.log("\n");
}

try{
    db.users.insertOne(
        {
            "address": {
                "city": "Cagnes-sur-Mer",
                "postal": "629 392",
                "street": "311 American Alley",
                "country": "France"
            }
        }
    )}
catch (e){
    console.log("User validator error (missing required)");
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
    console.log("Post validator error (value validation)");
        printjson(e.errInfo)
    console.log("\n");
}

try{
    db.posts.insertOne(
        {
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
    console.log("Post validator error (missing required)");
    printjson(e.errInfo)
    console.log("\n");
}


try{
    db.messages.insertOne(
        {
            "author": 10,
            "receiver": true,
            "seen": "I saw this one!"
        }
    )
} catch (e){
    console.log("Message validator error (value validation)");
    printjson(e.errInfo)
    console.log("\n");
}

try{
    db.messages.insertOne(
        {
            "author": "user_1",
            "seen": true
        }
    )
} catch (e){
    console.log("Message validator error (missing required)");
    printjson(e.errInfo)
    console.log("\n");
}

try{
    db.likes.insertOne(
    {
        "_id": "like_8",
        "author": 10
    }
)
}catch (e){
    console.log("Like validator error (value validation)");
    printjson(e.errInfo)
    console.log("\n");
}

try{
    db.likes.insertOne(
        {
            "_id": "like_8",
        }
    )
}catch (e){
    console.log("Like validator error (missing required)");
    printjson(e.errInfo)
    console.log("\n");
}

try{
db.comments.insertOne(
    {
        "_id": "comment_5",
        "author": "user_276",
        "text": true,
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
    console.log("Comment validator error (value validation)");
    printjson(e.errInfo)
    console.log("\n");
}

try{
    db.comments.insertOne(
        {
            "_id": "comment_5",
            "text": "Wow you are missing lot of values! :)"
        }
    )
}catch (e){
    console.log("Comment validator error (missing required)");
    printjson(e.errInfo)
    console.log("\n");
}
