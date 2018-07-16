var uniqueRandomArray = require('unique-random-array')
var starwarsNames = require('./starwars-names.json');

var getRandomItem = uniqueRandomArray(starwarsNames);
module.exports = {
    all: starwarsNames,
    random: random
};

function random(number) {
     if (number === undefined) {
         return getRandomItem();
     }

     var randomItems = [];
     for (let index = 0; index < number; index++) {
         randomItems.push(getRandomItem());
     }

     return randomItems;

}