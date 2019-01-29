#!/usr/bin/env bash

eval `docker-machine env manager1`

echo $1 
cd ..
cd $1
# we create or recreate our image
sh ./start-service.sh
cd ..
