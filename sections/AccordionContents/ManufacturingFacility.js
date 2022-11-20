import ImageSlider from "@components/ImageSlider";
import { useWindowDimensions } from "hooks/useWindowDimentions";

const ManufacturingFacility = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div
      className="accordion-grid-manufacturing"
      style={{ height: `${height - 290}px` }}
    >
      <ImageSlider
        slides={[
          "images/manufaturing-facilities/manufaturing-facilities-1.png",
          "images/manufaturing-facilities/manufaturing-facilities-2.png",
          "images/manufaturing-facilities/manufaturing-facilities-3.png",
          "images/manufaturing-facilities/manufaturing-facilities-4.png",
          "images/manufaturing-facilities/manufaturing-facilities-5.png",
        ]}
        textArray={[
          "H2000 by HESS Machines, Germany, Commissioned at Ghaziabad, Uttar Pradesh",
          "",
          "Single Station Forest Press by Hess Machines Germany, Commissioned at Ghaziabad, UP",
          "Single Station Forest Press",
          "SPM30 by Columbia Machines, Commissioned at Jhajjar, Haryana",
        ]}
      />
      {/* <div className="grid-content">
        <h2 style={{ marginBottom: "15px" }}>
          SPM30 BY COLUMBIA MACHINES AMERICA, COMMISSIONED AT JHAJJAR, HARYANA
        </h2>

        <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div> */}
    </div>
  );
};

export default ManufacturingFacility;
