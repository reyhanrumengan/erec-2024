import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.socialMedia}>
          <div>
            <a
              href="https://www.instagram.com/irec.europe/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagram}
            >
              <Image
                width={32}
                height={32}
                className={styles.instagramIcon}
                alt="Instagram"
                src="/instagram.svg"
              />
              <span className={styles.instagramLink}>IREC.EUROPE</span>
            </a>
          </div>

          <div>
            <a
              href="https://www.youtube.com/@irecineurope"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.youtube}
            >
              <Image
                width={32}
                height={22.5}
                className={styles.youtubeIcon}
                alt="Youtube"
                src="/youtube.svg"
              />
              <span className={styles.youtubeLink}>IREC in Europe</span>
            </a>
          </div>
        </div>
        <div>
          <a
            href="https://www.irec-europe.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.learnAboutIRECLink}
          >
            Learn about IREC in Europe
          </a>
        </div>
      </div>
    </>
  );
}
