import React from 'react';
import styles from './Footers.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footers() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src="/logo-large.png"
          alt="Thai Chin logo"
          width={250}
          height={250}
        ></Image>
      </div>
      <div className={styles.primaryNav}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/">Menu</Link>
          <Link href="/">About</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </nav>
      </div>
      <div className={styles.secondaryNav}>
        <nav className={styles.nav}>
          <Link href="/">Cart</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Terms of Service</Link>
        </nav>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactInfo}>
          <p>34 Red Rushwood Ct, Charleston, West Virginia, 10252</p>
          <p>(599) 559-7457</p>
          <p>Becker1@nowhere.com</p>
        </div>
        <div className={styles.social}>
          <a>
            <Image
              src="/facebook.svg"
              alt="facebook"
              width={50}
              height={50}
            ></Image>
          </a>
          <a>
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={50}
              height={50}
            ></Image>
          </a>
          <a>
            <Image
              src="/tweeter.svg"
              alt="twiter"
              width={50}
              height={50}
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
