import Layout from "@components/Layout";
import AboutPageSidebar from "@section/AboutPageSidebar";

const About = () => {
  return (
    <Layout sidebar={<AboutPageSidebar />}>
      <video controls className="about-video">
        <source
          src="https://vod-progressive.akamaized.net/exp=1638128509~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F436%2F13%2F327180404%2F1281319886.mp4~hmac=6faa29895f01942f935b6f3617f18ffa333a60406c1cceb3225a75dfe3d249dc/vimeo-prod-skyfire-std-us/01/436/13/327180404/1281319886.mp4?download=1&filename=Pexels+Videos+2073129.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="about-section">
        <h1 className="about-heading">Dalal Tiles</h1>
        <p className="about-description">
          A Leader in manufacturing, exporting, and supplying cutting edge
          Construction Materials for architectural spaces that aspire to
          contribute to the creative vision and endeavours of Architects,
          Contractors, and Developers.
        </p>
      </div>
    </Layout>
  );
};

export default About;
