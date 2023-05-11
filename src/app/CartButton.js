'use client';

import { useState } from 'react';
import React from 'react';
import CartBox from './CartBox';
import styles from './CartButton.module.css';

export default function CartButton() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="styles.cartIcon">
        CartIcon
      </button>

      {isOpen && (
        <div className={styles.cartLayout}>
          <div className={styles.cartBox}>
            <button
              className={styles.cartClose}
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <CartBox />
          </div>
        </div>
      )}
    </div>
  );
}
