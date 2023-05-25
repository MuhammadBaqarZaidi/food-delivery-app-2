import React from 'react';
import data from '../utils/data';
import styles from './page.module.css';
import ProductCard from '../ProductCard';

export default function Menu() {
  return (
    <div>
      Menu
      <div>
        <h2>Soups</h2>
        <p></p>
        <div className={styles.productGrid}>
          {data.product
            .filter((product) => product.category === 'Soups')
            .map((product) => (
              <ProductCard product={product} key={product.slug}></ProductCard>
            ))}
        </div>
      </div>
    </div>
  );
}
