import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CarouselBanner from "../../Components/Dashboard/CarouselBanner";
import Footer from "../../Components/Dashboard/Footer";
import Last from "../../Components/Dashboard/Last";
import Process from "../../Components/Dashboard/Process";
import Testimonials from "../../Components/Dashboard/Testimonials";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Dashboard.module.css";
import FeaturedOn from "../../Components/Dashboard/FeaturedOn";

function Dashboard() {
  return (
    <div className={styles.Dashboard}>
    
      <Navbar />
      <CarouselBanner />
      <Testimonials />
      <Process />
      <FeaturedOn />
      <Footer />
      <Last />
    </div>
  );
}

export default Dashboard;
