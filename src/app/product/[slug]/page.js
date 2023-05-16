'use client';

import React, { Component } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

async function getData() {
  const res = await fetch('https://api.example.com/...');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
 
export default async function Page() {
  const data = await getData();
 
  return <main></main>;
}


export async function getStaticProps({ params }) {
  const searchResults = await getProducts(params.slug)
  const coffeeProduct = searchResults[0]

  return {
    props: {
      product: coffeeProduct,
    },
  }
}

export async function getStaticPaths() {
  const coffeeProducts = await getProducts('coffee')
  let fullPaths = []

  for (let product of coffeeProducts) {
    fullPaths.push({ params: { slug: product.id } })
  }

  return {
    paths: fullPaths,
    fallback: 'blocking',
  }
}


// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const product = await fetch('../../utils/data').then((res) => res.json());

//   return product.map((product) => ({
//     slug: product.slug,
//     name: product.name,
//   }));
// }



// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function ProductPage({ product }) {
  // , { params: { slug: string } }
  // const { slug, name } = params;
  // ...
  // if (!product) {
  //   return <div>Product Not Found</div>;
  // }

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
          <button className={styles.addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
