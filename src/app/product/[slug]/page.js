'use client';

import React, { Component } from 'react';
import { useRouter } from 'next/navigation';
import data from '../../utils/data';

export default function ProductPage() {
  const { query } = useRouter();
  const { slug } = query || {};
  const product = data.product.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
    </div>
  );
}
