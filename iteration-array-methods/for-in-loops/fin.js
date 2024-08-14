const color = {
    color1 : "Red",
    color2 : "Blue",
    color3 : "Yellow",
    color4 : "Green",
};

for(const key in color){
    console.log(key , color[key]);
}

const colorArray = ["Blue" , "Green", "red"];

for(const key in colorArray){
    console.log(key , colorArray[key]);
}