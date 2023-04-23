use('FriendWorker');
db.createCollection("users",
{
    "validator": {
      "$jsonSchema": {
        "bsonType": "object",
        "title": "User validator",
        "required": [
          "firstName",
          "lastName",
          "email",
          "password",
          "address",
          "dateOfBirth"
        ],
        "properties": {
          "firstName": {
            "bsonType": "string",
            "maxLength": 45,
            "minLength": 2,
            "pattern": "^[A-Z][a-zA-Z ]*$",
            "description": "FirstName must be string and is required"
          },
          "lastName": {
            "bsonType": "string",
            "maxLength": 45,
            "minLength": 2,
            "pattern": "^[A-Z][a-zA-Z' ]*$",
            "description": "Lastname must be string and is required"
          },
          "password":{
            "bsonType": "string",
            "pattern": "^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$"
          },
          "email": {
            "bsonType": "string",
            "pattern": "^((?!\\.)[\\w_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$",
            "description": "Email must be string and is required"
          },
          "address": {
            "bsonType": "object",
            "title": "Address validation",
            "required": ["street","city","postal","country"],
            "properties": {
              "street": {
                "bsonType": "string",
                "maxLength": 50,
                "minLength": 3,
                "description": "Street is required string (max 30,min 3 chars)"
              },
              "city":{
                "bsonType": "string",
                "maxLength": 40,
                "minLength": 2,
                "description": "City is required string (max 30 chars,min 2)"
              },
              "country": {
                "bsonType": "string",
                "maxLength": 40,
                "minLength": 3,
                "description": "Country is required string (max 30 chars,min 3)"
              },
              "postal": {
                "bsonType": "string",
                "minLength": 3,
                "maxLength": 8,
                "description": "Postal is required string (max 8 chars,min 3)"
              }
            }
          },
          "dateOfBirth": {
            "bsonType": "date",
            "description": "Date of birth is required date"
          },
          "friends" : {
            "bsonType": [ "array" ],
            "items": {
              "bsonType": "objectId"
            },
            "description": "Friends must be an array of Users"
          },
          "comments" : {
            "bsonType": [ "array" ],
            "items": {
              "bsonType": "objectId"
            },
            "description": "Comments must be an array of Comment"
          },
          "likes" : {
            "bsonType": [ "array" ],
            "items": {
              "bsonType": "objectId"
            },
            "description": "Likes must be an array of Like"
          },
        }
      }
    }
  }
);
db.createCollection("posts",
{
    "validator": {
      "$jsonSchema": {
        "bsonType": "object",
        "title": "Post validator",
        "required": [
          "text","author"
        ],
        "properties": {
          "text": {
            "bsonType": "string",
            "maxLength": 1500,
            "minLength": 1,
            "description": "Text must be string and is required"
          },
          "attachmentPath": {
            "bsonType": "string",
            "minLength": 1,
            "description": "AttachmentPath must be string and is required"
          },
          "author":{
            "bsonType": "string",
            "description": "Author must be objectId and is required"
          },
          "comments" : {
            "bsonType": [ "array" ],
            "items": {
              "bsonType": "objectId"
            },
            "description": "Comments must be an array of Comment"
          },
          "likes" : {
            "bsonType": [ "array" ],
            "items": {
              "bsonType": "objectId"
            },
            "description": "Likes must be an array of Like"
          },
        }
      }
    }
  }
);
db.createCollection("messages",
{
    "validator": {
      "$jsonSchema": {
        "bsonType": "object",
        "title": "Message validator",
        "required": [
          "text","author","receiver"
        ],
        "properties": {
          "text": {
            "bsonType": "string",
            "maxLength": 1500,
            "minLength": 1,
            "description": "Text must be string and is required"
          },
           "author":{
               "bsonType": "string",
               "description": "Author must be objectId and is required"
           },
          "receiver":{
            "bsonType": "objectId",
            "description": "Author must be objectId and is required"
          },
          "seen":{
            "bsonType": "bool",
            "description": "Seen must be boolean"
          }
        },
      }
    }
  }
);
db.createCollection("likes",
{
    "validator": {
      "$jsonSchema": {
        "bsonType": "object",
        "title": "Like validator",
        "required": [
          "post","author"
        ],
        "properties": {
           "post":{
               "bsonType": "string",
               "description": "Post must be objectId and is required"
           },
           "author":{
               "bsonType": "string",
               "description": "Author must be objectId and is required"
           }
        },
      }
    }
  }
);
db.createCollection("comments",
{
    "validator": {
      "$jsonSchema": {
        "bsonType": "object",
        "title": "Comments validator",
        "required": [
          "text","author"
        ],
        "properties": {
          "text": {
            "bsonType": "string",
            "maxLength": 1500,
            "minLength": 1,
            "description": "Text must be string and is required"
          },
           "author":{
               "bsonType": "objectId",
               "description": "Author must be objectId and is required"
           },
          "post":{
            "bsonType": "objectId",
            "description": "Post must be objectId"
          },
          "flaggedAsSpam":{
            "bsonType": "bool",
            "description": "FlaggedAsSpam must be boolean"
          },
          "replies" : {
            "bsonType": [ "array" ],
            "items": {
              "bsonType": "objectId"
            },
            "description": "Replies must be an array of Comment"
          },

        },
      }
    }
  }
);