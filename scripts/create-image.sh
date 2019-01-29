#!/usr/bin/env bash

echo 'starting ' $1

docker rm -f $1

#docker rmi movies-service

docker image prune -f

docker volume prune -f

cd ../$1 
  
docker build -t  $1 .