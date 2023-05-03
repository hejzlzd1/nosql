const { exec } = require('child_process');

const files = [
    '1_postsByAuthor.js',
    '2_usersWithPostPostCount.js',
    '2_usersWithPostPostCount_2.js',
    '3_postsWithLikeLikeCount.js',
    '4_friendOfFriendOfFriend.js',
    '5_userMessages.js',
    '5_userMessages_2.js',
]

copy();
function copy() {
    files.forEach(file => {
        const cmd = `docker cp ${file} mongodbPrimary:/home/${file}`
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.error(`Something went wrong when copying ${file}: ${err.message}`);
                return;
            }
            console.log(`Successfull copy of ${file}.`)
        });
    })
    run();
}

function run() {
    files.forEach(file => {
        const cmd = `docker exec mongodbPrimary mongosh --file home/${file}`
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error happened when running file ${file}: ${err.message}`);
                return;
            }
            console.log(stdout)
            console.log(stderr)
            console.log(`Successfull running file ${file}`)
        });
    })
}