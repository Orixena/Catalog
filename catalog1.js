const readline = require("readline");
const util = require("util");

const Media = require('./Media.js');
const Film = require('./Film.js');
const Book = require('./Book.js');
const Song = require('./Song.js');
const Picture = require('./Picture.js');
const { runInContext } = require("vm");
//const functions = require('./functions');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

const catalogue = {
    films: [],
    books: [],
    songs: [],
    pictures: []
};
//let actionNumber;
let chooseMediaNumber;
rl.write ("Welcome to Catalogue!\n");

async function mainLoop(){
    
    rl.write ("What do you want to do?\n");
    rl.write ("If you want to see the Catalogue input 1.\n");
    rl.write ("If you want to add any media to the Catalogue input 2.\n");
    rl.write ("If you want to delete any media in the Catalogue input 3.\n");
    rl.write ("If you want to edit any media in the Catalogue input 4.\n");
    rl.write ("If you don't want to do anything input 5. \n")
    rl.write("To exit press ctrl + c.\n");

    let actionNumber;

    
    actionNumber = Number(await question('Please, input your choice: '));
    if (actionNumber === 5){
        rl.write("Ok,see you later!\n");
        return;
    } else if ( actionNumber === 1){
        rl.write("Look what we have!\n");
        console.table(catalogue);
        return await mainLoop();
    } else if ( actionNumber === 2){
        chooseMedia()
        .then (addMedia)
       
    } else {
        rl.write("i don't know")
        return await mainLoop();
    }
    
}

mainLoop()
  .then(() => {
    rl.write("Goodbye!");
    process.exit(0);
  })
  .catch(console.error);



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
      console.table(catalogue.films);
      return await mainLoop();

    } else if (chooseMediaNumber === 2 ){                              //добавление книги
      let name = await question ("Input name of the book:");
      let author = await question ("Input author of the book:");
      let yearOfCreation = await question ("Input the year of creation:");
      let language = await question("Input the language of the book:");
  
      getBook(name, author, yearOfCreation, language)
      console.table(catalogue);
      return await mainLoop();

    } else if (chooseMediaNumber === 3){                            // добавление картины
      let name = await question ("Input name of the picture:");
      let author = await question ("Input author of the picture:");
      let yearOfCreation = await question ("Input the year of creation:");
      let technique = await question("What technique was used:");
      
      getPicture(name, author,yearOfCreation,technique)
      
      console.table(catalogue);
      return await mainLoop();
      
    } else if (chooseMediaNumber === 4){                            // добавление песни
      let name = await question ("Input name of the song:");
      let author = await question ("Input author of the song:");
      let yearOfCreation = await question ("Input the year of creation:");
      let tempo = await question("What tempo is in this song:");
      
      getSong(name, author,yearOfCreation,tempo)
      
      console.table(catalogue);
      
      
    } else console.log("You input a wrong number");
  
    //  process.exit(0);
  }
  
  
  
  
  function  getFilm (name, author, yearOfCreation, genre){
    let namesOfFilms = [];
     for ( let i = 0; i < catalogue.films.length; i++){
      let nameOne = catalogue.films[i].name;
      namesOfFilms.push(nameOne);
     }
      if (namesOfFilms.includes(name)){
          return "This one already includes" 
      } else{
          let film = new Film (name, author, yearOfCreation, genre);
          catalogue.films.push(film);
      }
      console.log(catalogue.films[0].name)
      return catalogue;
  }
  
  function getBook (name, author, yearOfCreation, language){
    let namesOfBooks = [];
    for ( let i = 0; i < catalogue.books.length; i++){
     let nameOne = catalogue.books[i].name;
     namesOfBooks.push(nameOne);
    }
     if (namesOfBooks.includes(name)){
          return "This one already includes"
      } else{
          let a = new Book (name, author, yearOfCreation, language);
          catalogue.books.push(a);
      }
      return catalogue;
  }
  
  function getSong (name, author, yearOfCreation, tempo){
    let namesOfSongs = [];
    for ( let i = 0; i < catalogue.songs.length; i++){
     let nameOne = catalogue.songs[i].name;
     namesOfSongs.push(nameOne);
    }
     if (namesOfSongs.includes(name)){
          return "This one already includes"
      } else{
          let a = new Song (name, author, yearOfCreation, tempo);
          catalogue.songs.push(a);
      }
      return catalogue;
  }
  
  function getPicture (name, author, yearOfCreation, technique){
    let namesOfPictures = [];
    for ( let i = 0; i < catalogue.pictures.length; i++){
     let nameOne = catalogue.pictures[i].name;
     namesOfPictures.push(nameOne);
    }
     if (namesOfPictures.includes(name)){
          return "This one already includes"
      } else{
          let a = new Picture (name, author, yearOfCreation, technique);
          catalogue.pictures.push(a);
          console.log(catalogue)
      }
      return catalogue;
  }