const readline = require("readline");
const util = require("util");

const Media = require('./Media.js');
const Film = require('./Film.js');
const Book = require('./Book.js');
const Song = require('./Song.js');
const Picture = require('./Picture.js');
//const functions = require('./functions');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

const catalogue = {
    films: ["one", "two"],
    books: [],
    songs: [],
    pictures: []
};
let actionNumber;
let chooseMediaNumber;

async function welcome(){
    rl.write ("Welcome to Catalogue!\n");
    rl.write ("What do you want to do?\n");
    rl.write ("If you want to see the Catalogue input 1.\n");
    rl.write ("If you want to add any media to the Catalogue input 2.\n");
    rl.write ("If you want to delete any media in the Catalogue input 3.\n");
    rl.write ("If you want to edit any media in the Catalogue input 4.\n");
    rl.write("To exit press ctrl + c.\n");

    actionNumber = Number(await question('Please, input your choice: '));
    return;
}

welcome()
  .then(() => {
    rl.write("Good choice!");
    return actionNumber;
  })
  .then(action)

.catch(console.error);


async function action(actionNumber){   //показать калалог
  if (actionNumber === 1){
    rl.write("Look what we have!\n");
    console.table(catalogue);
  } else if (actionNumber === 2){  //добавление медиа
    
    chooseMedia()
    .then (addMedia)
    
  
  }
  //process.exit(0);
}

async function chooseMedia(){        //выбор медиа
  rl.write ("What kind of media?\n");
  rl.write ("if your choice is a Film input 1.\n");
  rl.write ("if your choice is a Book input 2.\n");
  rl.write ("if your choice is a Picture input 3.\n");
  rl.write ("if your choice is a Song input 4.\n");
    
  chooseMediaNumber = Number( await question ("Input your choice:"));
   return chooseMediaNumber;
   
}

async function addMedia ( chooseMediaNumber){                         //добавление медиа

  if (chooseMediaNumber === 1){                             // добавление фильма
    
    let name = await question ("Input name of the film:");
    let author = await question ("Input author of the film:");
    let yearOfCreation = await question ("Input the year of creation:");
    let genre = await question("What kind of genre is this film:");
    
    getFilm(name, author,yearOfCreation,genre)
    console.table(catalogue);
  } else if (chooseMediaNumber === 2 ){                              //добавление книги
    let name = await question ("Input name of the book:");
    let author = await question ("Input author of the book:");
    let yearOfCreation = await question ("Input the year of creation:");
    let language = await question("Input the language of the book:");

    getBook(name, author, yearOfCreation, language)
    console.table(catalogue);
  } else if (chooseMediaNumber === 3){                            // добавление картины
    let name = await question ("Input name of the picture:");
    let author = await question ("Input author of the picture:");
    let yearOfCreation = await question ("Input the year of creation:");
    let technique = await question("What technique was used:");
    
    getPicture(name, author,yearOfCreation,technique)
    
    console.table(catalogue);
  } else if (chooseMediaNumber === 4){                            // добавление песни
    let name = await question ("Input name of the song:");
    let author = await question ("Input author of the song:");
    let yearOfCreation = await question ("Input the year of creation:");
    let tempo = await question("What tempo is in this song:");
    
    getSong(name, author,yearOfCreation,tempo)
    
    console.table(catalogue);
  } else console.log("You input a wrong number");
  process.exit(0);
}




function  getFilm (name, author, yearOfCreation, genre){

    if (catalogue.films.includes(name)){
        return "This one already includes" 
    } else{
        let film = new Film (name, author, yearOfCreation, genre);
        catalogue.films.push(film);
    }
    return catalogue;
}

function getBook (name, author, yearOfCreation, language){

    if (catalogue.books.includes(name)){
        return "This one already includes"
    } else{
        let a = new Book (name, author, yearOfCreation, language);
        catalogue.books.push(a);
    }
    return catalogue;
}

function getSong (name, author, yearOfCreation, tempo){

    if (catalogue.songs.includes(name)){
        return "This one already includes"
    } else{
        let a = new Song (name, author, yearOfCreation, tempo);
        catalogue.songs.push(a);
    }
    return catalogue;
}

function getPicture (name, author, yearOfCreation, technique){

    if (catalogue.pictures.includes(name)){
        return "This one already includes"
    } else{
        let a = new Picture (name, author, yearOfCreation, technique);
        catalogue.pictures.push(a);
        console.log(catalogue)
    }
    return catalogue;
}

// let b = getPicture( "lilly", "life", 2012, "oil");
// let c = getPicture( "lilly", "crazy", 2112, "blood");