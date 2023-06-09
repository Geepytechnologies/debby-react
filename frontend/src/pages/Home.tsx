import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Videos from "../components/Videos";
import Books from "../components/Books";
import Podcast from "../components/Podcast";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Videos />
        {/* <Features /> */}
        <section id="portfolio">
          <Portfolio />
        </section>
        <Books />
        <Podcast />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
