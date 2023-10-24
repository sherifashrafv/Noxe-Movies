import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./home.scss";
// import { useContext } from "react";
// import { MediaContext } from "../Context/mediaContext.js";
import axios from "axios";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [tv, setTvs] = useState([]);
  const getDataMovies = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US"
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const getDataTvs = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US"
      )
      .then((res) => {
        setTvs(res.data.results);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };
  // const { all, loading, trendingMovies } = useContext(MediaContext);
  useEffect(() => {
    document.title = "Home";
    getDataMovies();
    getDataTvs();
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
        <div className="row gy-3 align-items-center gy-5 mt-5">
          <div className="film_caption col-lg-3 col-md-4 col-sm-6">
            <div className={`brdr w-25 mb-3`}></div>
            <h3>Trending</h3>
            <h3>Movies</h3>
            <h3>To Watch Now</h3>
            <h6>Most Watched Movies By Day</h6>
            <div className={`brdr w-75 mt-3`}></div>
          </div>
          {movies.splice(0, 7).map((ele, indx) => (
            <div key={indx} className="col-lg-3 col-md-4 col-sm-6">
              <Link
                className="nav-link"
                to={`/details/${ele.id}/${ele.media_type}`}
              >
                <div className="film d-flex flex-column gap-3 position-relative">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${ele.poster_path}`}
                    className="w-100"
                  />
                  {ele.title}
                  {ele.name}
                  <span className="popularity">
                    {ele.vote_average.toFixed()}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="row gy-3 align-items-center">
        <div className="film_caption col-lg-3 my-3">
          <div className={`brdr w-25 mb-3`}></div>
          <h3>Trending</h3>
          <h3>TVS</h3>
          <h3>To Watch Now</h3>
          <h6>Most Watched Movies By Day</h6>
          <div className={`brdr w-75 mt-3`}></div>
        </div>
        {tv.splice(0, 7).map((ele, indx) => (
          <div key={indx} className="col-lg-3 col-m-4 col-sm-6">
            <Link
              className="nav-link"
              to={`/details/${ele.id}/${ele.media_type}`}
            >
              <div className="film d-flex flex-column gap-3 position-relative">
                <img
                  src={`https://image.tmdb.org/t/p/original/${ele.poster_path}`}
                  className="w-100"
                />
                {ele.title} {ele.name}
                <span className="popularity">{ele.vote_average.toFixed()}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
