import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { SubredditContainer } from "./components/Subreddit/SubredditContainer";
import { PostContainer } from "./components/Posts/PostContainer";
import BackToTopButton from "./components/Button/BackToTop";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="main-container">
        <SubredditContainer />
        <PostContainer />

        <BackToTopButton />
      </section>
    </>
  );
}

export default App;
