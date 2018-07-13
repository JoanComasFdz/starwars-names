var uniqueRandomArray = require('unique-random-array')
var starwarsNames = require('./starwars-names.json');

module.exports = {
    all: starwarsNames,
    random: uniqueRandomArray(starwarsNames)
};