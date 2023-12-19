import Link from "next/link";
import styles from "./menuSidebar.module.css";

function MenuSidebar() {
  return (
    <>
      <div className={styles.menuSidebar}>
        <Link className={styles.menuText} href="/themePage">
          THEME
        </Link>
        <p className={styles.menuText}>SPEAKERS</p>
        <p className={styles.menuText}>EREC</p>
        <p className={styles.menuText}>VENUE</p>
        <Link className={styles.menuText} href="/pricingPage">
          FEE
        </Link>
        <p className={styles.menuText}>FAQS</p>
        <p className={styles.menuText}>CONTACT</p>
      </div>
    </>
  );
}

export default MenuSidebar;
