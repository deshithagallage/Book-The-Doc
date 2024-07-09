import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <a href="#" className={styles.link}>
              Product
            </a>
            <a href="#" className={styles.link}>
              Features
            </a>
            <a href="#" className={styles.link}>
              Updates
            </a>
          </div>
          <div className={styles.col}>
            <a href="#" className={styles.link}>
              Company
            </a>
            <a href="#" className={styles.link}>
              About
            </a>
            <a href="#" className={styles.link}>
              Careers
            </a>
          </div>
          <div className={styles.col}>
            <a href="#" className={styles.link}>
              Support
            </a>
            <a href="#" className={styles.link}>
              Getting Started
            </a>
            <a href="#" className={styles.link}>
              Help Center
            </a>
          </div>
          <div className={styles.col}>
            <a href="#" className={styles.link}>
              Contact
            </a>
            <a href="#" className={styles.link}>
              Contact Us
            </a>
            <a href="#" className={styles.link}>
              Chat Support
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <a href="#" className={styles.email}>
            contact@company.com
          </a>
          <a href="#" className={styles.phone}>
            (414) 687-5892
          </a>
          <address className={styles.address}>
            794 Mcallister St, San Francisco, 94102
          </address>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.text}>
          Copyright © 2022 All Rights Reserved | Terms and Conditions | Privacy
          Policy
        </p>
      </div>
    </footer>
  );
}

export default Footer;
