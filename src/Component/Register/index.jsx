import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
export default function Register({ saveUserData }) {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const [errorMessage, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  let submitFormData = async (e) => {
    e.preventDefault();
    let validationResponse = validateFormData();
    if (validationResponse.error) {
      setErrorList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        "https://sticky-note-fe.vercel.app/signup",
        user
      );
      if (data.message == "success") {
        localStorage.setItem("token", data.token);
        saveUserData();
        goToHome();
      } else {
        setError(data.message);
      }
    }
  };
  let goToHome = () => {
    navigate("/");
  };
  let getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  let validateFormData = () => {
    const schema = Joi.object({
      first_name: Joi.string().alphanum().required().min(2).max(10),
      last_name: Joi.string().alphanum().required().min(2).max(10),
      age: Joi.number().required().min(20).max(80),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  };
  return (
    <>
      <div className="w-75 m-auto py-5">
        {errorList.map((error, index) => (
          <h1 key={index} className="alert alert-danger">
            {error.message}
          </h1>
        ))}
        <h2>Registeration Form</h2>
        <form onSubmit={submitFormData}>
          <div className="input-data my-4">
            <label htmlFor="first_name">First Name</label>
            <input
              onChange={getInputValue}
              type="text"
              className="form-control"
              name="first_name"
            ></input>
          </div>
          <div className="input-data my-4">
            <label htmlFor="last_name">Last Name</label>
            <input
              onChange={getInputValue}
              type="text"
              className="form-control"
              name="last_name"
            ></input>
          </div>
          <div className="input-data my-4">
            <label htmlFor="age">age</label>
            <input
              onChange={getInputValue}
              type="number"
              className="form-control"
              name="age"
            ></input>
          </div>
          <div className="input-data my-4">
            <label htmlFor="email">Email</label>
            <input
              onChange={getInputValue}
              type="text"
              className="form-control"
              name="email"
            ></input>
          </div>
          <div className="input-data my-4">
            <label htmlFor="password">Password</label>
            <input
              onChange={getInputValue}
              type="password"
              className="form-control"
              name="password"
            ></input>
          </div>
          <button className="btn btn-info my-3 float-end">Register</button>
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  );
}
