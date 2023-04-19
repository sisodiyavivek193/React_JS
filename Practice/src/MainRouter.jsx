import { createBrowserRouter } from "react-router-dom";
// import Header from "./CommonCompo/Header";
import Header from "./CommonCompo/NewHeader";
import Home from "./Home.jsx";
import Example from "./Example.jsx";
import About from "./About.jsx";
import React, { Suspense } from "react";
// import "./index.css";

const ClassCompoRouter = React.lazy(() => {
  return import("./Component/ClassCompo/ClassCompoRouter");
});


const FunctionCompoRouter = React.lazy(() => {
  return import("./Component/FunctionCompo/FunctionCompoRouter");
});

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
    path: "/example",
    element: (
      <>
        <Header />
        <Example />
      </>
    ),

    children: [
      {
        path: "classcomporouter/*",
        element: (
          <Suspense
            fallback={
              <>
                <div className="loader">
                  <div className="loader--dot"></div>
                  <div className="loader--dot"></div>
                  <div className="loader--dot"></div>
                  <div className="loader--dot"></div>
                  <div className="loader--dot"></div>
                  <div className="loader--dot"></div>
                  <div className="loader--text"></div>
                </div>
              </>
            }
          >
            <ClassCompoRouter />
          </Suspense>
        ),
      },

      {
        path: "Functioncomporouter/*",
        element: <Suspense fallback={<h1>loagin..........</h1>}><FunctionCompoRouter /></Suspense>
      }
    ],



  },
]);

export default MainRouter;
