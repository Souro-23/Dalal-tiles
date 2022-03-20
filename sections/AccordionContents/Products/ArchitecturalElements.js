import dynamic from "next/dynamic";
import ArchitecturalElements from "_data/Products/ArchitecturalElements";
const ProductsPopupSlider = dynamic(
  () => import("@components/ProductsPopupSlider"),
  {
    ssr: false,
  }
);

const ArchitecturalElementsSlider = () => {
  return <ProductsPopupSlider data={ArchitecturalElements} />;
};

export default ArchitecturalElementsSlider;
