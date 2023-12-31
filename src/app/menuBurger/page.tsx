"use client";
import Link from "next/link";
import styles from "./menuBurger.module.css";
import { useDisclosure, useClickOutside } from "@mantine/hooks";
import { Menu, Burger } from "@mantine/core";
import { useState } from "react";

export default function MenuBurger() {
  const [burgerOpened, handlers] = useDisclosure();

  const menuRef = useClickOutside(() => {
    // Your condition here
    if (burgerOpened) {
      handleMenuClick();
    }
  });

  console.log(useClickOutside(() => handleMenuClick()));
  const handleMenuClick = () => {
    // setMenuOpened(!menuOpened);

    handlers.toggle();
  };

  return (
    <>
      <Menu
        opened={burgerOpened}
        classNames={{
          dropdown: styles.dropdown,
          item: styles.item,
        }}
      >
        <Menu.Target>
          {/* <Button> */}
          <Burger
            ref={menuRef}
            opened={burgerOpened}
            onClick={() => handlers.toggle()}
            aria-label="Toggle navigation"
          />
          {/* </Button> */}
        </Menu.Target>

        <Menu.Dropdown>
          <div className={styles.dropdownContainer}>
            <Menu.Item>
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
            </Menu.Item>

            <Menu.Item>
              <Link
                className={styles.menuText}
                href="/theme"
                style={{ paddingTop: "0" }}
              >
                THEME
              </Link>
            </Menu.Item>
            {/* <Menu.Item>
              <Link className={styles.menuText} href="/speakers">
                SPEAKERS
              </Link>
            </Menu.Item> */}
            {/* <Menu.Item>
              <Link className={styles.menuText} href="/erec">
                EREC
              </Link>
            </Menu.Item> */}
            <Menu.Item>
              <Link className={styles.menuText} href="/venue">
                VENUE
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link className={styles.menuText} href="/fee">
                FEE
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link className={styles.menuText} href="/faqs">
                FAQS
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                className={styles.menuText}
                href="/contact"
                style={{ paddingBottom: "0" }}
              >
                CONTACT
              </Link>
            </Menu.Item>
          </div>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
