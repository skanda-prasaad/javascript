let timeInt = setTimeout(function(){
    console.log('from callback');
},2000);

console.log('global'); //this runs first 

clearInterval(timeInt);