import { useState, useEffect } from "react";
import Layout from "@components/Layout";
import HomePageSlider from "@section/HomePageSlider";
import OnBoardingForm from "@section/OnBoardingForm";

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    localStorage.setItem("onboardingDone", true);
    setIsOpen(false);
  }

  useEffect(() => {
    const onboardingDone = localStorage.getItem("onboardingDone");

    if (!onboardingDone) {
      openModal();
    }
  }, []);

  return (
    <Layout>
      <HomePageSlider />
      <OnBoardingForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </Layout>
  );
};

export default Home;
