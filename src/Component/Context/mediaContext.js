import axios from "axios";

import { createContext, useEffect, useState } from "react";

export let MediaContext = createContext(null);

export default function MediaContextProvider(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTvs] = useState([]);
  const [trendingPersons, setPersons] = useState([]);
  const [all, setAll] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getTrendingItems("movie", setTrendingMovies);
    getTrendingItems("tv", setTrendingTvs);
    getTrendingItems("person", setPersons);
    getTrendingItems("all", setAll);
  }, []);
  let getTrendingItems = async (mediaType, callback) => {
    let { data } = await axios
      .get(
        `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`
        // `https://api.themoviedb.org/3/trending/${}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`
      )
      .finally(() => {
        setloading(false);
      });
    callback(data.results);
  };

  return (
    <MediaContext.Provider
      value={{ trendingMovies, trendingTv, trendingPersons, loading, all }}
    >
      {props.children}
    </MediaContext.Provider>
  );
}
