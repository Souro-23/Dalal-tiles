import Layout from "@components/Layout";
import SevenReasonsContent from "@section/SevenReasonsContent";
import SevenReasonsSlider from "@section/SevenReasonsSlider";

const SevenReasons = () => {
  return (
    <Layout>
      <div style={{display:"flex", flexDirection:"column", height:"80vh", justifyContent:"space-between"}}>
      <SevenReasonsSlider />
      <SevenReasonsContent />
      </div>
    </Layout>
  );
};

export default SevenReasons;
