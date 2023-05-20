import styles from './page.module.css';
import data from './utils/data';
import ProductCard from './ProductCard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h1>
            Authentic Thai-Chinese Cuisine at Affordable Prices in Karachi
          </h1>
          <p>
            Order Online Now and Get Fresh, Delicious Food Delivered to Your
            Doorstep
          </p>
          <Link href="/">Order Now</Link>
        </div>
        <div className="hero-right"></div>
      </div>
      <div className="categories">
        <h3>Categories</h3>
      </div>
      <div className="top">
        <h3>Top Selling</h3>
        <div className={styles.topProduct}>
          {data &&
            data.product &&
            data.product
              .filter((product) => product.popular)
              .map((product) => (
                <ProductCard product={product} key={product.slug}></ProductCard>
              ))}
        </div>
      </div>
    </>
  );
}
