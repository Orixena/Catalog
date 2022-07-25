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
let guessedNumber;
let guessedMediaNumber;

async function welcome(){
    rl.write ("Welcome to Catalogue!\n");
    rl.write ("What do you want to do?\n");
    rl.write ("If you want to see the Catalogue input 1.\n");
    rl.write ("If you want to add any media to the Catalogue input 2.\n");
    rl.write ("If you want to delete any media in the Catalogue input 3.\n");
    rl.write ("If you want to edit any media in the Catalogue input 4.\n");
    rl.write("To exit press ctrl + c.\n");

    guessedNumber = Number(await question('Please, input your choice: '));
    return;
}

welcome()
  .then(() => {
    rl.write("Good choice!");
    return guessedNumber;
  })
  .then(toDo)

.catch(console.error);


async function toDo(guessedNumber){   //показать калалог
  if (guessedNumber === 1){
    rl.write("Look what we have!\n");
    console.table(catalogue);
  } else if (guessedNumber === 2){  //удаление медиа
    
    choiceMedia()
    .then (addMedia)
    
  
  }
  process.exit(0);
}

async function choiceMedia(){        //выбор медиа
  rl.write ("What kind of media?\n");
  rl.write ("if your choice is a Film input 1.\n");
  rl.write ("if your choice is a Book input 2.\n");
  rl.write ("if your choice is a Picture input 3.\n");
  rl.write ("if your choice is a Song input 4.\n");
    
  guessedMediaNumber = Number( await question ("Input your choice:"));
   return guessedMediaNumber;
}

async function addMedia ( guessedMediaNumber){

  console.log( "work");

  if (guessedMediaNumber === 1){
    let newFilm = {};
    newFilm.name = await question ("Input name of the film:");
    newFilm.author = await question ("Input author of the film:");
    newFilm.yearOfCreation = await question ("Input the year of creation:");
    newFilm.genre = await question("What kind of genre is this film:");
    catalogue.films.push(newFilm);
  } else console.log("idgsldkjsldfjlsdfj");
}




// function  getFilm (name, author, yearOfCreation, genre){

//     if (catalog.films.includes(name)){
//         return "This one already includes" 
//     } else{
//         let a = new Film (name, author, yearOfCreation, genre);
//         catalog.films.push(a);
//     }
//     return catalog;
// }

// function getBook (name, author, yearOfCreation, language){

//     if (catalog.books.includes(name)){
//         return "This one already includes"
//     } else{
//         let a = new Book (name, author, yearOfCreation, language);
//         catalog.books.push(a);
//     }
//     return catalog;
// }

// function getSong (name, author, yearOfCreation, tempo){

//     if (catalog.songs.includes(name)){
//         return "This one already includes"
//     } else{
//         let a = new Song (name, author, yearOfCreation, tempo);
//         catalog.songs.push(a);
//     }
//     return catalog;
// }

// function getPicture (name, author, yearOfCreation, technique){

//     if (catalog.pictures.includes(name)){
//         return "This one already includes"
//     } else{
//         let a = new Picture (name, author, yearOfCreation, technique);
//         catalog.pictures.push(a);
//         console.log(catalog)
//     }
//     return catalog;
// }

// let b = getPicture( "lilly", "life", 2012, "oil");
// let c = getPicture( "lilly", "crazy", 2112, "blood");