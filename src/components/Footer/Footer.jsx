import React from "react";
import styles from "./Footer.module.css"; 

const Footer = () => {
  return (
    <footer className={styles.amazonFooter}>
      <div className={styles.footerTop}>
        <a href="#top" className={styles.backToTop}>
          Back to top
        </a>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerColumn}>
          <h4>Get to Know Us</h4>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Make Money with Us</h4>
          <ul>
            <li>
              <a href="#">Sell on Amazon</a>
            </li>
            <li>
              <a href="#">Amazon Accelerator</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Amazon Hub</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>
              <a href="#">Amazon Rewards Visa</a>
            </li>
            <li>
              <a href="#">Amazon Store Card</a>
            </li>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Let Us Help You</h4>
          <ul>
            <li>
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Amazon Clone | Privacy | Terms of Use</p>
      </div>
    </footer>
  );
};

export default Footer;
