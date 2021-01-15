#!/bin/bash

rm -f ./.dockerignore
cp ./DockerImages/BaseImage/.dockerignore ./.dockerignore
docker build -f ./DockerImages/BaseImage/BaseDockerfile -t mapstorevn/mapstore-web-base:latest .
rm -f ./.dockerignore