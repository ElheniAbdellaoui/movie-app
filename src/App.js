import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./component/Filter";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";

function App() {
  const [film, setFilm] = useState([
    {
      id: Math.random(),
      title: "Hercule",
      rate: "5",
      description:
        "Le film est librement inspiré du roman graphique Hercule : Les Guerres thraces de Steve Moore et Admira Wijaya, qui lui-même se déroule dans un univers librement inspiré par la mythologie grecque et par la Grèce antique et met en scène le héros grec Héraclès (communément appelé de son nom latin Hercule",
      imgURL:
        "https://www.ecranlarge.com/uploads/image/001/332/fddsmqy89rcmafzvgbujm11bwtv-777.jpg",
      date: "24 juillet 2014",
    },
    {
      id: Math.random(),
      title: "Titanic",
      rate: "5",
      description:
        "est un film dramatique américain écrit, produit et réalisé par James Cameron, sorti en 1997.Intégrant à la fois des aspects historiques et fictifs, le film est basé sur le récit du naufrage du RMS Titanic et met en vedette Leonardo DiCaprio et Kate Winslet.",
      imgURL:
        "https://p1.hiclipart.com/preview/228/841/290/leonardo-dicaprio-movie-collection-folder-ico-titanic-png-clipart.jpg",
      date: "19 décembre 1997",
    },
    {
      id: Math.random(),
      title: "Avatar",
      rate: "4",
      description:
        "action se déroule en 21543 sur Pandora, une des lunes de Polyphème, une planète géante gazeuse en orbite autour d'Alpha Centauri A dans le système stellaire le plus proche de la Terre",
      imgURL:
        "https://www.zajel.tn/wp-content/uploads/2022/12/Avatar-The-Way-of-Water.jpg",
      date: "17 décembre 2009",
    },
    {
      id: Math.random(),
      title: "Yuri Boyka",
      rate: "4",
      description:
        "Sorti de prison, Yuri Boyka intègre des tournois de free fight. Après avoir tué accidentellement un adversaire, il veut obtenir le pardon de sa veuve désormais esclave de la mafia russe qui l'oblige à rembourser les dettes de son défunt mari.",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5kKsjZyegyw_1DzQiy2aJK0bm668LBMhqA&usqp=CAU",
      date: "22 septembre 2016",
    },
    {
      id: Math.random(),
      title: "Lift",
      rate: "3",
      description:
        "Une voleuse hors pair et son ex-petit ami, qui travaille pour le FBI, font équipe afin de voler 100 millions de dollars en lingots d'or transportés sur un vol 777 de Londres à Zurich.",
      imgURL:
        "https://sm.ign.com/t/ign_mear/screenshot/default/lift-netflix-movie-kevin-hart-everything-we-know_thhg.1280.jpg",
      date: " 12 janvier 2024",
    },
  ]);
  const [search, setSearch] = useState("");

  const [starrate, setStarrate] = useState(1);
  const handlesearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (newfilm) => {
    setFilm([...film, newfilm]);
  };
  const handledelete = (id) => {
    setFilm(film.filter((el) => el.id !== id));
  };
  const handlerating = (x) => {
    setStarrate(x);
  };
  return (
    <div className="App">
      <Filter
        search={search}
        sear={handlesearch}
        starrate={starrate}
        handlerating={handlerating}
      />
      <MovieList
        film={film}
        del={handledelete}
        search={search}
        starrate={starrate}
      />
      <AddMovie add={handleAdd} />
    </div>
  );
}

export default App;
