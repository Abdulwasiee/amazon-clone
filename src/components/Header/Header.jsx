import React, { useContext } from "react";
import styles from "./Header.module.css";
import { TiLocationOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import flag from "../../assets/americanFlag.png";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { contextProvider } from "../../Data/DataProvider";
import { auth } from "../../Utility/fireBase";

function Header() {
  const { state } = useContext(contextProvider);

  return (
    <section className={styles.fixed}>
      <header className={styles.headerContainer}>
        <section className={styles.headerSection1}>
          <div className={styles.primeDay}>
            <Link to="/">
              <img
                className={styles.logo}
                src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg"
                alt="Amazon Logo"
              />
            </Link>
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
            <select className={styles.all} name="category" id="category">
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
            <select className={styles.english} name="language" id="language">
              <option value="EN">EN</option>
            </select>
          </div>
          <div className={styles.signIn}>
            <Link to={state.user ? "/" : "/signUp"}>
              {state.user ? (
                <>
                  <small>Hello, {state.user.email.split("@")[0]}</small> <br />
                  <span onClick={() => auth.signOut()}>Log Out</span>
                </>
              ) : (
                <>
                  <small>Hello, Sign In</small>
                  <br />
                  <span>Account & Lists</span>
                </>
              )}
            </Link>
          </div>
          <div className={styles.order}>
            <Link to="/orders">
              Returns <br />
              and Orders
            </Link>
          </div>
          <div className={styles.cart}>
            <Link to="/cart">
              <span className={styles.count}>{state.basket.length}</span>
              <PiShoppingCartSimple />
            </Link>
          </div>
        </section>
      </header>
      <LowerHeader />
    </section>
  );
}

export default Header;
