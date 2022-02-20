import { BiCube } from "react-icons/bi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const ProductDetailsGrid = () => {
  return (
    <div className="grid-2">
      <div className="product-image">
        <img src="/products/urban/urban-sub-3.png" />
      </div>
      <div className="description-grid">
        <div className="product-name">Absqua</div>
        <div className="grid-cell texture">
          <div className="heading">Textures Specifications</div>
          <div className="detail">
            <div className="texture-box">
              <div className="image"></div>
              <div className="name">Smooth</div>
            </div>
            <div className="texture-box">
              <div className="image"></div>
              <div className="name">Smooth</div>
            </div>
          </div>
        </div>
        <div className="grid-cell specification">
          <div className="heading">Size Specifications</div>
          <div className="detail no-pd">
            <div className="size-column">
              <div className="heading">WxHxD mm</div>
              <div className="detail">300 x 9900 x 15</div>
            </div>
            <div className="size-column">
              <div className="heading">Area m2</div>
              <div className="detail">0.27</div>
            </div>
            <div className="size-column">
              <div className="heading">Area ft</div>
              <div className="detail">2.91</div>
            </div>
          </div>
        </div>
        <div className="grid-cell download">
          <div className="heading">Download</div>
          <div className="detail">
            <a href="#" className="detail-btn">
              <BiCube /> Download 3D
            </a>
            <a href="#" className="detail-btn">
              <BsFileEarmarkPdf /> Download Pdf
            </a>
          </div>
        </div>
        <div className="grid-cell colors">
          <div className="heading">Colours</div>
          <div className="detail">
            <div className="color-block"></div>
            <div className="color-block"></div>
            <div className="color-block"></div>
            <div className="color-block"></div>
            <div className="color-block"></div>
            <div className="color-block"></div>
            <div className="color-block"></div>
            <div className="color-block"></div>
            <div className="color-block"></div>
          </div>
        </div>
        <div className="grid-cell enquire">
          <div className="heading">&nbsp;</div>
          <div className="detail">
            <a href="#" className="detail-btn">
              <MdMail />
              Enquire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsGrid;
