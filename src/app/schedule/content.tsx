"use client";
import Link from "next/link";
import styles from "./schedule.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Content() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [changeContent, setChangeContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.container1}>
          <div>
            <p className={styles.pageHeader}>SCHEDULE</p>
          </div>
          <div>
            <p className={styles.smallText}>
              Schedule is still being finalized. A detailed and downloadable
              schedule will be available a few weeks before the event date.
            </p>
          </div>
        </div>

        {/* Schedule Box */}
        <div className={styles.container2}>
          <div></div>

          <div className={styles.arrowIconContainer}>
            <div>
              <Image
                width={28}
                height={28}
                className={styles.arrowCircleLeftIcon}
                alt="Arrow Circle Right"
                src="/arrowCircleRight.svg"
                onClick={() => setChangeContent(!changeContent)}
              />
            </div>

            <div>
              <Image
                width={28}
                height={28}
                className={styles.arrowCircleRightIcon}
                alt="Arrow Circle Right"
                src="/arrowCircleRight.svg"
                onClick={() => setChangeContent(!changeContent)}
              />
            </div>
          </div>
        </div>

        {/* Registration Button */}
        <div className={styles.container3}>
          {/* <Link href="/erec" className={styles.linkToSpeakerContainer}>
            <p className={styles.linkToRegister}>
              Limited places available. Register today.
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
