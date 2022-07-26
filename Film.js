const Media = require('./Media.js');

module.exports = class Film extends Media {
    constructor(name, author, yearOfCreation, genre){
        super(name, author, yearOfCreation);
        this.genre = genre;
    }
};

