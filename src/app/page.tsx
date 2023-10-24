import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        {/* Header */}
        <div className={styles.header}>
          <Image
            width={204.5}
            height={40}
            className={styles.headerIcon}
            alt="European Reformed Evangelical Convention 2024"
            src="/logo.svg"
          />
          <div className={styles.stamp}>
            <Image
              width={180}
              height={180}
              className={styles.stampFrame}
              alt="Open Registration"
              src="/stamp-frame.svg"
            />
            <Image
              width={180}
              height={180}
              className={styles.stampContent}
              alt="Nov 1"
              src="/stamp-content.svg"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <Image
            width={640}
            height={444}
            alt="Assurance of Grace"
            src="/title.png"
            className={styles.titleImage}
          />
          <div className={styles.info}>
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
          </div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.instagram}>
            <Image
              width={24}
              height={24}
              className={styles.instagramIcon}
              alt="Instagram"
              src="/instagram.svg"
            />
            <a
              href="https://www.instagram.com/irec.europe/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              IREC.EUROPE
            </a>
          </div>

          <div className={styles.youtube}>
            <Image
              width={24}
              height={16}
              className={styles.youtubeIcon}
              alt="Youtube"
              src="/youtube.svg"
            />
            <a
              href="https://www.youtube.com/@irecineurope"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.youtubeLink}
            >
              IREC in Europe
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
