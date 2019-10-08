const fs = require('fs');

const buffer = fs.readFileSync("1-json.json")
const dataJSON = buffer.toString();
const user = JSON.parse(dataJSON);

user.Name = "Andre Kriegor";
user.Planet = "Jupiter"

const userJSON = JSON.stringify(user)

fs.writeFileSync("1-json.json", userJSON)

console.log(user)