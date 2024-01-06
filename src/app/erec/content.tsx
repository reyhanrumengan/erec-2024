"use client";
import Link from "next/link";
import styles from "./erec.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Content() {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

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
          {/* Container for Image/Tap to open video */}
          <div className={styles.speakerImageContainer}>
            <Image
              width={400}
              height={533}
              alt=""
              src="/dandelion.png"
              className={styles.speakerImage}
            />
          </div>

          <div>
            <div className={styles.arrowIconContainer}>
              <div>
                <Image
                  width={28}
                  height={28}
                  className={styles.arrowCircleLeftIcon}
                  alt="Arrow Circle Right"
                  src="/arrowCircleRight.svg"
                />
              </div>

              <div>
                <Image
                  width={28}
                  height={28}
                  className={styles.arrowCircleRightIcon}
                  alt="Arrow Circle Right"
                  src="/arrowCircleRight.svg"
                />
              </div>
            </div>
            <div>
              <div className={styles.speakerName}>
                Rev. Dr. Billy Kristanto, Ph.D., Th.D.
              </div>
              <div
                className={`${styles.speakerDescription} ${
                  showFullContent ? styles.full : ""
                }`}
              >
                Billy Kristanto (Dr. phil., Dr. theol., Universität Heidelberg)
                is lecturer of systematic theology at International Reformed
                Evangelical Seminary Jakarta and member of theological
                commission of World Reformed Fellowship. For 24 years, he serves
                as pastor of International Reformed Evangelical Church. He is
                the author of Ajarlah Kami Bertumbuh and Sola Dei Gloria. His
                research interests include topics in soteriology, anthropology,
                spirituality, the theology of J. Calvin, and J. S. Bach. His
                sermons can be found in the youtube channel Sola Dei Gloria.
              </div>

              {showFullContent || (
                <div
                  onClick={handleReadMoreClick}
                  className={styles.readMoreButton}
                  style={{ cursor: "pointer" }}
                >
                  READ MORE
                </div>
              )}
            </div>
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
