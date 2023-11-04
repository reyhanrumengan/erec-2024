import Image from "next/image";
import styles from "../page.module.css";

export default function TitleImage() {
  return (
    <>
      {/* Title & Dandelion Image */}
      <div className={styles.homeContent}>
        <div className={styles.titleContainer}>
          <Image
            width={720}
            height={500}
            alt="Assurance of Grace"
            src="/title.png"
            className={styles.titleImage}
          />
          <div className={styles.buttonContainer}>
            <a
              // href="https://link.grii.eu/EREC2024"
              href="https://forms.gle/5nBNSFBUs6AUr8bz6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              REGISTER
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
