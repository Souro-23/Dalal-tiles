import Layout from "@components/Layout";
import SevenReasonsContent from "@section/SevenReasonsContent";
import SevenReasonsSlider from "@section/SevenReasonsSlider";

const SevenReasons = () => {
  return (
    <Layout>
      <SevenReasonsSlider />
      <SevenReasonsContent />
    </Layout>
  );
};

export default SevenReasons;
