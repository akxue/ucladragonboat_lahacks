var http = require('http');
//////////USER CLASS////////////
// Constructor
function user(firstName, lastName, squat, deadlift, bench, zipCode, MF,aboutMe)
{
    this.firstName = firstName;
    this.lastName  = lastName;
    this.squat = squat;
    this.deadlift = deadlift;
    this.bench = bench;
    this.zipCode = zipCode;
    this.gender = MF;
    this.aboutMe = aboutMe;
    this.totalLift = squat + deadlift + bench;
    this.imageURL = "http://1.bp.blogspot.com/-n4re1AOb5x0/U-WP0ppwr5I/AAAAAAAALhY/QgFS0Bmp6Ug/s1600/cute-wink-smiley.png";

// class methods
user.prototype.changeFName = function (newName)
{
    this.firstName = newName;
};

user.prototype.changeLName = function (newName)
{
    this.lastName = newName;
};

user.prototype.changeZip = function (newZip)
{
    this.zipCode = newZip;
};

user.prototype.changeAboutMe = function(newAboutMe)
{
    this.aboutMe = newAboutMe;
};

user.prototype.changeURL = function(newURL)
{
    this.imageURL = newURL;
};
}
//////////USER LIST/////////////

function userList()
{
    this.list = [];
    this.numUsers = 0;

//___________________ADD USERS___________________//
userList.prototype.addUser = function (user)
{
     this.list.push(user);
     this.numUsers = this.numUsers + 1;
};
//____________MATCH BY ZIPCODE__________________//                                                   
userList.prototype.matchByZip = function (user)
{
    var matchList = new userList();
    var bool = false;
    for(var i = 0; i < this.numUsers; i++)
        {
            if(Math.abs(user.zipCode - this.list[i].zipCode) < 5)
                {
                    //REMOVE MATCHES TO SELF!                                                        
                    if(this.list[i].firstName == user.firstName && this.list[i].lastName == user.lastName)
                        {
                            continue;
                        }
                    matchList.addUser(this.list[i]);
                    bool = true;
                }
        }
    
    if (bool === false)
	{
	    matchList.addUser(this.list[5]);    
	    }

    return matchList;
};

//____________MATCH BY LIFTING TOTAL__________________//
userList.prototype.matchByLifts = function (user)
{
    return this.list[Math.floor(Math.random() * this.list.length)];
    var matchInd = 0;
    var matchDif = 10000;
    for(var i = 0; i < this.numUsers; i++)
	{
	    if(Math.abs(this.list[i].totalLift - user.totalLift) < matchDif)
		{
		    //REMOVE MATCHES TO SELF!
		    if(this.list[i].firstName == user.firstName && this.list[i].lastName == user.lastName)
			{
			    continue;
			    }
		    matchInd = i;
		    matchDif = this.list[i].totalLift - user.totalLift;
		    }
	    }
    
    return this.list[matchInd];
};

// MATCH BY BEST MATCH//
userList.prototype.BESTMATCH = function (user)
{
    
var matchList = this.matchByZip(user);
var bestMatch = matchList.matchByLifts(user);

    return bestMatch;
};

}

function printUser(user)
{
    var temp = "";
    temp = user.firstName + "," + user.lastName + "," + user.aboutMe + "," + user.squat + "," + user.deadlift + "," + user.bench + "," + user.imageURL + ",";
    return temp; 
}

var usrArray = function(url) {
    var add = "/";
    var modurl = url.concat(add);
    //  console.log(modurl);                                                   

    var array = [];
    var start = 1;
    var end = 1;
    for (var i = 1; i < modurl.length; i++) {
        if( modurl.charAt(i) === '/') {
            //console.log("in the loop");                                      
            end = i;
            array.push(url.substring(start,end));
            start = i+1;
        }
    }
    return array;
}


var u1 = new user("Thomas","Chun", 300, 300, 300, 90024,"M","Hi I am looking for a gym buddy");
var u2 = new user("Soohee","Han", 300,300,200,90024, "F","Hello, i like to gym");
var u3 = new user("Anthony","Ma", 100,112,543,90024, "M","lolololol");
var u4 = new user("Stephen","Eng", 142, 234,123,90024, "M","i am db pres");
var u5 = new user("Vince","Siu", 123,321,123,90024, "M","scrubs");
var u6 = new user("Shitchell","Thong",185,100,300, 90024,"M","poop");
var u7 = new user("Worseley", "Song", 300, 300, 300, 90024, "M", "supreme");
var u8 = new user("Kevin", "Shu", 200, 200, 235, 90024, "M", "Drink with me");
var u9 = new user("Anthony", "DH", 245, 155, 300, 90024, "M", "Senpai!");
var u10 = new user("Tony", "X", 300, 300, 300, 90024, "M", "Hey man");
var u11 = new user("Kevin", "Kayser", 250, 250, 250, 90024, "M", "Get big");
var u12 = new user("Robin", "Yee", 200, 200, 200, 90024, "F", "Hi friends!");
var u13 = new user("Vivian", "Sun", 100, 130, 100, 90024, "F", "Awkward Turtles!");

u1.changeURL("https://scontent.xx.fbcdn.net/t31.0-8/12998430_10208703751812735_4016385098996737394_o.jpg");
u2.changeURL("https://scontent.xx.fbcdn.net/t31.0-8/12365903_994259417279653_6931938087996049450_o.jpg");
u3.changeURL("https://scontent.xx.fbcdn.net/v/t1.0-0/p206x206/13062115_10209531418311577_3003533930178837249_n.jpg?oh=c0d9f441187fbe6e9d6efbb967ba89a6&oe=57B4CF04");
u4.changeURL("https://scontent.xx.fbcdn.net/v/t1.0-9/11156412_10206580724737102_637312540642826417_n.jpg?oh=1f2afd53c7d5c9d2d00dbe6828634403&oe=57BC110D");
u5.changeURL("https://scontent.xx.fbcdn.net/t31.0-8/11174374_10206449578135519_2820821802604388391_o.jpg");
u6.changeURL("https://scontent.xx.fbcdn.net/v/t1.0-9/1601527_10203474474088272_175015860731022163_n.jpg?oh=e83230807317510b29fe1113f0078a78&oe=57B2AD03");
u7.changeURL("http://i1.wp.com/media.japanpowered.com/images/oreimo-tsuntenshi.jpg");
u8.changeURL("https://40.media.tumblr.com/tumblr_lpqsj0ZJn01qgwajro1_500.jpg");
u9.changeURL("https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/68040_545955765430524_204648807_n.jpg?oh=4dbd7dcab0485e3a52f71ebd15d6a450&oe=57AFD2D9");
u10.changeURL("https://36.media.tumblr.com/227195c20ba23a9444be3ed5b65e32d9/tumblr_mnzltjBXwK1qm9k25o1_1280.jpg");
u11.changeURL("https://s-media-cache-ak0.pinimg.com/736x/60/67/a7/6067a7252b5f5261abc359615a562874.jpg");
u12.changeURL("http://vignette2.wikia.nocookie.net/batman/images/5/59/Batman_'66_-_Burt_Ward_as_Robin.jpg/revision/latest?cb=20140322174122");




var myUsers = new userList();
myUsers.addUser(u1);
myUsers.addUser(u2);
myUsers.addUser(u3);
myUsers.addUser(u4);
myUsers.addUser(u5);
myUsers.addUser(u6);
myUsers.addUser(u7);
myUsers.addUser(u8);
myUsers.addUser(u9);
myUsers.addUser(u10);
myUsers.addUser(u11);
myUsers.addUser(u12);

printUser(myUsers.BESTMATCH(u10));

http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var body = [];
  request.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
var array = usrArray(url);
var uT = new user(array[0], array[1], array[3], array[4], array[5], array[2], "F", "HELLO!");
myUsers.addUser(uT);
//response.write(printUser(myUsers.list[10]));
//response.write(printUser(uT));
response.write(printUser(myUsers.BESTMATCH(uT))); 
response.end();
  });
}).listen(8080); // Activates this server, listening on port 8080.
