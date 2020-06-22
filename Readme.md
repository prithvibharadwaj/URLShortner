# URL Shortner

This package creates URL shortner server which id used to generate tiny url 
URL analytics is added, so that we can know the number of clicks 

### Requirements

Docker Engine should be running and Node needs to be installed on the system you are running 

https://docs.docker.com/desktop/

Node: https://nodejs.org/en/download/package-manager/


### Installation

Run the follwing command in your terminal once the docker engine is started

* Create a directory for the project and go the the folder
```sh
$ mkdir ProjectFolderName
$ cd ProjectFolderName
```
*  Run the git clone command :
```sh
git clone https://github.com/prithvibharadwaj/URLShortner.git
```
* Run the docker compose command mentioned below to bring the service up 

```sh
$ docker-compose up
```
* Once the Service is up and running go to http://localhost:5000/ and start using the service 

## Jest Testing

To run the test you can use the command `npm test`.

Keep in mind that tests are in progress: 

* It may be possible that on failure some of the data is not clean properly so you may have to check. 


## Basic architecture

Project is quite simple. The system uses ejs for the front end, and data is loaded on mongodb. 

once the instance is running use localhost:5000 to access 