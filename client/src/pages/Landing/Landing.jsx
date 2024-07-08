import React from "react";
import styles from "./Landing.module.css";

import Title from "./sections/Title/Title";
import Services from "./sections/Services/Services";
import Impacts from "./sections/Impacts/Impacts";
import Reviews from "./sections/Reviews/Reviews";
import Register from "./sections/Register/Register";
import Navbar from "../../components/Navbar/Navbar";

function Landing() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Title />
        <Services />
        <Impacts />
        <Reviews />
        <Register />
      </main>
      <footer className={styles.footer}>
        {/* Add footer content if needed */}
      </footer>
    </div>
  );
}

export default Landing;
