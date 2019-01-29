#!/usr/bin/env bash

docker service create --replicas 1 --name my-service  -p 3000:3000  my-service-image