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
        <div className={styles.content}>
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
            <div>asdasdsa</div>

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
          <div className={styles.linkContainer}>
            <div>
              <p className={styles.text}>Limited places available.</p>
              <p className={styles.text}>Register today.</p>
            </div>

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
      </div>
    </>
  );
}
