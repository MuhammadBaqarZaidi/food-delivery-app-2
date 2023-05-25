import data from '../utils/data';

export default function Product({ product }) {
  const { slug, name, image, price, description } = product;
  return;
}

export async function getStaticProps({ params = {} }) {
  const product = data.products.find(
    ({ slug }) => `${slug}` === `${params.slug}`
  );
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const paths = products.map((product) => {
    const { slug } = product;
    return {
      params: {
        slug: slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
