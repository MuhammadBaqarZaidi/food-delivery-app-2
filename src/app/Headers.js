import React from 'react';
import styles from './Headers.module.css';
import CartButton from './CartButton';
import Link from 'next/link';

export default function Headers() {
  return (
    <div className={styles.header}>
      <div className={styles.headerRight}>
        <div className={styles.logo}>
<<<<<<< HEAD
          <Link href="\">Logo</Link>
=======
          <Link href="/">Logo</Link>
>>>>>>> f4506adaad1efc80943645b3dbb3b785910c811e
        </div>
        <div className={styles.menu}>
          <Link href="/menu">Menu</Link>
        </div>
      </div>

      <div className={styles.headerLeft}>
        <div className={styles.cartIcon}>
          <CartButton />
        </div>
        <div className={styles.login}>Register / Login</div>
      </div>
    </div>
  );
}
