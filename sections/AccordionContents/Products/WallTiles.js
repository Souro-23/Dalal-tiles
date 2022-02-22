import dynamic from "next/dynamic";
import WallTilePages from "_data/Products/WallTilePages";
const ProductsSlider = dynamic(() => import("@components/ProductsSlider"), {
  ssr: false,
});

const UrbanAccesories = (props) => {
  return (
    <>
      <ProductsSlider data={WallTilePages} />
    </>
  );
};

export default UrbanAccesories;
