import ImageSlider from "@components/ImageSlider";

const History = () => {
  return (
    <div className="accordion-grid-2">
      <ImageSlider
        slides={[
          "images/homepage-slides/slide-1.jpg",
          "images/homepage-slides/slide-2.jpg",
        ]}
      />
      <div className="grid-content">
        <h2 style={{ marginBottom: "15px" }}>
          ALEGACY THAT STANDS FOR QUALITY, HONESTY AND INNOVATION.
        </h2>
        <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>Quality</p>
        <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
          We are passionate about excellence in what we do. Our reputation
          relies on our delivered value in the eyes of every client.
        </p>

        <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>Safety</p>
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
        </p>
      </div>
    </div>
  );
};

export default History;
