import React from "react";
import CarouselBannerOpen from "../../Components/Dashboard/CarouselBannerOpen";
import FooterOpen from "../../Components/Dashboard/FooterOpen";
import HowItWorks from "../../Components/Dashboard/HowItWorks";
import LastOpen from "../../Components/Dashboard/LastOpen";
import SubscriptionBenefits from "../../Components/Dashboard/SubscriptionBenefits";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Dashboard.module.css";

import FeaturedOn from "../../Components/Dashboard/FeaturedOn";
function Open() {
  return (
    <div className={styles.Dashboard}>
      <Navbar />
      <CarouselBannerOpen />
      <SubscriptionBenefits />
      <HowItWorks />
      <FeaturedOn />
      <FooterOpen />
      <LastOpen />
    </div>
  );
}

export default Open;
