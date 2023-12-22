import Link from "next/link";
import styles from "./menuSidebar.module.css";

export default function MenuSidebar() {
  return (
    <>
      <div className={styles.menuSidebar}>
        <Link className={styles.menuText} href="/theme">
          THEME
        </Link>
        <p className={styles.menuText}>SPEAKERS</p>
        <p className={styles.menuText}>EREC</p>
        <p className={styles.menuText}>VENUE</p>
        <Link className={styles.menuText} href="/fee">
          FEE
        </Link>
        <Link className={styles.menuText} href="/faqs">
          FAQS
        </Link>
        <Link className={styles.menuText} href="/contact">
          CONTACT
        </Link>
      </div>
    </>
  );
}
