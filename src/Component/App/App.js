import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Offline, Online } from "react-detect-offline";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Details from "../Details/index.jsx";
import Home from "../Home";
import Login from "../Login";
import MasterLayOut from "../MasterLayout";
import People from "../People/index";
import Register from "../Register";
import Tvshows from "../Tvshows";
import Loading from "../Loading/index";
import Movies from "../Movies/index.jsx";
import PeopleDetails from "../Person/index";
function App() {
  const [userData, setUserData] = useState(null);
  let saveUserData = () => {
    let encodedToken = localStorage.getItem("token");
    let decodeToken = jwtDecode(encodedToken);
    setUserData(decodeToken);
  };
  let logout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    return <Navigate to="/login" />;
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  }, []);
  let routes = createHashRouter([
    {
      path: "/",
      element: <MasterLayOut userData={userData} logout={logout} />,
      children: [
        { path: "", element: <Home />, index: true },
        {
          path: "Details/:id/:mediaType",
          element: <Details />,
        },
        {
          path: "Login",
          element: <Login saveUserData={saveUserData} />,
        },
        {
          path: "Register",
          element: <Register saveUserData={saveUserData} />,
        },
        {
          path: "People",
          element: <People />,
        },
        {
          path: "People/:id",
          element: <PeopleDetails />,
        },
        {
          path: "Tvshows",
          element: <Tvshows />,
        },
        {
          path: "movies",
          element: <Movies />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <Online>
        <RouterProvider router={routes} />
      </Online>
      {/* <Offline>
        <Loading />
      </Offline> */}
    </div>
  );
}

export default App;
