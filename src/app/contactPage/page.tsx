import Footer from "../footer/page";
import Header from "../header/page";
import MenuSidebar from "../menuSidebar/page";
import Content from "./content";
import styles from "./contactPage.module.css";

export default function ContactPage() {
  return (
    <>
      <div className={styles.page}>
        <Header />

        <div className={styles.heroPage}>
          <div className={styles.mainContainer}>
            <Content />
          </div>

          {/* <MenuSidebar /> */}
        </div>

        <Footer />
      </div>
    </>
  );
}
