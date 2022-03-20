import dynamic from "next/dynamic";
import UrbanAccessories from "_data/Products/UrbanAccessories";
const ProductsPopupSlider = dynamic(
  () => import("@components/ProductsPopupSlider"),
  {
    ssr: false,
  }
);

const UrbanAccessoriesSlider = () => {
  return <ProductsPopupSlider data={UrbanAccessories} />;
};

export default UrbanAccessoriesSlider;
