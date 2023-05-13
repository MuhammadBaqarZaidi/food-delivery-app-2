import React from 'react';
import { useRouter } from 'next/router';

export default function ProductPage() {
  const { query } = useRouter();
  const { slug } = query;

  return <div>ProductPage</div>;
}
