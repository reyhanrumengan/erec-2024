import styles from "./page.module.css";
import Header from "./header/page";
import Footer from "./footer/page";
import MainContent from "./mainContent/page";

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <Header />
        <MainContent />
        <Footer />
      </main>
    </>
  );
}
