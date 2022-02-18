import ImageSlider from "@components/ImageSlider";

const Profile = () => {
  return (
    <div className="accordion-grid-2">
      <ImageSlider
        slides={[
          "images/homepage-slides/slide-1.jpg",
          "images/homepage-slides/slide-2.jpg",
        ]}
      />
      <div className="grid-content">
        <h2 style={{ marginBottom: "15px" }}>PROFILE</h2>
        <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
          After years of hard work and persistence, Dalal Tiles has established
          itself as trustworthy and a sound player in the industry. Dalal
          Industries is one of the leading companies in India for precast
          fit-out and insulation. Our comprehensive range of disciplines as a
          full-service provider for nearly all applications is unique.
        </p>

        <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
          We are a strong team of motivated colleagues who continuously work on
          projects every day. We enjoy our work, and we are proud of our
          capabilities - there is no such thing as “I can’t”! That's what our
          customers appreciate.
        </p>

        <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
          We offer our wide expertise in the fields of structural Design
          systems, redesign from conventional to Precast structures, manufacture
          components in Precast . GFRC, GFRP and GFRC, as well as perform site
          erection. Our headquarters have been located in Rohini, New Delhi,
          since 1998 and stand for the company’s stability and growth at the
          same time. Wee follow strict safety and quality control procedures,
          that covers the whole process from the detailing stage to handling
          over and maintaining the high-quality reputation of which we are
          proud, and for which we have received the certificate of 1SO 9000:2008
          and we have obtained a license of IS 15658:2006 and IS 1237:1980
        </p>
      </div>
    </div>
  );
};

export default Profile;
