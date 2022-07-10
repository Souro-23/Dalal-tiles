import { BiCube } from "react-icons/bi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const GreenBuildingDetailsGrid = (props) => {
  const { name, image, specifications } = props.data;
  const { size, density, thermal,downloadPdf,download3d } = specifications;

  return (
    <div className="products-grid">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="green-building-description-grid">
        <div className="product-name">{name}</div>
        <div className="grid-col border-r">
          <div className="heading">Size Specifications</div>
        </div>
        <div className="grid-col density-head">
          <div className="heading">Density Specifications</div>
        </div>

        <div className="grid-col size">
          {Object.entries(size).map((item, i) => (
            <div className="grid-cell" key={i}>
              <div className="heading">{item[0]}</div>
              <div className="detail">{item[1]}</div>
            </div>
          ))}
        </div>

        <div className="grid-col density">
          {Object.entries(density).map((item, i) => (
            <div className="grid-cell" key={i}>
              <div className="heading">{item[0]}</div>
              <div className="detail">{item[1]}</div>
            </div>
          ))}
        </div>
        <div className="grid-col thermal">
          <div className="grid-cell">
            <div className="heading">Thermal Transmittance [ W/(M2.K)]</div>
            <div className="detail">{thermal}</div>
          </div>
        </div>

        <div className="grid-col download">
          <div className="grid-cell">
            <div className="heading">Download</div>
            <div className="download-grid">
              <div className="detail">
                <a href={download3d} target="_blank" className="detail-btn">
                  <BiCube /> Download 3D
                </a>
                <a href={downloadPdf} target="_blank" className="detail-btn">
                  <BsFileEarmarkPdf /> Download Pdf
                </a>
              </div>
              <div className="detail enquire">
                <a href="#" className="detail-btn">
                  <MdMail />
                  Enquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenBuildingDetailsGrid;
