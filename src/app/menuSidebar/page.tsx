import styles from "./menuSidebar.module.css";

function MenuSidebar() {
  return (
    <>
      <div className={styles.menuSidebar}>
        <p className={styles.menuText}>THEME</p>
        <p className={styles.menuText}>SPEAKERS</p>
        <p className={styles.menuText}>EREC</p>
        <p className={styles.menuText}>VENUE</p>
        <p className={styles.menuText}>FEE</p>
        <p className={styles.menuText}>FAQS</p>
        <p className={styles.menuText}>CONTACT</p>
      </div>
    </>
  );
}

export default MenuSidebar;
