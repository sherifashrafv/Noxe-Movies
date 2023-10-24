import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
export default function Login({ saveUserData }) {
  const [user, setUser] = useState({
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
        "https://sticky-note-fe.vercel.app/signin",
        user
      );
      if (data.message == "success") {
        localStorage.setItem("token", data.token);
        goToHome();
        saveUserData();
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
        <h2>Login Form</h2>
        <form onSubmit={submitFormData}>
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
