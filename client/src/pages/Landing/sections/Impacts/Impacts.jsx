import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import styles from "./Impacts.module.css";

function Impacts() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <h2 className={styles.title}>Our Impact</h2>
      <p className={styles.paragraph}>
        At our platform, we believe in the power of technology to transform
        healthcare. Since our launch, we have made significant strides in
        connecting patients with medical professionals and improving the
        efficiency of healthcare services. Here are some of the key counts that
        highlight our impact:
      </p>

      <div className={styles.counts}>
        <div className={styles.countBox}>
          <h3 className={styles.subtitle}>Appointments</h3>
          <p className={styles.count}>
            {isVisible && <CountUp end={12345} duration={3} />}
          </p>
        </div>
        <div className={styles.countBox}>
          <h3 className={styles.subtitle}>Channelling Centers</h3>
          <p className={styles.count}>
            {isVisible && <CountUp end={678} duration={3} />}
          </p>
        </div>
        <div className={styles.countBox}>
          <h3 className={styles.subtitle}>Total Users</h3>
          <p className={styles.count}>
            {isVisible && <CountUp end={90123} duration={3} />}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Impacts;
