import React from "react";
import styles from "./Landing.module.css";

import Title from "./sections/Title/Title";
import Services from "./sections/Services/Services";
import Impacts from "./sections/Impacts/Impacts";
import Reviews from "./sections/Reviews/Reviews";

function Landing() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Add navbar content if needed */}
      </header>
      <main className={styles.main}>
        <Title />
        <Services />
        <Impacts />
        <Reviews />
      </main>
      <footer className={styles.footer}>
        {/* Add footer content if needed */}
      </footer>
    </div>
  );
}

export default Landing;
