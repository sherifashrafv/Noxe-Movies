import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./index.scss";
// import { MediaContext } from "../Context/mediaContext.js";
import { useContext } from "react";
import { MediaContext } from "../Context/mediaContext.js";
import "../Loading/index.scss";

export default function Tvshows() {
  const { loading, trendingTv } = useContext(MediaContext);
  useEffect(() => {
    document.title = "TvShows";
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{ height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="transparent"
              strokeWidth="8px"
              strokeDasharray="160"
            />
          </svg>
        </div>
      ) : (
        <div className="row justify-content-center align-items-center gy-5 mt-5">
          <div className=" col-lg-4">
            <div className={`brdr w-25 mb-3`}></div>
            <h3>Trending</h3>
            <h3>Movies</h3>
            <h3>To Watch Now</h3>
            <h6>Most Watched Movies By Day</h6>
            <div className={`brdr w-75 mt-3`}></div>
          </div>
          {trendingTv.map((ele, indx) => (
            <div key={indx} className="col-lg-3 col-m-4 col-sm-6">
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
      )}
    </>
  );
}
