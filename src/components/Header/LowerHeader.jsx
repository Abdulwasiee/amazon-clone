import React from "react";
import styles from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
function LowerHeader() {
  return (
    <>
      <header className={styles.lowerHeader}>
        <ul className={styles.leftlist}>
          <li>
            <AiOutlineMenu />
          </li>
          <li>All</li>
          <li> Today's Deals</li>
          <li> Customer Service</li>
          <li> Registry</li>
          <li> Gift Cards</li>
          <li> Sell</li>
        </ul>
        <ul className={styles.rightList}>
          <li>Shop top Catagories</li>
        </ul>

        
      </header>
    </>
  );
}

export default LowerHeader;
