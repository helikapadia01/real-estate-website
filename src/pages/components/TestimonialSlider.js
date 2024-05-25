import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/comps/TestiMonalSlider.module.scss";
import gsap from "gsap/dist/gsap";

const testimonials = [
  {
    name: "Roni Armada",
    designation: "Customer",
    feedback:
      "Very high quality building, and the facilities inside are also very futuristic. The price is also very cheap and affordable.",
  },
  {
    name: "Jane Doe",
    designation: "Client",
    feedback:
      "Exceptional service and stunning designs. Highly recommend their expertise.",
  },
  {
    name: "John Smith",
    designation: "Buyer",
    feedback:
      "Responsive and professional. A great experience from start to finish.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    if (testimonialRef.current && detailsRef.current) {
      tl.to([testimonialRef.current, detailsRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "power1.out",
      })
        .set([testimonialRef.current, detailsRef.current], { y: 20 })
        .to([testimonialRef.current, detailsRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.in",
        });
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { name, designation, feedback } = testimonials[currentIndex];

  return (
    <section className={styles.feedBack}>
      <div className={styles.feeContent}>
        <div className={styles.feeRow}>
          <h1 className={styles.feeTitle}>Our customer said</h1>
          <div className={styles.buttonRow}>
            <span className='material-symbols-outlined' onClick={handlePrev}>
              arrow_back
            </span>
            <span className='material-symbols-outlined' onClick={handleNext}>
              arrow_forward
            </span>
          </div>
        </div>
        <div className={styles.customFeedBack}>
          <div className={styles.left} ref={detailsRef}>
            <h1 className={styles.customName}>{name}</h1>
            <h2 className={styles.customerDesignation}>{designation}</h2>
          </div>
          <div className={styles.right} ref={testimonialRef}>
            “{feedback}”
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
