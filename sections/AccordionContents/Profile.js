import ImageSlider from "@components/ImageSlider";

const Profile = () => {
  return (
    <div className="accordion-grid">
      {/* <ImageSlider
        slides={[
          "images/homepage-slides/slide-1.jpg",
          "images/homepage-slides/slide-2.jpg",
        ]}
      /> */}
      <div className="s-image">
        <img src="/images/profile.jpg" alt="Profile" />
      </div>
      <div className="grid-content">
        <h2 style={{ marginBottom: "15px" }}>A LEGACY THAT STANDS FOR QUALITY, HONESTY AND INNOVATION.</h2>
        <p className="banner-description">
        Dalal Tiles is a Leader in manufacturing, exporting, and supplying cutting edge Construction Materials for architectural spaces that aspire to contribute to the creative vision and endeavours of Architects, contractors, and designers. Our products include but are not limited to RCC Bollards, Wall Tiles, Paving Tiles, Platform Copying, Interlock Paving Tile. We transcend our competitors with our modern approach, varied range of quality products and textures, ease of installation, and most importantly our legacy that puts honesty and experience first. We at Dalal Tiles ambitiously open up a world of possibilities to realize ideas into reality with our constantly developing tools and a culture that thrives on innovation while keeping utility and elegance in place.
        <br/>
        <br/>

        Dalal Tiles has its history owed to its pioneers Mr. Anil Dalal and Mr. Rakesh Dalal that have instilled the values of Transparency, Honesty, and Excelling quality to build relationships towards an innovative and creativity driven community of Architects and Engineers.
        Ensuring the promise of delivering excellence, Dalal Tiles Pvt. Ltd. extends the execution, application, and installation of products and all services related, to Dalal Builders Pvt. Ltd. creating an umbrella of solutions under the Dalal Tiles Banner.
        <br/>
        <br/>

        We Follow strict safety and quality control procedures, that covers the whole process from detailing stage to handling over and maintain the high-quality reputation of which we are proud, and for which we have received ISO 9000:2008 and we have obtained license of IS 15658:2006 and IS 1237:1980 for our flooring products. Our spacious warehouse facility has requisites for safe storage of products in large amount. The entire area is strategically segmented and labeled that assists in swift movement of the stored products. Suitable temperature and humidity level is maintained to ensure original conditions of CC Interlocking Paver, GRC Products, and other products.
        </p>
        {/* <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
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
        </p> */}
      </div>
    </div>
  );
};

export default Profile;
