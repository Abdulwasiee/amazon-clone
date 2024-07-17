import React from "react";
import styles from "./Header.module.css";
import { SiPrime } from "react-icons/si";
import { TiLocationOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import flag from "../../assets/americanFlag.png"

function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <section className={styles.headerSection1}>
          <div className={styles.primeDay}>
            <SiPrime />
          </div>
          <div className={styles.deliverTo}>
            deliver to <TiLocationOutline /> <span>Ethiopia</span>
          </div>
        </section>
        <section className={styles.headerSection2}>
          <div className={styles.select}>
            <select name="" id="">
              <option value="">all</option>
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
            <select name="" id="">
              <option value=""> EN</option>
            </select>
          </div>
          <div className={styles.signIn}>
            <select name="" id="">
              <option value=""> Hello, sgn In Account & Lists</option>
            </select>
          </div>
          <div className={styles.order}>Returns and Order </div>
          <div className={styles.cart}>
            <span className={styles.count}>0</span>
            <PiShoppingCartSimple />
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
