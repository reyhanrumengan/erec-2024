import Image from "next/image";
import styles from "../page.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <Image
          width={204.5}
          height={40}
          className={styles.headerIcon}
          alt="European Reformed Evangelical Convention 2024"
          src="/logo.svg"
        />
        {/* <div className={styles.stamp}>
          <Image
            width={180}
            height={180}
            className={styles.stampFrame}
            alt="Open Registration"
            src="/stamp-frame.svg"
          />
          <Image
            width={180}
            height={180}
            className={styles.stampContent}
            alt="Nov 1"
            src="/stamp-content.svg"
          />
        </div> */}
      </div>
    </>
  );
}

export default Header;
