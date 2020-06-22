# Institutions

This package creates URL shortner server which id used to generate tiny url 
URL analytics is added, so that we can know the number of clicks 

### Requirements

Docker Engine to be running
NodeJS 


### Installation

Run the follwing command in your terminal once the docker engine is started

```sh
$ docker-compose up
```

## Jest Testing

To run the test you can use the command `npm test`.

Keep in mind that tests are in progress: 

* It may be possible that on failure some of the data is not clean properly so you may have to check. 


## Basic architecture

Project is quite simple. The system uses ejs for the front end, and data is loaded on mongodb. 

once the instance is running use localhost:5000 to access 