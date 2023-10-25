import Image from "next/image";
import styles from "../page.module.css";

function MainContent() {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.titleContainer}>
          <Image
            width={720}
            height={500}
            alt="Assurance of Grace"
            src="/title.png"
            className={styles.titleImage}
          />
          <div className={styles.registerButtonContainer}>
            <a
              href="https://www.jugendherberge.de/en/youth-hostels/halle/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.registerButton}
            >
              REGISTER
            </a>
          </div>
        </div>
        {/* <div className={styles.info}>
          <div className={styles.date}>
            <p className={styles.textHeader}>DATE</p>
            <p className={styles.text}>March 29 - April 1</p>
          </div>
          <div className={styles.venue}>
            <p className={styles.textHeader}>VENUE</p>
            <p className={styles.text}>DJH Jugendherberge Halle</p>
            <p className={styles.text}>Große Steinstraße 60,</p>
            <p className={styles.text}>06108 Halle (Saale),</p>
            <div className={styles.germanyTextWithIconContainer}>
              <p className={styles.text}>Germany</p>
              <a
                href="https://www.jugendherberge.de/en/youth-hostels/halle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={32}
                  height={32}
                  className={styles.arrowCircleRightIcon}
                  alt="Arrow Circle Right"
                  src="/arrowCircleRight.svg"
                />
              </a>
            </div>
          </div>
          <div className={styles.contact}>
            <p className={styles.textHeader} style={{ marginTop: "20px" }}>
              CONTACT
            </p>
            <p className={styles.contactText}>
              {`Tiffany `}
              <span className={styles.span}>+49 176 56841250</span>
            </p>
            <p className={styles.contactText}>
              {`Kenwyn `}
              <span className={styles.span}>+49 176 32626673</span>
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default MainContent;
