const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];
function seeDinos(first, ...rest) {
    console.log(first);
    console.log(rest);
  }
  seeDinos(...jPDinos);
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
  };
const seeCharacters = ({ ellieSattler }) => {
    console.log(ellieSattler);
  };
  seeCharacters(jPCharacters);
  const jurassicParkMovies = [
    {
      one: "Jurassic Park",
      two: "The Lost World: Jurassic Park",
      three: "Jurassic Park III"
    },
    {
      four: "Jurassic World",
      five: "Jurassic World: Fallen Kingdom",
      six: "Jurassic World: Dominion"
    }
  ];
function seeJPMovies() {
    jurassicParkMovies.forEach(movie => {
      Object.values(movie).forEach(value => {
        console.log(value);
      });
    });
  }
  seeJPMovies();







