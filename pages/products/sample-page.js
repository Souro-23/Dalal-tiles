import Layout from "@components/Layout";
import AboutPageSidebar from "@section/AboutPageSidebar";
import ProductDetailsGrid from "@components/ProductDetailsGrid";
import SwatchSlider from "@components/SwatchSlider";

const ProductDetails = (props) => {
  const sampleSwatch = [
    "/products/swatch/swatch-1.png",
    "/products/swatch/swatch-2.png",
  ];
  return (
    <Layout sidebar={<AboutPageSidebar />}>
      <div className="product-details-page">
        <ProductDetailsGrid />
        <SwatchSlider data={sampleSwatch} />
      </div>
    </Layout>
  );
};

export default ProductDetails;
