import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        }
      >
        <Home />
      </Suspense>

      <Suspense fallback={null}>
        <About />
      </Suspense>
    </>
  );
}

export default App;
