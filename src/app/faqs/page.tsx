import Footer from "../footer/page";
import Header from "../header/page";
import MenuSidebar from "../menuSidebar/page";
import Content from "./content";
import styles from "./faqs.module.css";

export default function FAQs() {
  return (
    <>
      <Header />

      <div className={styles.page}>
        <div className={styles.mainContainer}>
          <Content />
        </div>

        <MenuSidebar />
      </div>

      <Footer />
    </>
  );
}