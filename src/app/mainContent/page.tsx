import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

function MainContent() {
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

      {/* Location & Info */}
      <div className={styles.info}>
        <div className={styles.date}>
          <p className={styles.textHeader}>DATE</p>
          <p className={styles.dateText}>March 29</p>
          <p className={styles.dateText}>to April 1</p>
          <p className={styles.dateText}>2024</p>
        </div>
        <div className={styles.venue}>
          <p className={styles.textHeader}>VENUE</p>
          <p className={styles.venueText}>DJH Jugendherberge Halle</p>
          <p className={styles.venueText}>Große Steinstraße 60,</p>
          <div className={styles.germanyTextWithIconContainer}>
            <p className={styles.venueText}>06108 Halle (Saale), Germany</p>
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

        {/* Doubled with contact below (very last section of the page) bcs mobile version have different layout :) This will be hidden in mobile  */}
        <div className={styles.contactForDesktop}>
          <p className={styles.textHeader}>CONTACT</p>
          <p className={styles.contactText}>
            {`Tiffany `}
            <span className={styles.span}>+49 176 56841250</span>
          </p>
          <p className={styles.contactText}>
            {`Kenwyn `}
            <span className={styles.span}>+49 176 32626673</span>
          </p>
        </div>
      </div>

      {/* Fee Info */}
      <div className={styles.pricing}>
        <p className={styles.textHeader}>PRICING</p>
      </div>
      <div className={styles.feeInfo}>
        <div className={styles.normalFee}>
          {/*  */}
          <div className={styles.earlyBirdFeeForMobile}>
            <div className={styles.earlyBirdFeeDetails}>
              <p className={styles.earlyBirdText}>ADULT</p>
              <p className={styles.earlyBirdSmallText}>Early Bird</p>
            </div>
            <div className={styles.priceContainer} style={{ color: "#fff" }}>
              <p className={styles.eurText}>EUR</p>
              <p className={styles.priceText}>185</p>
            </div>
          </div>

          <div className={styles.ageContainer}>
            <div className={styles.ageFeeDetails}>
              <p className={styles.ageText}>ADULT</p>
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.eurText}>EUR</p>
              <p className={styles.priceText}>205</p>
            </div>
          </div>

          <div className={styles.ageContainer}>
            <div className={styles.ageFeeDetails}>
              <p className={styles.ageText}>11-17</p>
              <p className={styles.ageSmallText}>YEARS OLD</p>
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.eurText}>EUR</p>
              <p className={styles.priceText}>125</p>
            </div>
          </div>

          <div className={styles.ageContainer}>
            <div className={styles.ageFeeDetails}>
              <p className={styles.ageText}>3-10</p>
              <p className={styles.ageSmallText}>YEARS OLD</p>
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.eurText}>EUR</p>
              <p className={styles.priceText}>100</p>
            </div>
          </div>

          <div className={styles.ageContainer}>
            <div className={styles.ageFeeDetails}>
              <p className={styles.ageText}>0-2</p>
              <p className={styles.ageSmallText}>YEARS OLD</p>
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.eurText}>EUR</p>
              <p className={styles.priceText}>60</p>
            </div>
          </div>
        </div>

        <div className={styles.earlyBirdFeeForDesktop}>
          <div className={styles.earlyBirdFeeDetails}>
            <p className={styles.earlyBirdText}>ADULT</p>
            <p className={styles.earlyBirdSmallText}>Early Bird</p>
          </div>
          <div className={styles.priceContainer} style={{ color: "#fff" }}>
            <p className={styles.eurText}>EUR</p>
            <p className={styles.priceText}>185</p>
          </div>
        </div>

        <div className={styles.feeDescription}>
          <p className={styles.feeDescriptionText}>
            The prices above include accommodation and meals. Towels are
            available for an additional EUR 1.50.
          </p>
          <p className={styles.feeDescriptionText}>
            Financial assistance is available. Please contact the people in
            charge of registration at your local IREC Europe branch or the
            contacts provided in this website if you are not attending any of
            the branches.
          </p>
        </div>
      </div>

      <div className={styles.upcoming}>
        <p className={styles.upcomingText}>
          Watch out this space for upcoming updates.
        </p>
        <p className={styles.upcomingSmallText}>
          Meanwhile, here is a compiled FAQs.
        </p>
        <a
          href="/FAQs_EREC2024.pdf"
          download="FAQs_EREC2024.pdf"
          target="_blank"
          className={styles.button}
        >
          Download PDF
        </a>
      </div>

      {/* Doubled with contact above bcs mobile version have different layout :) This will be shown only in mobile  */}
      <div className={styles.contactForMobile}>
        <p className={styles.textHeader} style={{ marginTop: "20px" }}>
          CONTACT
        </p>
        <p className={styles.contactText}>
          {`Tiffany `}
          <span className={styles.span}>+49 176 56841250</span>
        </p>
        <p className={styles.contactText}>
          {`Kenwyn `}
          <span className={styles.span}>+49 176 32626673</span>
        </p>
      </div>
    </>
  );
}

export default MainContent;
