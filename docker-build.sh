#!/bin/bash

TAG="$1"

yarn build

rm -f ./.dockerignore

cp ./DockerImages/WebAppImage/.dockerignore ./.dockerignore

#
if [ "$TAG" = "" ] ; then
  echo "Build docker image : mapstore-web"
	docker build -f ./DockerImages/WebAppImage/Dockerfile -t mapstorevn/mapstore-web:latest .
	echo "Push mapstore-web:latest image to docker hub."
	docker push mapstorevn/mapstore-web:latest
else
	echo "Build docker image : mapstore-web:latest + mapstore-web:$TAG"
	docker build  -f ./DockerImages/WebAppImage/Dockerfile -t mapstorevn/mapstore-web:latest -t mapstorevn/mapstore-web:$TAG .
	echo "Push mapstore-web:latest image to docker hub."
	docker push mapstorevn/mapstore-web:latest
	echo "Push mapstore-web:$TAG image to docker hub."
	docker push mapstorevn/mapstore-web:$TAG
fi
#
rm -f ./.dockerignore