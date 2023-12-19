import styles from "./page.module.css";
import Header from "./header/page";
import Footer from "./footer/page";
import HomePage from "./homePage/page";
import ThemePage from "./themePage/page";

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <Header />
        {/* <HomePage /> */}
        <ThemePage />
        <Footer />
      </main>
    </>
  );
}
