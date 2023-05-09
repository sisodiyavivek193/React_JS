import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Header from "./CommonCompo/Header";
import Header from "./Include/HeaderComponent.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import LoginPage from "./Component/LoginPage.jsx";
// import "./index.css";



const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
      </>
    ),
  },
  {
    path: "/loginpage",
    element: (
      <>
        <Header />
        <LoginPage />
      </>
    ),
  },

]);

export default MainRouter;