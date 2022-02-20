import Layout from "@components/Layout";
import AboutPageSidebar from "@section/AboutPageSidebar";
import ProductDetailsGrid from "@components/ProductDetailsGrid";

const ProductDetails = (props) => {
  return (
    <Layout sidebar={<AboutPageSidebar />}>
      <div className="product-details-page">
        <ProductDetailsGrid />
      </div>
    </Layout>
  );
};

export default ProductDetails;
