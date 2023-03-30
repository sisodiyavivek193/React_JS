import { createBrowserRouter } from "react-router-dom";
import Header from "./CommonCompo/Header";
import Home from "./Home.jsx";
import Example from "./Example.jsx";
import React, { Suspense } from "react";
  // import "./index.css";

const ClassCompoRouter = React.lazy(() => {
  return import("./Component/ClassCompo/ClassCompoRouter");
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
    ],
  },
]);

export default MainRouter;
