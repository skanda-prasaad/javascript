let name = "skanda"
repoCount = 50

// console.log(name + repoCount + "value"); ** not understandable

// ** instead  use this syntax :-

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const discordName = new String('Sandy-On-e')

console.log(discordName[0]);
console.log(discordName.toUpperCase());
console.log(discordName.charAt(3));
console.log(discordName.indexOf('y'));


const newDiscord =  discordName.substring(0,4)
console.log(newDiscord);

const anotherDiscord = discordName.slice(0,4)
console.log(anotherDiscord);

const newString = "  Skanda   "
console.log(newString);
console.log(newString.trim());

console.log(discordName.split('-'));
console.log(discordName.replace('-','+'));

console.log(discordName.includes('Sandy'));
