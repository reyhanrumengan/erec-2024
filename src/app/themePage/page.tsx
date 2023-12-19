import MenuSidebar from "../menuSidebar/page";
import Content from "./content";
import styles from "./themePage.module.css";

export default function ThemePage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.mainContainer}>
          <Content />
        </div>

        <MenuSidebar />
      </div>
    </>
  );
}
