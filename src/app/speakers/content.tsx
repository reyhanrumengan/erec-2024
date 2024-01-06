import Link from "next/link";
import styles from "./speakers.module.css";
import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.container1}>
          <div>
            <p className={styles.pageHeader}>GET TO KNOW OUR SPEAKERS</p>
          </div>
          <div>
            <p className={styles.smallText}>
              While learning a bit of our speakers, let&rsquo;s get to know
              their thoughts on the topic.
            </p>
          </div>
        </div>
        <div className={styles.container2}>
          <div></div>
          <div>
            <p className={styles.text2}>
              Is this kind of concept right? <br />
              How do the Reformed tradition and the witness of the Scripture
              actually teach about this assurance of salvation?
            </p>
          </div>

          {/* change link later to redirect to Speaker Page */}
          {/* <Link href="/speakers" className={styles.linkToSpeakerContainer}>
            <p className={styles.linkToSpeaker}>
              HEAR TO WHAT OUT SPEAKERS SAY
            </p>
            <Image
              width={28}
              height={28}
              className={styles.arrowCircleRightIcon}
              alt="Arrow Circle Right"
              src="/arrowCircleRight.svg"
            />
          </Link> */}
        </div>
      </div>
    </>
  );
}
