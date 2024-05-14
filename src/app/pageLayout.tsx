import Footer from "./footer/page";
import Header from "./header/page";
import React from "react";
import styles from "./pageLayout.module.css";
import MenuSidebar from "./menuSidebar/page";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <div className={styles.heroPage}>
          <div className={styles.mainContainer}>{children}</div>

          <MenuSidebar />
        </div>

        <Footer />
      </div>
    </>
  );
}
