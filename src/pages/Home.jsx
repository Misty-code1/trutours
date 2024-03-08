import React from "react";
import Header from "../components/LandingPage/Header";
import Carousel from "../components/LandingPage/Carousel";
import Overview from "../components/LandingPage/Overview";
import Packages from "../components/LandingPage/Packages";
import Faq from "../components/LandingPage/Faq";
import Footer from "../components/LandingPage/Footer";

const Home = () => {
  return <>
  <Header />
  <Carousel />
  <Overview />
  <Packages />
  <Faq />
  <Footer />
  </>;
};

export default Home;
