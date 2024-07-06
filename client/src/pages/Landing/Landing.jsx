import React from "react";
import styles from "./Landing.module.css";

import Title from "./sections/Title/Title";

function Landing() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Add navbar content if needed */}
      </header>
      <main className={styles.main}>
        <Title />
      </main>
      <footer className={styles.footer}>
        {/* Add footer content if needed */}
      </footer>
    </div>
  );
}

export default Landing;
