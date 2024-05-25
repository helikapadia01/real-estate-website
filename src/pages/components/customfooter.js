import styles from "@/styles/comps/footer.module.scss";
import logo from "../../../public/assets/png/logo.png";
import Image from "next/image";

const Customfooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <h1 className={styles.ftTitle}>Contact us now</h1>
          <h2 className={styles.desc}>Make your dream home come true now</h2>
          <div className={styles.btnRow}>
            <button className={styles.outlineBtn}>More About Us</button>
            <button className={styles.fillBtn}>Contact Us</button>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.row}>
          <Image src={logo} width={200} height={200} alt='' />
          <div className={styles.grid}>
            <li className={styles.linkGridItem}>Category</li>
            <li className={styles.linkGridItem}>About us</li>
            <li className={styles.linkGridItem}>Service</li>
            <li className={styles.linkGridItem}>Blog</li>
            <li className={styles.linkGridItem}>Contact us</li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Customfooter;
