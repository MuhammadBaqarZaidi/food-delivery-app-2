'use client';

import React, { useState, useContext } from 'react';
import CartBox from './CartBox';
import styles from './CartButton.module.css';
import { Store } from './utils/Store';
import Link from 'next/link';

export default function CartButton() {
  let [isOpen, setIsOpen] = useState(false);

  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="styles.cartIcon">
        CartIcon
        {cart.cartItems.length > 0 && (
          <span className={styles.cartNum}>
            {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
          </span>
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
