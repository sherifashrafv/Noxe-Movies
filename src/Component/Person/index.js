import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MediaContext } from "../Context/mediaContext";
import "./index.scss";
export default function Person() {
  const [itemsDetails, setItemDetails] = useState({});
  const params = useParams();
  let getItemsDetails = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/person/${params.id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&language=en-US`
      )
      .then((res) => {
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
                src={`https://image.tmdb.org/t/p/original/${itemsDetails.profile_path}`}
              />
            </div>
          </div>
          <div className="col-md-7 mt-4">
            <h1>{itemsDetails.name}</h1>
            <h3>Also Know</h3>
            <p className="text-white">birthDay : {itemsDetails.birthday}</p>
            <p className="text-white">
              Place Of Brith : {itemsDetails.place_of_birth}
            </p>
            <p className="text-white">popularity: {itemsDetails.popularity}</p>
            <p className="text-white biography">
              Biography: {itemsDetails.biography}
            </p>
            <p className="text-muted mt-4">{itemsDetails.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
