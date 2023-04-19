mongodump --db "FriendWorker"  --out "backup"

//full commands here:
docker exec -it mongodbPrimary mongodump --db "FriendWorker"  --out "backup"

//copy folder with backup to backup folder (relative path)
docker cp mongodbPrimary:backup backup