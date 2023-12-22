import Link from "next/link";
import styles from "./venue.module.css";
import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          {/* Venue Description */}
          <div className={styles.venueDescription}>
            <div className={styles.venueDescription1}>
              <div className={styles.venueTitle}>VENUE</div>
              <div className={styles.venueTitleDescription}>
                This year our convention is taking place in Halle, close to
                Leipzig which has rich history with Christianity, a major center
                of the Reformation in the 16th century.
              </div>
            </div>

            <div className={styles.venueDescription2}>
              {/* imagenya bakalan rotating image. will be worked on later */}
              <Image
                // width={28}
                // height={28}
                className={styles.imagesContainer}
                alt=""
                src=""
              />

              <p className={styles.venueLocationText1}>
                DJH Jugendherberge Halle
              </p>
              <p className={styles.venueLocationText2}>Große Steinstraße 60,</p>
              <div className={styles.germanyTextWithIconContainer}>
                <p className={styles.venueLocationText2}>
                  06108 Halle (Saale), Germany
                </p>
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

            <div className={styles.venueDescription3}>
              <p className={styles.roomHeader}>Rooms & placement</p>
              <p className={styles.roomDescription}>
                Most rooms fit 2 or 5 people. Rooms are with ensuit bathrooms.
                Families are prioritized to be placed in the same room.
              </p>
            </div>
          </div>

          {/* Venue Transportation */}
          <div className={styles.venueTransportation}>
            <div className={styles.transportationHeader}>How to get there</div>

            <div className={styles.transportationDetailsHeader}>
              Halle (Saale) Hbf (Main train station) to DJH Jugendherberge Halle
            </div>

            {/* Detail 1 */}
            <div className={styles.transportationDetails}>
              <div className={styles.transportationDetailsOptionsContainer}>
                <Image
                  width={40}
                  height={40}
                  className={styles.optionsIcon}
                  alt="Walk"
                  src="/walk.svg"
                />
                <div className={styles.transportationDetailsOptions}>
                  <p className={styles.transportationDetailsOptionsHeader}>
                    On foot
                  </p>
                  <p className={styles.transportationDetailsOptionsText}>
                    The distance is around 1.5 km (Around 20 mins).
                  </p>
                </div>
              </div>

              <div className={styles.transportationDetailsOptionsContainer}>
                <Image
                  width={40}
                  height={40}
                  className={styles.optionsIcon}
                  alt="Tram"
                  src="/tram.svg"
                />
                <div className={styles.transportationDetailsOptions}>
                  <p className={styles.transportationDetailsOptionsHeader}>
                    By tram
                  </p>
                  <p className={styles.transportationDetailsOptionsText}>
                    12 (Trotha), 5 (Berliner Bruckë), 2 (Kröllwitz). Get off at
                    Am Steintor stop. Walk around 6 mins.
                  </p>
                </div>
              </div>

              <div className={styles.transportationDetailsOptionsContainer}>
                <Image
                  width={40}
                  height={40}
                  className={styles.optionsIcon}
                  alt="Bus"
                  src="/bus.svg"
                />
                <div className={styles.transportationDetailsOptions}>
                  <p className={styles.transportationDetailsOptionsHeader}>
                    By bus
                  </p>
                  <p className={styles.transportationDetailsOptionsText}>
                    By bus: 350 (Markt), 301 (Wettin), 345 (Halle-Center). Get
                    off at Am Steintor stop. Walk around 6 mins.
                  </p>
                </div>
              </div>
            </div>

            {/* Detail 2 */}
            {/* this will be a bar that can be clicked exchangibly */}
            <div></div>

            {/* Detail 3 */}
            <div className={styles.otherInformationContainer}>
              <div>
                <p className={styles.otherInformationHeader}>
                  Other useful information
                </p>
              </div>
              <div>
                <p className={styles.otherInformationText}>
                  1. The closest airport is Leipzig/Halle airport (LEJ)
                </p>
                <p className={styles.otherInformationText}>
                  2. The closest destination is at Halle (Saale) Hbf (Main train
                  station)
                </p>
                <p className={styles.otherInformationText}>
                  3. You can use following platforms to check the route: Omio,
                  Rome2Rio, Deutsche Bahn AG, or Google Flights
                </p>
              </div>
            </div>
          </div>

          {/* Link to Schedule Page - Not yet worked on*/}
          <div className={styles.linkContainer}>
            <div>
              <p className={styles.text}>
                Wonder how your days would be like throughout the convention?
              </p>
            </div>

            {/* Change link to schedule Page later */}
            <div className={styles.linkToScheduleContainer}>
              <p className={styles.linkToSchedule}>View schedule</p>

              <Link href="/faqs" style={{ height: "28px" }}>
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
      </div>
    </>
  );
}
