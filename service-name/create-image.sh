#!/usr/bin/env bash

docker rm -f my-service

docker rmi my-service

docker image prune

docker volume prune

docker build -t my-service .