### Spottr App
##### LA Hacks May 2, 2016
----------------
##### Created by:
- Anthony Doan-Ha
- Anthony Ma
- Anthony Xue
- Kevin Kayser
- Kevin Sheu
- Mitchell Song
- Soohee Han
- Stephen Eng
- Thomas Chun
- Vince Yang
- Vincent Siu
- Vivian Sun

--------------------

### Dependencies:
- XCode 7 and IOS 9 (I think, unsure)
- nodejs v0.10.25
- npm 1.3.10 (do we even need this lol)

### Configuration:
- Inside /spottr_nodejs_server/server.js, you can add more users in with the User constructor, change their profile picture URL with that specific function I can't remember, and call addUser on that list
- Change the IP Address at the very bottom at the .listen() part
- Output is sent in the response.write() function


### Usage: 
- Set up server with:
 ```nodejs ./server.js```
- Send get request to:
```<IP Address>:<Port Number>/<first name>/<last name>/<zip code>/<squat weight>/<deadlift weight>/<bench weight>```
- Return output will be of form:
```<first name>,<last name>,<zip code>,<squat weight>,<deadlift weight>,<bench weight>,```
