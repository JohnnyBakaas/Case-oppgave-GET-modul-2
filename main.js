"use strict";

//modell
const movies = [
  {
    name: "Inglourious Basterds",
    picture: "img/inglourious basterds.png",
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    rating: 10,
    genre: ["Adventure", "Drama", "War"],
  },
  {
    name: "Pulp Fiction",
    picture:
      "img/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rating: 10,
    genre: ["Crime", "Drama"],
  },
  {
    name: "Once Upon a Time In Hollywood",
    picture: "img/Once Upon a Time... in Hollywood (2019).jpg",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    rating: 7,
    genre: ["Comedy", "Drama"],
  },
  {
    name: "The Hateful Eight",
    picture: "img/The Hateful Eight.jpg",
    description:
      "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
    rating: 8,
    genre: ["Crime", "Drama", "Mystery", "Thriller", "Western"],
  },
  {
    name: "Django Unchained",
    picture: "img/Django Unchained.jpg",
    description:
      "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
    rating: 8,
    genre: ["Drama", "Western"],
  },
  {
    name: "Kill Bill: Vol. 1",
    picture: "img/Kill Bill Vol 1.jpg",
    description:
      "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    rating: 8,
    genre: ["Action", "Crime", "Drama", "Thriller"],
  },
  {
    name: "Kill Bill: Vol. 2",
    picture: "img/Kill Bill Vol.2.jpg",
    description:
      "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
    rating: 8,
    genre: ["Action", "Crime", "Thriller"],
  },
  {
    name: "Reservoir Dogs",
    picture: "img/Reservoir Dogs.jpg",
    description:
      "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    rating: 10,
    genre: ["Crime", "Thriller"],
  },
  {
    name: "Batman Begins",
    picture: "img/Batman Begins.jpg",
    description:
      "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    rating: 9,
    genre: ["Action", "Crime", "Drama"],
  },
  {
    name: "The Dark Knight",
    picture: "img/The Dark Knight.jpg",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    rating: 10,
    genre: ["Action", "Crime", "Drama", "Thriller"],
  },
  {
    name: "The Dark Knight Rises",
    picture: "img/The Dark Knight Rises.jpg",
    description:
      "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Selina Kyle, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    rating: 8,
    genre: ["Action", "Drama"],
  },
  {
    name: "Interstellar",
    picture: "img/Interstellar.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    rating: 9,
    genre: ["Adventure", "Drama", "Sci-Fi"],
  },
];

/*fetch("/movies.json").then((res) =>
  res.json().then((data) => console.log(data))
);*/

const users = [
  {
    username: "Johnny",
    pasword: "Hemmelig",
    watched: [
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
    favorite: [
      true,
      true,
      false,
      false,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
  },
];

const header = {
  logo: "🍅",
  name: "Fresh Tomatoes",
  sorting: "Sorter",
  favorites: false,
  watched: false,
  loggedInn: false,
};

let loggedIn = true;

let userSelect = 0;

const genreList = [];

const genreSelected = [];

const moviesSelected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//view

const displayUserName = () => {
  if (loggedIn) {
    return users[userSelect].username;
  }
  return "Logg inn";
};

const loggInnRender = () => {
  let loggInnView = "";
  loggInnView += `<div class="logg-inn">`;

  loggInnView += `<div>`;
  loggInnView += `<div> Brukernavn </div> <input type="text">`;
  loggInnView += `<div> Passord </div> <input type="text">`;
  loggInnView += `</div>`;

  loggInnView += `</div>`;
  document.getElementById("render").innerHTML = loggInnView;
};

const userProfileRender = () => {
  //funksjonalitet til å endre brukernavn og passord
};

const headerRender = () => {
  document.getElementById("header").innerHTML = "";

  let headderView = `<div class="header">`;
  headderView += `<div class="header-top">`;
  headderView += `<div class="logo-and-text" onclick="sortingReset()">`;
  headderView += `<h2>${header.logo}</h2>`;
  headderView += `<h1>${header.name}</h1>`;
  headderView += `</div">`;
  headderView += `</div>`;
  //TODO if loggetinn endre til "log ut"
  headderView += `<div onclick="loggInnRender()">${displayUserName()}</div>`;
  headderView += `</div>`;

  headderView += `<div class="sorting">`;
  headderView += `<div onclick="genreViewTogle()">Sjanger</div>`;
  headderView += `<div onclick="sortingFavorit()">Favoritter</div>`;
  headderView += `<div>Sett</div>`;

  headderView += `</div>`;

  document.getElementById("header").innerHTML = headderView;
};

const mainViewRender = () => {
  let mainView = `<div class="main">`;
  for (let i = 0; i < moviesSelected.length; i++) {
    mainView += `<div onclick="spesificViewRender(${i})" class="card">`;
    mainView += `<img src="${movies[moviesSelected[i]].picture}" alt="${
      movies[moviesSelected[i]].name
    }" />`;
    mainView += `<div class="rating">${
      movies[moviesSelected[i]].rating
    } /10</div>`;
    mainView += "</div>";
  }
  mainView += `</div>`;
  document.getElementById("render").innerHTML = mainView;
};

const spesificViewRender = (userSelect) => {
  let spesificView = `<div class="spesific">`;
  let select = movies[moviesSelected[userSelect]];

  spesificView += `<h1>${select.name} Rating ${select.rating}/10</h1>`;
  spesificView += `<img src="${select.picture}" alt="${select.name}" />`;
  spesificView += `<div>`;
  spesificView += `<button type="button">Favoritt</button>`;
  spesificView += `<button type="button">Sett</button>`;
  spesificView += `</div>`;
  spesificView += `<h2>${select.description}</h2>`;

  document.getElementById("render").innerHTML = spesificView;
};

const genreViewRender = () => {
  let genreView = `<div class="genreView">`;
  for (let i = 0; i < genreList.length; i++) {
    genreView += `<div class="genre" onclick="sortingGenre(${i})"> ${genreList[i]} </div>`;
  }
  genreView += `</div>`;
  document.getElementById("genreViewRender").innerHTML = genreView;
};

//controller
const generateGenreList = () => {
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    for (let j = 0; j < movie.genre.length; j++) {
      if (!genreList.includes(movie.genre[j])) {
        console.log("Jau");
        genreList.push(movie.genre[j]);
      }
    }
  }
};

const sortingClear = () => {
  moviesSelected.length = 0;
};

const sortingReset = () => {
  sortingClear();
  for (let i = 0; i < movies.length; i++) {
    moviesSelected.push(i);
  }
  mainViewRender();
};

const sortingFavorit = () => {
  sortingClear();
  for (let i = 0; i < movies.length; i++) {
    console.log(i);
    if (users[userSelect].favorite[i]) {
      moviesSelected.push(i);
    }
  }
  console.log(moviesSelected);
  mainViewRender();
};

const genreViewTogle = () => {
  if (document.getElementById("genreViewRender").innerHTML == "") {
    genreViewRender();
  } else {
    document.getElementById("genreViewRender").innerHTML = "";
  }
};

const sortingGenre = (ganre) => {
  sortingClear();
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.includes(genreList[ganre])) {
      moviesSelected.push(i);
      console.log(movies[i].name);
      console.log(genreList[ganre]);
    }
  }
  mainViewRender();
};

//start up

generateGenreList();
console.log(genreList);
headerRender();
mainViewRender();
