import React from "react";
import styles from "./Landing.module.css";

import Title from "./sections/Title/Title";
import Services from "./sections/Services/Services";
import Impacts from "./sections/Impacts/Impacts";
import Reviews from "./sections/Reviews/Reviews";
import Register from "./sections/Register/Register";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Landing() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div></div>
        <Title />
        <Services />
        <Impacts />
        <Reviews />
        <Register />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
