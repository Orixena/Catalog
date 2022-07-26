const Media = require('./Media.js');

module.exports = class Book extends Media {
    constructor(name, author, yearOfCreation, language){
        super(name, author, yearOfCreation);
        this.language = language;
    }
};