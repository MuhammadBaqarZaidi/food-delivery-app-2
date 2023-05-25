'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import Link from 'next/link';
import styles from './ProductCard.module.css';
import data from './utils/data';
import { Store } from './utils/Store';

export default function ProductCard({ product }) {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.slug}`} className={styles.link}>
        <img
          src={product.image}
          alt={product.slug}
          className={styles.image}
        ></img>
      </Link>
      <div className={styles.text}>
        <h5 className={styles.name}>{product.name}</h5>
        <div>
          <p className={styles.price}>Rs.{product.price}</p>
          <button
            className={styles.primaryBtn}
            type="button"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
