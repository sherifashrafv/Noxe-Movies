import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { MediaContext } from "../Context/mediaContext";
export default function Movies() {
  const { trendingMovies } = useContext(MediaContext);
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="row justify-content-center align-items-center gy-5 mt-5">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className={`brdr w-25 mb-3`}></div>
          <h3>Trending</h3>
          <h3>Movies</h3>
          <h3>To Watch Now</h3>
          <h6>Most Watched Movies By Day</h6>
          <div className={`brdr w-75 mt-3`}></div>
        </div>
        {trendingMovies.map((ele, indx) => (
          <div key={indx} className="col-lg-3 col-md-4 col-sm-6">
            <Link
              className="nav-link"
              to={`/details/${ele.id}/${ele.media_type}`}
            >
              <div className="film">
                <img
                  src={`https://image.tmdb.org/t/p/original/${ele.poster_path}`}
                  className="w-100"
                />
                {ele.title}
                {ele.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
