import React, { useState } from "react";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    console.log("Subscribed to newsletter!");
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div>
            <img src={logo1} alt="HealthyMe Logo" className={styles.logoImg1} />
            <img src={logo2} alt="HealthyMe Logo" className={styles.logoImg2} />
          </div>
          <p className={styles.quote}>
            One Step Solution for all your medical needs
          </p>
          <div className={styles.socialMedia}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className={styles.socialIcon} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className={styles.socialIcon} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <h3 className={styles.subscribeTitle}>Subscribe to Our Newsletter</h3>
          <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={styles.subscribeInput}
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>
        <div className={styles.col}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <a href="mailto:teamnovacoders@gmail.com" className={styles.email}>
              info@bookthedoc.com
            </a>
          </div>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <a href="tel:4146875892" className={styles.phone}>
              0114-687-5892
            </a>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <address className={styles.address}>
              No.123, Molpe Rd, Katubedda, Moratuwa
            </address>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.text}>
          Copyright © BookTheDoc 2024 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
