import styles from "./themePage.module.css";
import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.container1}>
          <div>
            <p className={styles.pageHeader}>ASSURANCE OF GRACE</p>
            <p className={styles.smallText}>
              Read an explanation directly from IREC Europe&rsquo;s lead pastor
              as well as one of our speakers on why this theme.
            </p>
          </div>
          <div>
            <p className={styles.text1}>
              In Evangelical theology we are usually taught to bring someone to
              unwavering assurance of salvation once he or she believes. Without
              this assurance, the authenticity of one&rsquo;s faith should be
              doubted.
            </p>
          </div>
        </div>
        <div className={styles.container2}>
          <p className={styles.text2}>
            Is this kind of concept right? <br />
            How do the Reformed tradition and the witness of the Scripture
            actually teach about this assurance of salvation?
          </p>

          <div className={styles.linkToSpeakerContainer}>
            <p className={styles.linkToSpeaker}>
              Hear to what our Speakers say
            </p>

            {/* change link later to redirect to Speaker Page */}
            <a
              href="https://www.jugendherberge.de/en/youth-hostels/halle/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: "28px" }}
            >
              <Image
                width={28}
                height={28}
                className={styles.arrowCircleRightIcon}
                alt="Arrow Circle Right"
                src="/arrowCircleRight.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
