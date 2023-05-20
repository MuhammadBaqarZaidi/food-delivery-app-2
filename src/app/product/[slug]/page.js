'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import data from '../../utils/data';
import { Store } from '../../utils/Store';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const prod = await fetch('../../utils/data').then((res) => res.json());

  return prod.map((product) => ({
    slug: product.slug,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function ProductPage({ params }) {
  const { state, dispatch } = useContext(Store);

  const product = data.product.find((x) => x.slug === params.slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <Image
          src="/images/corn-soup.jpg"
          alt="product image"
          width={400}
          height={400}
        ></Image>
      </div>
      <div className={styles.text}>
        <h2>{product.name}</h2>
        <p>Hot served with chicken and corn stock based soup</p>
        <p className={styles.price}>Rs. 550</p>
        <div className={styles.add}>
          <button className={styles.addToCart} onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
