use('FriendWorker');
const outputUser = db.user.insertOne(
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
    },
    (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`New user inserted with _id: ${result.insertedId}`);
        }
    }
)

printjson(outputUser);

const outputPost = db.posts.insertOne(
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
    },
    (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`New post inserted with _id: ${result.insertedId}`);
        }
    }
)

printjson(outputPost);

const outputMesage = db.messages.insertOne(
    {
        "author": "user_570",
        "receiver": "user_8",
        "seen": true
    },
    (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`New message inserted with _id: ${result.insertedId}`);
        }
    }
)

printjson(outputMesage);


const outputLike = db.likes.insertOne(
    {
        "_id": "like_8",
        "author": "user_788"
    },
    (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`New like inserted with _id: ${result.insertedId}`);
        }
    }
)

printjson(outputLike);

const outputComment = db.comments.insertOne(
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
    },
    (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`New comment inserted with _id: ${result.insertedId}`);
        }
    }
)

printjson(outputComment);
