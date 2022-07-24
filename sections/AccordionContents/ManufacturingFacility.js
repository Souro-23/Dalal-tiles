import ImageSlider from "@components/ImageSlider";

const ManufacturingFacility = () => {
  return (
    <div className="accordion-grid-manufacturing">
      <ImageSlider
        slides={[
          "images/homepage-slides/slide-1.jpg",
          "images/homepage-slides/slide-2.jpg",
        ]}
      />
      <div className="grid-content">
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
      </div>
    </div>
  );
};

export default ManufacturingFacility;
