const Media = require('./Media.js');

module.exports = class Picture extends Media {
    constructor(name, author, yearOfCreation, technique){
        super(name, author, yearOfCreation);
        this.technique = technique;
    }
};