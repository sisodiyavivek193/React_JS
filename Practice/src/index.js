import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./CommonCompo/Header";
import MainRouter from "./MainRouter.jsx";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <RouterProvider router={MainRouter} />
    {/* <Header></Header> */}
  </>
);