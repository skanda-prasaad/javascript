// basic callback:-
 
function greet(name, cb){
    console.log("Hello " + name);
    cb();
}
// Callback Function:- 

function welcome(){
    console.log("welcome....");
}

// greet("skanda", welcome);

//callback with async:-

function printInfo(name, cb){
    // Async step:-
    setTimeout(function(){
        console.log("printing info of " + name);
        cb("Call back");
    }, 2000);
}

function displayMsg(msg){
    console.log(msg)
}

// printInfo("Sandy", displayMsg);

// Fetch userdata :-

function fetchUserData(userId, callback){
    setTimeout(() => {
        const users = {
            1 : { id : 1 , name: "Sandy"},
            2 : { id : 2 , name: "Alex"},
        };
        const user = users[userId]
        if(user){
            callback(null, user)
        }else{
            callback("user data not found", null);
        }

    }, 2000);
}

function userdata(error, user){
    if(error){
        console.error("Error : " + error);
    }else{
        console.log("user :  " , user);
    }
}
fetchUserData(1,userdata);