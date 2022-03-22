import { MdOutlineClose } from "react-icons/md";
import Modal from "react-modal";
const OnBoardingForm = (props) => {
  const { modalIsOpen, closeModal } = props;

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <div className="onboarding-modal">
        <div className="close-btn" onClick={closeModal}>
          <MdOutlineClose />
        </div>
        <img src="dalal-tiles.png" alt="Dalal Tiles Logo" className="logo" />
        <p>Namaste!</p>
        <p className="description">
          Please tell us who you are, so we can optimise your experience better.
        </p>

        <div className="user-type">
          <strong>I am a...</strong>
          <div className="buttons">
            <button className="btn btn-outline" onClick={closeModal}>
              Architect
            </button>
            <button className="btn btn-outline" onClick={closeModal}>
              Contractor
            </button>
            <button className="btn btn-outline" onClick={closeModal}>
              Home Owner
            </button>
            <button className="btn btn-outline" onClick={closeModal}>
              Builder
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OnBoardingForm;
