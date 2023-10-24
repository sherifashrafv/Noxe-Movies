import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
export default function Details() {
  const [itemsDetails, setItemDetails] = useState({});
  const params = useParams();
  let getItemsDetails = async () => {
    let { data } = await axios
      .get(
        `https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        setItemDetails(res.data);
      });
  };
  useEffect(() => {
    getItemsDetails();
  }, []);
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="d-flex align-items-end justify-content-end">
              <img
                className="poster_image w-100"
                src={`https://image.tmdb.org/t/p/original/${itemsDetails.poster_path}`}
              />
            </div>
          </div>
          <div className="col-md-7 mt-4">
            <h3>{itemsDetails.title}</h3>

            <p className="text-white">Vote: {itemsDetails.vote_average}</p>
            <p className="text-white">Vote Count: {itemsDetails.vote_count}</p>
            <p className="text-white">popularity: {itemsDetails.popularity}</p>
            <p className="text-white">
              Release Date: {itemsDetails.release_date}
            </p>
            <p className="text-muted mt-4">{itemsDetails.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
