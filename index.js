const info = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hi, my name is ${info.name} and i went from the campus ${info.campus}`,
    e: "oO",
    T: "U ",
  })
);
