/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Link href={'./product/${product.slug}'} className={styles.link}>
        <img
          src={product.image}
          alt={product.slug}
          className={styles.image}
        ></img>
        <div className={styles.text}>
          <h5 className={styles.name}>{product.name}</h5>
          <div>
            <p className={styles.price}>Rs.{product.price}</p>
            <button className={styles.primaryBtn} type="button">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
