import { BiCube } from "react-icons/bi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";

const ProductDetailsGrid = (props) => {
  const {
    name,
    image,
    sizeDescription,
    colors,
    textures,
    downloadPdf,
    download3d,
    productImages,
  } = props.data;

  console.log(props.data.productImages);
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedProductImageIndex, setSelectedProductImageIndex] = useState(0);

  const onColorSelect = (code) => {
    setSelectedColor(code);
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(image) {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="products-grid">
      <div className="product-image">
        <div className="navigation" onClick={() => router.back()}>
          <HiOutlineArrowLeft />
          <p>Back To Products</p>
        </div>
        {!productImages && <img src={image} alt={name} />}
        {productImages && (
          <div style={{ position: "relative" }}>
            <img src={productImages[selectedProductImageIndex]} alt={name} />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                position: "absolute",
                top: "50%",
                rigth: "0",
              }}
              onClick={() => {
                setSelectedProductImageIndex(
                  (selectedProductImageIndex + 1) % productImages.length
                );
              }}
              className="navigation-buttons black next-btn"
            >
              <div>
                <HiOutlineArrowRight />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="description-grid">
        <div className="product-name">{name}</div>
        <div className="grid-cell texture">
          <div className="heading">Textures Specifications</div>
          <div className="detail">
            {textures?.map((item, i) => (
              <div className="texture-box" key={i}>
                <div className="image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid-cell specification">
          <div className="heading">Size Specifications</div>
          <div className="detail no-pd">
            <div className="size-column">
              <div className="heading">
                WxHxD
                <br />
                (mm)
              </div>
              <div className="detail">{sizeDescription.dimensions}</div>
            </div>
            <div className="size-column">
              <div className="heading">
                Area
                <br />
                (m2)
              </div>
              <div className="detail">{sizeDescription.areaM}</div>
            </div>
            <div className="size-column">
              <div className="heading">
                Area
                <br />
                (ft)
              </div>
              <div className="detail">{sizeDescription.areaF}</div>
            </div>
          </div>
        </div>
        <div className="grid-cell download">
          <div className="heading">Download</div>
          <div className="detail">
            <a
              href={download3d}
              target="_blank"
              rel="noreferrer"
              className="detail-btn"
            >
              <BiCube /> Download 3D
            </a>
            <a
              href={downloadPdf}
              target="_blank"
              rel="noreferrer"
              className="detail-btn"
            >
              <BsFileEarmarkPdf /> Download Pdf
            </a>
          </div>
        </div>
        <div className="grid-cell colors">
          <div className="heading">
            Colours :{" "}
            <span style={{ fontWeight: "100" }}>
              ( select any colour for enquiry )
            </span>
          </div>
          <div className="detail">
            {colors.map((item, i) => (
              <div
                className={`${item === selectedColor ? "border-black" : ""}`}
                style={item === selectedColor ? { padding: "1px" } : {}}
                key={i}
              >
                <div
                  className={`color-block`}
                  style={{ background: item }}
                  onClick={() => onColorSelect(item)}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid-cell enquire">
          <div className="heading">&nbsp;</div>
          <div className="detail">
            <a onClick={openModal} href="javascript:" className="detail-btn">
              <MdMail />
              Enquire
            </a>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="renders-modal modal-container">
          <div className="close-btn" onClick={closeModal}>
            <MdOutlineClose />
          </div>
          <div className="">
            <h2 style={{ width: "90%" }}>
              Have a question or need to reach a DT commercial sales
              representative?
            </h2>
            <p>
              Please fill out our form. We will be in touch as soon as possible.
            </p>
          </div>
          <div className="grid">
            <div className="left-content">
              <h4>Product Enquiry Details</h4>
              <div>
                <p>Product Category</p>
                <div className="block-content">
                  <p>Wall Tiles</p>
                </div>
              </div>

              <div className="mt-1">
                <p>Product Name</p>
                <div className="block-content">
                  <p>{name}</p>
                </div>
              </div>

              <div>
                <div className="colors">
                  {/* <p>Product Color{ selectedColor && " : "+ selectedColor } </p> */}
                  <p>Select Product Color</p>
                  <div className="detail">
                    {colors.map((item, i) => (
                      <div
                        className={`${
                          item === selectedColor ? "border-black" : ""
                        }`}
                        style={{ padding: "1px" }}
                        key={i}
                      >
                        <div
                          className={`color-block`}
                          onClick={() => onColorSelect(item)}
                          key={i}
                          style={{ background: item }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="enquiry-form ">
              <h4>Enter Your Details</h4>
              <div className="grid">
                <div className="row-form-group">
                  <input
                    type="text"
                    name="firstname"
                    required
                    placeholder="First Name"
                  />
                </div>
                <div className="row-form-group">
                  <input
                    type="text"
                    name="lastname"
                    required
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="Enter Your E-Mail"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <input type="button" value="Submit" className="submit-btn" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetailsGrid;
