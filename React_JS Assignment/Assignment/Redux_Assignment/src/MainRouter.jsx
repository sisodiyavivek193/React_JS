import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Header from "./CommonCompo/Header";
import Header from "./Include/HeaderComponent.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import LoginPage from "./Component/LoginPage.jsx";
import ApiFatch from "./Component/ApiFatch.jsx";
import { Suspense } from "react";
// import "./index.css";

const AdminUser = React.lazy(() => import("./Admin/AdminRouter.jsx"))

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
        <LoginPage />
      </>
    ),
  },
  {
    path: "/apifatch",
    element: (
      <>
        <Header />
        <ApiFatch />
      </>
    ),
  }, {
    path: "/admindashbord",
    element: (
      <>
        admin panal
      </>
    ),
  }, {
    path: "/userside",
    element: (
      <>
        user side
      </>
    ),
  },
  {
    path: "admin/*",
    element: (
      <Suspense fallback={<h3>Loading.......</h3>}>
        <AdminUser />
      </Suspense>
    ),
  }

]);

export default MainRouter;
