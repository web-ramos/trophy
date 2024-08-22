## get token
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 768913852656.dkr.ecr.us-west-2.amazonaws.com

## build image
docker build -t site_trophy:latest .

## taging and push
docker tag site_trophy:latest 768913852656.dkr.ecr.us-west-2.amazonaws.com/site_trophy:latest
docker push 768913852656.dkr.ecr.us-west-2.amazonaws.com/site_trophy:latest

docker tag site_trophy:latest 768913852656.dkr.ecr.us-west-2.amazonaws.com/site_trophy:2.0.0
docker push 768913852656.dkr.ecr.us-west-2.amazonaws.com/site_trophy:2.0.0
