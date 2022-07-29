import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ghibliActions } from "../store/ghibliSlice";
import { Link } from "react-router-dom";
const Ghibli = () => {
  const [animes, setAnimes] = useState([]);
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.ghibli.movieList);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://ghibliapi.herokuapp.com/films");
      setAnimes(response.data);
    };
    getData();
  }, []);
  const addWatchlist = (anime) => {
    dispatch(
      ghibliActions.addItem({
        id: anime.id,
        title: anime.title,
        desc: anime.description,
        image: anime.image,
        director: anime.director,
        date: anime.release_date,
      })
    );
  };
  const removeWatchlist = (anime) => {
    dispatch(ghibliActions.removeItem(anime.id));
  };
  const [loaded, setLoaded] = useState(8);
  const showMoreItems = () => {
    setLoaded((prev) => prev + 4);
  };
  return (
    <div className="container">
      <h1>Studio Ghibli Animes</h1>
      <Link to="/watchlist">
        <div className="watch">
          <span>{movieList.length > 0 ? movieList.length : "Watchlist"}</span>
          <i className="watch-icon fa-solid fa-film"></i>
        </div>
      </Link>
      <div className="cards">
        {animes.slice(0, loaded).map((anime, index) => (
          <div className="card" key={anime.id}>
            <input
              type="checkbox"
              id={anime.title}
              className="styled-checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  addWatchlist(anime);
                } else {
                  removeWatchlist(anime);
                }
              }}
            />
            <label htmlFor={anime.title}></label>

            <img src={anime.image} alt="anime" className="anime-img" />
            <h3 className="anime-title">{anime.title}</h3>
            <div className="desc-bg">
              <p className="description">
                <span style={{ fontWeight: "700" }}>Description: </span>
                <br />
                {anime.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="show-more" onClick={() => showMoreItems()}>
        Show More
      </button>
    </div>
  );
};

export default Ghibli;
