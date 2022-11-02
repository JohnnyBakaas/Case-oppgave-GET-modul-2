//modell
const movies = [
  {
    name: "Inglourious Basterds",
    picture: "img/inglourious basterds.png",
    watched: true,
    favorite: true,
    description: "Dette er en flott film",
    rating: 10,
    genre: ["Action", "Krig"],
  },
  {
    name: "Pulp Fiction",
    picture: "place holder",
    watched: true,
    favorite: true,
    description: "Dette er også en flott film",
    rating: 10,
    genre: [],
  },
];

const users = [
  {
    username: "Johnny",
    pasword: "Hemmelig",
  },
];

const genreSelection = [];
//view

const mainViewRender = () => {
  let mainView = `<div class="main">`;
  for (let i = 0; i < moviesSelected; i++) {
    mainView += `<div onclick("spesificViewRender(${i})")>`;
    mainView += `<img src="${movies[moviesSelected[i]].picture}" alt="${
      movies[moviesSelected[i]].name
    }" />`;
    mainView += `<div>${movies[moviesSelected[i]].rating}</div>`;
    mainView += "</div>";
  }
  mainView += `</div>`;
  document.getElementById("id-for-hoved-div").innerHTML = mainView;
};

const spesificViewRender = (userSelect) => {
  document.getElementById("id-for-hoved-div").innerHTML =
    moviesSelected[userSelect];
};

//controller

let moviesSelected = [];

const sorteringClear = () => {
  moviesSelected = [];
};

const sorteringSjanger = () => {
  sorteringClear();
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.includes(sjangerSelected)) {
      moviesSelected.push(i);
    }
  }
};

const sorteringFavorit = () => {
  sorteringClear();
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].favorite) {
      moviesSelected.push(i);
    }
  }
};
