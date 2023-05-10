import React from 'react';
import styles from './Footers.module.css';
import Link from 'next/link';

export default function Footers() {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.logo}>logo</div>
        <div className={styles.primaryNav}>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </div>
        <div className={styles.secondaryNav}></div>
        <div className={styles.contact}>
          <div className={styles.contactInfo}></div>
          <div className={styles.social}></div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>copyright ThaiChin</p>
        <p>
          Made by <a>Baqar Zaidi</a>
        </p>
      </div>
    </div>
  );
}
