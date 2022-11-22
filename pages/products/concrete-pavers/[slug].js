import Layout from "@components/Layout";
import ConcretePaversPages from "_data/Products/ConcretePaversPages";
import ProductDetailsGrid from "@components/ProductDetailsGrid";
import ProductsPageSidebar from "@section/ProductsPageSidebar";
import { useWindowDimensions } from "hooks/useWindowDimentions";

const ConcretePaversPage = (props) => {
  const { height, width } = useWindowDimensions();

  console.log(props);
  return (
    <Layout sidebar={<ProductsPageSidebar slider={props.data.renders} />}>
      <ProductDetailsGrid data={props.data} />
      {/* <SwatchSlider data={props.data.swatches} /> */}
      <div className="swatch-slider">
        <img
          src={props.data.renders[0]}
          alt="Render 1"
          style={{ height: `${height - 470}px` }}
          className="swatch-solo"
        />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const subcategories = ConcretePaversPages.map((item) => item.subcategories);
  const pages = [].concat(...subcategories);
  const paths = pages.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const subcategories = ConcretePaversPages.map((item) => item.subcategories);
  const pages = [].concat(...subcategories);
  const data = pages.find((item) => {
    if (item.slug === params.slug) {
      return item;
    }
  });
  return { props: { data } };
}

export default ConcretePaversPage;
