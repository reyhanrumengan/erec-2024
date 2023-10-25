import Image from "next/image";
import styles from "../page.module.css";

function Footer() {
  return (
    <>
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
    </>
  );
}

export default Footer;
