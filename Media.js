/**
 * prototype class
 */

module.exports = class Media{
    constructor( name,author, yearOfCreation){
        this.name = name;
        this.author = author;
        this.yearOfCreation = yearOfCreation;
    }
   
    

    toString() {return `{${this.name},${this.author},${this.dateOfCreation}}`;}
}