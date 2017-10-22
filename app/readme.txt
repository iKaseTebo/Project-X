Getting Started

// Installs
npm install
bower install
composer install

// Start Your Server, Open two consoles
on one console run php artisan serve 
on the other run gulp watch

Github Crash Course

// GitKraken
Git GitKraken, It's Awesome.
https://www.gitkraken.com/

// Create Remote
git remote add origin github.url.here.your.url.goes.here

// How To Commit
Git add -A
git commit -m "commit message here"
git push -u origin master

// Correct Branch Checkout When Done With Feature Always Go Back to Dev and Create New Branch Off Dev
git checkout dev
git checkout -b new-branch-name // always use - in branch names

// Docker Notes
docker login --username=ikasetebo --email=ikasetebo@gmail.com
sudo su
sudo docker build -t < image > < directory ( . ) >
sudo docker run < image >
sudo docker run -d < image > ( Detached Container )
docker commit -m '< Text >' < Container Name > <Docker Username >/<Image Name >:< Version >
sudo docker tag local-image:tagname new-repo:tagname
sudo docker push new-repo:tagname
sudo docker push ikasetebo/devbox:tagname
docker inspect <container id>
docker ps (active containers)
docker ps -a (all containers)
docker history < image >
docker rm $(docker ps -a -q) ( Remove All Docker Containers Running or Not )
     - docker ps -q -a | xargs docker rm : Windows (Containers)
     - docker images | xargs docker rmi -f : Windows (Images)
docker kill $(docker ps -q) ( Supposedly Kill all Running Containers )
docker-compose up
docker-compose up -d <---- * USE -d *
docker-compose ps
docker-compose logs
docker-compose logs -f
docker-compose logs < container name / ID >
docker-compose start
docker-compose stop
docker-compose build
docker-compose rm ( Remove All Containers )
docker exec -it < recipient container ID > < Action ( 'Bash' ) >
docker network ls
docker network create --driver <Bridge, None, Etc.> <name>
docker network disconnect <netowork name> <container name>
docker network connect <network name> <container name>
docker run -d --name <name> --net host ( Host network )
docker run -d -name <name> --net my_bridge_network ( Bridge Network )
docker run -d --net none ( Non Network )
