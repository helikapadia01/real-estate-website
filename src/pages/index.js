/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import styles from "@/styles/pages/homePage.module.scss";
import SmoothScrollbar from "./components/SmoothScrollbar";
import { ScrollControlProvider } from "../../context/ScrollControlContext";
import Image from "next/image";
import imageOne from "../../public/assets/png/imageOne.jpg";
import imageTwo from "../../public/assets/png/imageTwo.jpg";
import imageThree from "../../public/assets/png/imageThree.jpg";
import imageFour from "../../public/assets/png/imageFour.jpg";
import imageFive from "../../public/assets/png/imageFive.jpg";
import imageSix from "../../public/assets/png/imageSix.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
import TestimonialSlider from "./components/TestimonialSlider";
import Customfooter from "./components/customfooter";
import CustomNavbar from "./components/customNavbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const innerContainerRef = useRef(null);
  const innerRightRef = useRef(null);
  const innerLeftRef = useRef(null);
  const experienceRef = useRef(null);
  const featuresRef = useRef(null);
  const recommendationRef = useRef(null);
  const titleRowRef = useRef(null);
  const cardItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: innerContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(innerRightRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          innerLeftRef.current,
          {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          experienceRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
          },
          "+=0.5"
        )
        .from(
          featuresRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
          },
          "+=0.5"
        )
        .from(titleRowRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: recommendationRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
        .from(
          cardItemsRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: recommendationRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
          "-=0.5"
        );
    }, innerContainerRef);

    return () => ctx.revert(); // Clean up the GSAP context on unmount
  }, []);

  return (
    <>
      <Head>
      <title>
          Discover Luxury Living in Dubai with Altair Real Estate - Your Gateway
          to Exceptional Properties
        </title>
        <meta
          name='description'
          content='Welcome to Altair Real Estate, where your dream of owning the perfect property in Dubai turns into reality. Specializing in both off-plan and secondary real estate, we bring to you an exquisite selection of properties that redefine luxury and comfort.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        />
      </Head>

      <ScrollControlProvider>
        <SmoothScrollbar>
          <CustomNavbar />
          <div className={styles.innerContainer} ref={innerContainerRef}>
            <div className={styles.innerRight} ref={innerRightRef}>
              <p>&#45; let&#39;s be together</p>
              <h1>Get your dream modern house</h1>
              <h2>
                Find a modern house according to your wishes and feel the
                comfort of a home that is so comfortable
              </h2>
              <button>Get Started</button>
            </div>
            <div className={styles.innerLeft} ref={innerLeftRef}>
              <Image
                src={imageOne}
                width={300}
                height={500}
                quality={100}
                alt=''
              />
            </div>
          </div>
          <div className={styles.experience} ref={experienceRef}>
            <div className={styles.content}>
              <div className={styles.left}>
                <h1>Find the best house with our experienced</h1>
              </div>
              <div className={styles.right}>
                <div className={styles.grid}>
                  <div className={styles.gridItem}>
                    <h1 className={styles.count}>10+</h1>
                    <p>Years of experience</p>
                  </div>
                  <div className={styles.gridItem}>
                    <h1 className={styles.count}>230+</h1>
                    <p>Property build</p>
                  </div>
                  <div className={styles.gridItem}>
                    <h1 className={styles.count}>750+</h1>
                    <p>Customer Happy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section class={styles.features} ref={featuresRef}>
            <div className={styles.content}>
              <div className={styles.leftContent}>
                <Image width={600} height={400} src={imageOne} alt='' />
              </div>
              <div className={styles.rightContent}>
                <p>&#45; let&#39;s be together</p>
                <h1>Complete with futuristic and luxurious interiors</h1>
                <h2>
                  Find a modern house according to your wishes and feel the
                  comfort of a home that is so comfortable
                </h2>
                <div className={styles.buttonGrid}>
                  <div className={styles.buttons}>
                    <div className={styles.buttonTitle}>Family room</div>
                    <span
                      class='material-symbols-outlined'
                      className={styles.icons}
                    >
                      arrow_outward
                    </span>
                  </div>
                  <div className={styles.buttons}>
                    <div className={styles.buttonTitle}>Bedroom</div>
                    <span
                      class='material-symbols-outlined'
                      className={styles.icons}
                    >
                      arrow_outward
                    </span>
                  </div>
                  <div className={styles.buttons}>
                    <div className={styles.buttonTitle}>Bathroom</div>
                    <span
                      class='material-symbols-outlined'
                      className={styles.icons}
                    >
                      arrow_outward
                    </span>
                  </div>
                  <div className={styles.buttons}>
                    <div className={styles.buttonTitle}>Kitchen</div>
                    <span
                      class='material-symbols-outlined'
                      className={styles.icons}
                    >
                      arrow_outward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.recommendation} >
            <div className={styles.recomContent}>
              <div className={styles.titleRow}>
                <h1 className={styles.title}>Recomended house for you</h1>
                <button className={styles.seeMoreBtn}>
                  <h1 className={styles.btnTitle}>See More</h1>
                  <span class='material-symbols-outlined'>trending_flat</span>
                </button>
              </div>
              <div className={styles.recomGrid}>
                <div className={styles.cardItem}>
                  <Image src={imageThree} alt='' />
                  <div className={styles.cardContent}>
                    <div className={styles.contentRow}>
                      <h1 className={styles.titleCotent}>
                        Letter L simple house
                      </h1>
                      <p className={styles.pricing}>$25.200</p>
                    </div>
                    <div className={styles.location}>
                      <span class='material-symbols-outlined'>location_on</span>
                      <h1 className={styles.locationTitle}>Al Barsha, Dubai</h1>
                    </div>
                  </div>
                </div>
                <div className={styles.cardItem}>
                  <Image src={imageFour} alt='' />
                  <div className={styles.cardContent}>
                    <div className={styles.contentRow}>
                      <h1 className={styles.titleCotent}>
                        Letter L simple house
                      </h1>
                      <p className={styles.pricing}>$25.200</p>
                    </div>
                    <div className={styles.location}>
                      <span class='material-symbols-outlined'>location_on</span>
                      <h1 className={styles.locationTitle}>Al Barsha, Dubai</h1>
                    </div>
                  </div>
                </div>
                <div className={styles.cardItem}>
                  <Image src={imageFive} alt='' />
                  <div className={styles.cardContent}>
                    <div className={styles.contentRow}>
                      <h1 className={styles.titleCotent}>
                        Letter L simple house
                      </h1>
                      <p className={styles.pricing}>$25.200</p>
                    </div>
                    <div className={styles.location}>
                      <span class='material-symbols-outlined'>location_on</span>
                      <h1 className={styles.locationTitle}>Al Barsha, Dubai</h1>
                    </div>
                  </div>
                </div>
                <div className={styles.cardItem}>
                  <Image src={imageSix} alt='' />
                  <div className={styles.cardContent}>
                    <div className={styles.contentRow}>
                      <h1 className={styles.titleCotent}>
                        Letter L simple house
                      </h1>
                      <p className={styles.pricing}>$25.200</p>
                    </div>
                    <div className={styles.location}>
                      <span class='material-symbols-outlined'>location_on</span>
                      <h1 className={styles.locationTitle}>Al Barsha, Dubai</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <TestimonialSlider />
          <Customfooter />
        </SmoothScrollbar>
      </ScrollControlProvider>
    </>
  );
}