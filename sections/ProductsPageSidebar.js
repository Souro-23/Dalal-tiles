import RendersSlider from "@components/RendersSlider";

const ProductsPageSidebar = (props) => {
  return (
    <>
      {/* <button className="visit-btn">Book a visit</button> */}

      {props.slider && <RendersSlider data={props.slider} />}
    </>
  );
};

export default ProductsPageSidebar;
