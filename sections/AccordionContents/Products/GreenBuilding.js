import Link from "next/link";
import { useState } from "react";
import GreenBuildingPages from "_data/Products/GreenBuildingPages";
import Modal from "react-modal";
import { MdOutlineClose, MdMail } from "react-icons/md";
import { BiCube } from "react-icons/bi";
import { BsFileEarmarkPdf } from "react-icons/bs";



const GreenBuilding = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();


  function openModal(item) {
    setModalData(item);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    <div className="green-building-grid">
      {GreenBuildingPages.map((item, i) => (
        // <Link href={`/products/${item.proxy}/${item.slug}`}>
            <div key={item.slug} onClick={()=>{openModal(item)}} className="green-building-col">
              <div className="green-building-image">
                <img src={item.image} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p>{item.shortDescription}</p>
            </div>
        // </Link> 
      ))}
    </div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        {console.log(modalData)}
        <div className="product-modal">
          {modalData && (
            <>
              <div className="modal-header">
                <h2>{modalData?.name}</h2>

                <div className="close-btn" onClick={closeModal}>
                  <MdOutlineClose />
                </div>
              </div>
              <img
                src={modalData?.image}
                alt={modalData?.name}
                className="product-modal-image"
              />
              <div className="links">
                <a href={modalData.specifications.download3d} target="_blank" rel="noreferrer" className="detail-btn">
                  <BiCube /> Download 3D
                </a>
                <a href={modalData.specifications.downloadPdf} target="_blank" rel="noreferrer" className="detail-btn">
                  <BsFileEarmarkPdf /> Download Pdf
                </a>
                <a href="#" className="detail-btn">
                  <MdMail />
                  Enquire
                </a>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default GreenBuilding;
