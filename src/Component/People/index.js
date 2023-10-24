import { Link } from "react-router-dom";
import axios from "axios";
// import { useState } from "react";
import { useEffect, useState } from "react";
import "./index.scss";
import { useContext } from "react";
import { CounterContext } from "../Context/context";
import { MediaContext } from "../Context/mediaContext.js";
export default function Home() {
  const [trendingItems, setTrendingItems] = useState([]);
  const { trendingPersons } = useContext(MediaContext);

  console.log();
  // console.log(trendingMovies);
  useEffect(() => {
    document.title = "Home";
    getTrendingItems();
  }, []);
  let getTrendingItems = async () => {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/person/day?api_key=c636ed7787cc302d96bf88ccf334e0d8"
    );
    setTrendingItems(data.results);
  };

  return (
    <>
      <div className="row justify-content-center align-items-center gy-5 mt-5">
        {trendingItems.map((ele, indx) => (
          <div key={indx} className="col-lg-3 col-md-4 col-sm-6">
            <Link className="nav-link" to={`/People/${ele.id}`}>
              <div className="film">
                <img
                  src={`https://image.tmdb.org/t/p/original/${ele.profile_path}`}
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
