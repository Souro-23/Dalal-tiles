import ProductsSlider from "@components/ProductsSlider";
import WallTilePages from "_data/Products/WallTilePages";

const UrbanAccesories = (props) => {
  return (
    <>
      <ProductsSlider data={WallTilePages} />
    </>
  );
};

export default UrbanAccesories;
