import React from "react";
import Slider from "react-slick";
import styles from "./Reviews.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "John Doe",
    text: "This platform has transformed my practice. Scheduling and managing appointments is now a breeze. Real-time updates keep everyone informed, reducing no-shows and improving patient satisfaction.",
  },
  {
    name: "Jane Smith",
    text: "Finding and scheduling appointments with doctors is so easy. Real-time updates are a game changer, and the recommendation algorithm helped me find the perfect specialist.",
  },
  {
    name: "Sam Wilson",
    text: "As a doctor, this platform streamlines patient management. It's intuitive and efficient, allowing me to focus more on patient care. Real-time queue updates and wait time predictions are invaluable.",
  },
  {
    name: "Emily Johnson",
    text: "The recommendation algorithm helped me find the perfect doctor. Booking was seamless, and real-time updates kept me informed. This platform makes accessing quality healthcare stress-free.",
  },
  {
    name: "Michael Brown",
    text: "Wait time predictions are incredibly accurate. This feature alone has saved me so much time. The platform's efficiency and ease of use have greatly improved my healthcare experience.",
  },
];

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Reviews</h2>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewBox}>
              <p className={styles.text}>"{review.text}"</p>
              <p className={styles.name}>- {review.name} -</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;
