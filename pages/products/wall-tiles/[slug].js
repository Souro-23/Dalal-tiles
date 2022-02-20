import Layout from "@components/Layout";
import WallTilePages from "_data/Products/WallTilePages";
import ProductDetailsGrid from "@components/ProductDetailsGrid";

const WallTilesPages = (props) => {
  return (
    <Layout>
      <ProductDetailsGrid data={props.data} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = WallTilePages.subcategories.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = WallTilePages.subcategories.find((item) => {
    if (item.slug === params.slug) {
      return item;
    }
  });
  return { props: { data } };
}

export default WallTilesPages;
