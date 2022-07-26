const Media = require('./Media.js');

module.exports = class Song extends Media {
    constructor(name, author, yearOfCreation, tempo){
        super(name, author, yearOfCreation);
        this.tempo = tempo;
    }
};