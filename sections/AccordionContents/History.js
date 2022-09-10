import ImageSlider from "@components/ImageSlider";

const History = () => {
  return (
    <div className="accordion-grid">
      {/* <ImageSlider
        slides={[
          "images/homepage-slides/slide-1.jpg",
          "images/homepage-slides/slide-2.jpg",
        ]}
      /> */}
      <div className="s-image">
        <img src="/images/history.jpg" alt="Profile" />
      </div>
      <div className="grid-content">
        <h2 style={{ marginBottom: "15px" }}>
          THE THRESHOLD TO INNOVATION.
        </h2>
        {/* <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>Quality</p> */}
        <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
        We already described our imaginative and prescient a few years back with the constant increase of our small craft commercial enterprise to a globally operating construction company. We believe in Quality, Cost, Delivery, Development, and Management. Our Vision lies in becoming the Industry Leader by offering innovative solutions to the developing demanding situations confronted by the modern construction industry. Our vision is to bring our commercial enterprise institution to all commercial enterprise sectors including construction, project development, hotel, catering, agriculture, and foundation – and are developed in specific areas.
        </p>

        {/* <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>Safety</p>
        <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
          We are persistent in keeping people safe from harm and we ensure a
          safe working space.
        </p>

        <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>Ethics</p>
        <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
          We don{"’"}t compromise in our honestly and innovation
        </p>

        <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>Sustainability</p>
        <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
          Sustainability We improve the quality of life by respecting the
          environment, manufacturing planet friendly products.
        </p> */}
      </div>
    </div>
  );
};

export default History;
