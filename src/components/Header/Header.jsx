import React from "react";
import styles from "./Header.module.css";
import { SiPrime } from "react-icons/si";
import { TiLocationOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import flag from "../../assets/americanFlag.png";
import logo from "../../assets/Amazon_logo.svg";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <section className={styles.headerSection1}>
          <div className={styles.primeDay}>
            <img className={styles.logo} src={logo} alt="Amazon Logo" />
          </div>
          <div className={styles.deliverTo}>
            <TiLocationOutline />
            <div className={styles.deliverToEthio}>
              deliver to <span className={styles.Ethiopia}>Ethiopia</span>
            </div>
          </div>
        </section>
        <section className={styles.headerSection2}>
          <div className={styles.select}>
            <select className={styles.all} name="" id="">
              <option value="">All</option>
            </select>
          </div>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search Amazon" />
          </div>
          <div className={styles.searchIcon}>
            <CiSearch />
          </div>
        </section>
        <section className={styles.headerSection3}>
          <div className={styles.language}>
            <span className={styles.flag}>
              <img src={flag} alt="country flag" />
            </span>
            <select className={styles.english} name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          <div className={styles.signIn}>
            <a href="">
              {" "}
              Hello, Sign In <br />
              Account & Lists
            </a>
          </div>
          <div className={styles.order}>
            <a href="">
              Returns <br />
              and Orders
            </a>
          </div>
          <div className={styles.cart}>
            <a href="">
              <span className={styles.count}>0</span>
              <PiShoppingCartSimple />
            </a>
          </div>
        </section>
      </header>
      <LowerHeader />
    </>
  );
}

export default Header;
