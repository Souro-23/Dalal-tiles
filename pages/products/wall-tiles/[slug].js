import Layout from "@components/Layout";
import WallTilePages from "_data/Products/WallTilePages";
import ProductDetailsGrid from "@components/ProductDetailsGrid";
import SwatchSlider from "@components/SwatchSlider";

const WallTilesPages = (props) => {
  return (
    <Layout>
      <ProductDetailsGrid data={props.data} />
      <SwatchSlider data={props.data.swatches} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const subcategories = WallTilePages.map((item) => item.subcategories);
  const pages = [].concat(...subcategories);
  const paths = pages.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const subcategories = WallTilePages.map((item) => item.subcategories);
  const pages = [].concat(...subcategories);
  const data = pages.find((item) => {
    if (item.slug === params.slug) {
      return item;
    }
  });
  return { props: { data } };
}

export default WallTilesPages;
