import Link from "next/link";
import styles from "./menuSidebar.module.css";

export default function MenuSidebar() {
  return (
    <>
      <nav className={styles.menuSidebar}>
        <Link className={styles.menuText} href="/theme">
          THEME
        </Link>
        <p className={styles.menuText}>SPEAKERS</p>
        <p className={styles.menuText}>EREC</p>
        <Link className={styles.menuText} href="/venue">
          VENUE
        </Link>
        <Link className={styles.menuText} href="/fee">
          FEE
        </Link>
        <Link className={styles.menuText} href="/faqs">
          FAQS
        </Link>
        <Link className={styles.menuText} href="/contact">
          CONTACT
        </Link>
      </nav>
    </>
  );
}
