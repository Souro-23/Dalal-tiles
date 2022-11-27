import Layout from "@components/Layout";
import GreenBuildingPages from "_data/Products/GreenBuildingPages";
import ProductDetailsGrid from "@components/ProductDetailsGrid";
import ProductsPageSidebar from "@section/ProductsPageSidebar";
import GreenBuildingDetailsGrid from "@components/GreenBuildingDetailsGrid";

const GreenBuildingPage = (props) => {
  return (
    <Layout sidebar={<ProductsPageSidebar slider={props.data.renders} />}>
      <GreenBuildingDetailsGrid
        productCategory={"Green Building"}
        data={props.data}
      />

      <div className="green-building-description">
        <div dangerouslySetInnerHTML={{ __html: props.data.description }} />
        <div dangerouslySetInnerHTML={{ __html: props.data.description2 }} />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = GreenBuildingPages.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = GreenBuildingPages.find((item) => {
    if (item.slug === params.slug) {
      return item;
    }
  });
  return { props: { data } };
}

export default GreenBuildingPage;
