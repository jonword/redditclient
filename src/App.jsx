import React from "react";
import Navbar from "./components/Navbar/Navbar";
import PostContainer from "./components/Posts/PostContainer";
import BackToTopButton from "./components/Button/BackToTop";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="main-container">
        <PostContainer />
        <BackToTopButton />
      </section>
    </>
  );
}

export default App;
