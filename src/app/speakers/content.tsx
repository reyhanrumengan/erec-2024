"use client";
import Link from "next/link";
import styles from "./speakers.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Content() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [changeContent, setChangeContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

  console.log(showFullContent);

  // if FALSE show contentBilly
  const contentBilly = (
    <p style={{ margin: 0 }}>
      Billy Kristanto (Dr. phil., Dr. theol., Universität Heidelberg) is
      lecturer of systematic theology at International Reformed Evangelical
      Seminary Jakarta and member of theological commission of World Reformed
      Fellowship. For 24 years, he serves as pastor of International Reformed
      Evangelical Church. He is the author of Ajarlah Kami Bertumbuh and Sola
      Dei Gloria. His research interests include topics in soteriology,
      anthropology, spirituality, the theology of J. Calvin, and J. S. Bach. His
      sermons can be found in the youtube channel Sola Dei Gloria.
    </p>
  );

  // if TRUE show contentLeonardo
  const contentLeonardo = (
    <>
      <p style={{ margin: 0 }}>
        Vic. Leonardo Chandra's association with GRII commenced in 2003 during
        his pursuit of a Design Bachelor&rsquo;s Degree at UPH Karawaci. Since
        then, propelled by an ever-growing conviction and divine calling to
        serve as a steward of God, he devoted himself to the youth ministry at
        GRII Karawaci until 2012 when he enrolled at STTRII Jakarta.
        <br />
        <br />
        His academic journey culminated in the attainment of a Master of
        Theology in 2015, paving the way for his role as an assistant pastor.
        From 2015 to 2018, he served diligently at GRII Bintaro, and
        subsequently, from 2018 to 2021, he extended his pastoral
        responsibilities to encompass both GRII Solo and GRII Yogyakarta.
        <br />
        <br />
        Presently, he is immersed in the pursuit of further scholarly heights,
        engaged in doctoral studies at Theologische Universiteit Apeldoorn in
        the Netherlands, steadfastly augmenting his theological knowledge and
        ministerial acumen.
      </p>
    </>
  );

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
          {/* <div className={styles.speakerImageContainer}>
            <Image
              width={400}
              height={533}
              alt=""
              src="/dandelion.png"
              className={styles.speakerImage}
            />
          </div> */}

          <div>
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
            <div>
              <div className={styles.speakerName}>
                {changeContent
                  ? "Vic. Leonardo Chandra"
                  : "Rev. Dr. Billy Kristanto, Ph.D., Th.D."}
              </div>
              <div
                className={
                  showFullContent
                    ? styles.speakerDescriptionFull
                    : styles.speakerDescriptionShort
                }
              >
                {changeContent ? contentLeonardo : contentBilly}
              </div>

              {showFullContent ? (
                <div
                  onClick={handleReadMoreClick}
                  className={styles.readMoreButton}
                >
                  View Less
                </div>
              ) : (
                <div
                  onClick={handleReadMoreClick}
                  className={styles.readMoreButton}
                >
                  READ MORE
                </div>
              )}
            </div>
          </div>

          {/* change link later to redirect to EREC Page */}
          {/* <Link href="/erec" className={styles.linkToSpeakerContainer}>
            <p className={styles.linkToSpeaker}>
              WONDER ABOUT THE EREC?
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
