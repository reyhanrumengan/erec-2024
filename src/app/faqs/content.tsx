import Link from "next/link";
import styles from "./faqs.module.css";
import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className={styles.heroContainer}>
        {/*  */}
        <div className={styles.content}>
          {/* Header */}
          <div>
            <p className={styles.pageHeader}>FAQs</p>
          </div>

          {/* Questions Content*/}
          <div className={styles.buttonContainer}>
            <a
              href="/FAQs_EREC2024.pdf"
              target="_blank"
              className={styles.button}
            >
              Download PDF
            </a>
          </div>

          {/* Link to Contact Page */}
          <div className={styles.linkContainer}>
            <div>
              <p className={styles.text}>
                Can&rsquo;t find answers to your questions?
              </p>
            </div>

            <Link href="/contact" className={styles.linkToContactUsContainer}>
              <p className={styles.linkToContactUs}>CONTACT US</p>
              <Image
                width={28}
                height={28}
                className={styles.arrowCircleRightIcon}
                alt="Arrow Circle Right"
                src="/arrowCircleRight.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
