'use client';

import React, { useState, useContext, useEffect } from 'react';
import CartBox from './CartBox';
import styles from './CartButton.module.css';
import { Store } from './utils/Store';
import Link from 'next/link';

export default function CartButton() {
  let [isOpen, setIsOpen] = useState(false);

  const { state } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="styles.cartIcon">
        CartIcon......
        {cartItemsCount > 0 && (
          <span className={styles.cartNum}>{cartItemsCount}</span>
        )}
      </button>

      {isOpen && (
        <div className={styles.cartLayout}>
          <div
            className={styles.cartWhite}
            onClick={() => setIsOpen(false)}
          ></div>
          <div className={styles.cartBox}>
            <button
              className={styles.cartClose}
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <CartBox />
            <button onClick={() => setIsOpen(false)}>
              <Link href="/cart">Check Out</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
