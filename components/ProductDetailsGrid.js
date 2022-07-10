import { BiCube } from "react-icons/bi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useRouter } from 'next/router'



const ProductDetailsGrid = (props) => {
  const { name, image, sizeDescription, colors, textures,downloadPdf,download3d } = props.data;
  const router = useRouter()

  return (
    <div className="products-grid">
      <div className="product-image">
        <div className="navigation">
          <HiOutlineArrowLeft  onClick={() => router.back()}/>
          <p>Back To Products</p>
        </div>
        <img src={image} alt={name} />
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
              <div className="heading">WxHxD mm</div>
              <div className="detail">{sizeDescription.dimensions}</div>
            </div>
            <div className="size-column">
              <div className="heading">Area m2</div>
              <div className="detail">{sizeDescription.areaM}</div>
            </div>
            <div className="size-column">
              <div className="heading">Area ft</div>
              <div className="detail">{sizeDescription.areaF}</div>
            </div>
          </div>
        </div>
        <div className="grid-cell download">
          <div className="heading">Download</div>
          <div className="detail">
            <a href={download3d} target="_blank" className="detail-btn">
              <BiCube /> Download 3D
            </a>
            <a href={downloadPdf} target="_blank" className="detail-btn">
              <BsFileEarmarkPdf /> Download Pdf
            </a>
          </div>
        </div>
        <div className="grid-cell colors">
          <div className="heading">Colours</div>
          <div className="detail">
            {colors.map((item, i) => (
              <div
                className="color-block"
                key={i}
                style={{ background: item }}
              ></div>
            ))}
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
