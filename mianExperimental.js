"use strict";

const model = {
  movies: [
    {
      name: "Inglourious Basterds",
      picture: "img/inglourious basterds.png",
      description:
        "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
      rating: 10,
      genre: ["Adventure", "Drama", "War"],
      id: 0,
    },
    {
      name: "Pulp Fiction",
      picture:
        "img/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      rating: 10,
      genre: ["Crime", "Drama"],
      id: 1,
    },
    {
      name: "Once Upon a Time In Hollywood",
      picture: "img/Once Upon a Time... in Hollywood (2019).jpg",
      description:
        "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
      rating: 7,
      genre: ["Comedy", "Drama"],
      id: 2,
    },
    {
      name: "The Hateful Eight",
      picture: "img/The Hateful Eight.jpg",
      description:
        "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
      rating: 8,
      genre: ["Crime", "Drama", "Mystery", "Thriller", "Western"],
      id: 3,
    },
    {
      name: "Django Unchained",
      picture: "img/Django Unchained.jpg",
      description:
        "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
      rating: 8,
      genre: ["Drama", "Western"],
      id: 4,
    },
    {
      name: "Kill Bill: Vol. 1",
      picture: "img/Kill Bill Vol 1.jpg",
      description:
        "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
      rating: 8,
      genre: ["Action", "Crime", "Drama", "Thriller"],
      id: 5,
    },
    {
      name: "Kill Bill: Vol. 2",
      picture: "img/Kill Bill Vol.2.jpg",
      description:
        "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
      rating: 8,
      genre: ["Action", "Crime", "Thriller"],
      id: 6,
    },
    {
      name: "Reservoir Dogs",
      picture: "img/Reservoir Dogs.jpg",
      description:
        "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      rating: 10,
      genre: ["Crime", "Thriller"],
      id: 7,
    },
    {
      name: "Batman Begins",
      picture: "img/Batman Begins.jpg",
      description:
        "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
      rating: 9,
      genre: ["Action", "Crime", "Drama"],
      id: 8,
    },
    {
      name: "The Dark Knight",
      picture: "img/The Dark Knight.jpg",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: 10,
      genre: ["Action", "Crime", "Drama", "Thriller"],
      id: 9,
    },
    {
      name: "The Dark Knight Rises",
      picture: "img/The Dark Knight Rises.jpg",
      description:
        "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Selina Kyle, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
      rating: 8,
      genre: ["Action", "Drama"],
      id: 10,
    },
    {
      name: "Interstellar",
      picture: "img/Interstellar.jpg",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      rating: 9,
      genre: ["Adventure", "Drama", "Sci-Fi"],
      id: 11,
    },
  ],
  users: [
    {
      username: "Johnny",
      pasword: "Hemmelig",
      id: 0,
    },
  ],
  watched: [{ userId: 0, movieId: 0, isFavorite: true }],

  userSelected: false,
  genreList: [], // genereres av en funksjon
  genreSelected: [], //ekskluderende, hvis to sjangere blir valgt vises bare &&, ikke ||
  displyMovies: [0, 1, 2, 3, 4, 5, 6],

  header: {
    logo: "🍅",
    name: "Fresh Tomatoes",
    sorting: "Sorter",
    favorites: false,
    watched: false,
    loggedInn: false,
  },
};

function view() {
  this.header = () => {
    let theHTML = `
    <h1>
      ${model.header.logo}
      ${model.header.name}
    </h1>
    <div>
      ${controll.selectName()}
    </div>
    `;
    document.getElementById("header").innerHTML = theHTML;
  };

  // legg til sjanger greier

  const updateRoot = (root) => {
    document.getElementById("root").innerHTML = root;
  };

  this.displaySelection = () => {
    let theHTML = "";
    for (let i = 0; i < model.displyMovies.length; i++) {
      theHTML += `<div class="card" onclick="updateView.displayMovie(${
        model.movies[model.displyMovies[i]].id
      })"> <img src="${model.movies[model.displyMovies[i]].picture}"alt"${
        model.movies[model.displyMovies[i]].name
      } /> <div class="rating"> ${
        model.movies[model.displyMovies[i]].rating
      }/10 </div></div>`;
    }
    updateRoot(theHTML);
  };

  const genreMovie = (obj) => {
    let outputGemre = "";
    for (let i = 0; i < obj.genre.length; i++) {
      outputGemre += `<div> ${obj.genre[i]} </div>`;
    }
    console.log(outputGemre);
    return outputGemre;
  };

  this.displayMovie = (id) => {
    var result = model.movies.find((obj) => {
      return obj.id === id;
    });
    let movie = /*HTML*/ `
    <div> 
      <div class="title"> 
        <h1> ${result.name} </h1> <h1> ${result.rating}/10 </p>
      </div>
      <div>
        <img src="${result.picture}"alt"${result.name} />
        <div>
          legg til knapper for sett og favoritt her
          ${genreMovie(result)}
        </div>
      </div>
     <p> ${result.description} </p>
    </div>
    `;
    //this.updateMain(theHTML);
    console.log(result);
    updateRoot(movie);
  };

  this.loggInn = () => {
    let theHTML = `
    <div class"loggInnPage">

    <div>
    <label for="uname"><b>Username</b></label>
    <input id="username" type="text" placeholder="Enter Username" name="uname" required class="loggInnPageForum">
    <div>

    <div>
    <label for="psw"><b>Password</b></label>
    <input id="pasword" type="password" placeholder="Enter Password" name="psw" required class="loggInnPageForum">
    </div>

    <button type="submit" class="loggInnPageForum" onclick="controll.checkLoggeInn()">Login</button>

    </div>
    `;
    updateRoot(theHTML);
  };

  this.createAcount = () => {
    let theHTML = `
    <div class"loggInnPage">

    <div>
    <label for="uname"><b>Username</b></label>
    <input id="newUserName" type="text" placeholder="Enter Username" name="uname" required class="loggInnPageForum">
    <div>

    <div>
    <label for="psw"><b>Password</b></label>
    <input id="newPasword" type="text" placeholder="Enter Password" name="psw" required class="loggInnPageForum">
    </div>

    <button type="submit" class="loggInnPageForum" onclick="controll.createAcount()">Lag bruker</button>

    </div>
    `;
    updateRoot(theHTML);
  };
}

function controller() {
  this.selectName = () => {
    if (model.userSelected) {
      return `<div onclick=""> ${model.userSelected} </div>`;
    }
    return `<div onclick="updateView.loggInn()"> Log in </div>`;
  };

  this.makeGenreList = () => {
    for (let i = 0; i < model.movies.length; i++) {
      for (let j = 0; j < model.movies[i].genre.length; j++) {
        if (!model.genreList.includes(model.movies[i].genre[j])) {
          model.genreList.push(model.movies[i].genre[j]);
          console.log(model.movies[i].genre[j]);
        }
      }
    }
    console.log(model.genreList);
  };

  this.checkLoggeInn = () => {
    let userName = String(document.getElementById("username").value);
    let pasword = String(document.getElementById("pasword").value);

    for (let i = 0; i < model.users.length; i++) {
      if (userName == model.users[i].username) {
        if (pasword == model.users[i].pasword) {
          model.userSelected = model.users[i].username;
        }
      }
    }

    if (model.userSelected) {
      updateView.header();
      updateView.displaySelection();
    }
  };

  const generateNewId = () => {
    let lastId = model.users[model.users.length - 1].id;
    for (let i = 0; i < model.users.length; i++) {
      if (lastId < model.users[i].id) {
        lastId++;
      }
    }
    return lastId;
  };

  this.createAcount = () => {
    let newUserName = String(document.getElementById("newUserName").value);
    let newPasword = String(document.getElementById("newPasword").value);
    let lastId = generateNewId();
    let noMatch = true;
    for (let i = 0; i < model.users.length; i++) {
      if (newUserName == model.users[i].username) {
        noMatch = false;
      }
    }
    if (noMatch) {
      model.users.push({
        username: newUserName,
        pasword: newPasword,
        id: lastId,
      });
      model.userSelected = newUserName;
      updateView.displaySelection();
      updateView.header();
    } else {
      alert("Brukernavnet er tatt");
    }
  };
}

// Start up

const controll = new controller();
controll.makeGenreList();

const updateView = new view();
updateView.displaySelection();
updateView.loggInn();
updateView.createAcount();
updateView.header();
