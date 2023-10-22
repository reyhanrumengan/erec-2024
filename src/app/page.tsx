import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Image
        width={15}
        height={15}
        className={styles.headerIcon}
        alt=""
        src="/logo2.svg"
      />
      {/* <Image
        width={15}
        height={15}
        className={styles.titleIcon}
        alt=""
        src="/title@2x.png"
      /> */}
      <div className={styles.instagram}>
        <Image
          width={15}
          height={15}
          className={styles.instagramIcon}
          alt=""
          src="/instagram.svg"
        />
        <div className={styles.ireceurope}>IREC.EUROPE</div>
      </div>
      <div className={styles.youtube}>
        <div className={styles.irecInEurope}>IREC in Europe</div>
        <Image
          width={15}
          height={15}
          className={styles.youtubeIcon}
          alt=""
          src="/youtube.svg"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.dateText}>Date</div>
        <div className={styles.march29Text}>March 29 – April 1</div>
        <div className={styles.venueText}>Venue</div>
        <div className={styles.location}>
          <p className={styles.text}>DJH Jugendherberge Halle</p>
          <p className={styles.text}>Große, Steinstraße 60,</p>
          <p className={styles.text}>06108 Halle (Saale),</p>
          <p className={styles.text}>Germany</p>
        </div>
        <a
          href="https://www.jugendherberge.de/en/youth-hostels/halle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={15}
            height={15}
            className={styles.arrowCircleRightIcon}
            alt=""
            src="/arrowCircleRight.svg"
          />
        </a>
      </div>
      <div className={styles.contact}>
        <div className={styles.lineAboveContact} />
        <div className={styles.contactHeader}>Contact</div>
        <div className={styles.contactPersonContainer}>
          <p className={styles.text}>
            {`Tiffany `}
            <span className={styles.span}>+49 176 56841250</span>
          </p>
          <p className={styles.text}>
            {`Kenwyn `}
            <span className={styles.span}>+49 176 32626673</span>
          </p>
        </div>
      </div>
      <Image
        width={15}
        height={15}
        className={styles.stampIcon}
        alt=""
        src="/stamp.svg"
      />
    </div>
  );
}
