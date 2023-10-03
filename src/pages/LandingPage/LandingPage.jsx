//rafce
import React from "react";
import styles from "./landingPage.module.css";
import "./globalStyle.css";
import Header from "../../components/Header/Header";
import banner1 from "/icon/LP-banner1.svg";
import banner2 from "/icon/LP-banner2.svg";
import BannerBemVindo from "../../components/BannerBemVindo/BannerBemVindo";
import BannerDesafio from "../../components/BannerDesafio/BannerDesafio";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <BannerBemVindo />
      <BannerDesafio />
    </div>
  );
};

export default LandingPage;
