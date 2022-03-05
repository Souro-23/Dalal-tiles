import dynamic from "next/dynamic";
import ConcretePaversPages from "_data/Products/ConcretePaversPages";
const ProductsSlider = dynamic(() => import("@components/ProductsSlider"), {
  ssr: false,
});

const UrbanAccesories = (props) => {
  return (
    <>
      <ProductsSlider data={ConcretePaversPages} />
    </>
  );
};

export default UrbanAccesories;
