import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ghibliActions } from "../store/ghibliSlice";

const WatchList = () => {
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state.ghibli.movieList);
  return (
    <div className="watchlist">
      <Link to="/" className="back">
        Back
      </Link>
      <h2>Your Watchlist</h2>
      <div className="w-cards">
        {movieList.map((movie, index) => (
          <div className="w-card" key={index}>
            <button
              className="remove"
              onClick={() => dispatch(ghibliActions.removeItem(movie.id))}
            >
              Remove
            </button>
            <img className="w-anime-img" src={movie.image} alt="" />
            <div className="w-card-content">
              <h3 className="w-anime-title">
                {movie.title} <span className="date">- {movie.date}</span>
              </h3>
              <div className="w-director">by {movie.director}</div>
              <div className="w-desc-bg">
                <p className="description">{movie.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
