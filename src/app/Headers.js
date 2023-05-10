import React from 'react';
import styles from './Headers.module.css';

export default function Headers() {
  return (
    <div className={styles.header}>
      <div className={styles.headerRight}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.menu}>Menu</div>
      </div>

      <div className={styles.headerLeft}>
        <div className={styles.cartIcon}>Cart</div>
        <div className={styles.login}>Register / Login</div>
      </div>
    </div>
  );
}
