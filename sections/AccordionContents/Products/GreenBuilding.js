import Link from "next/link";
import GreenBuildingPages from "_data/Products/GreenBuildingPages";

const GreenBuilding = () => {
  console.log(GreenBuildingPages);
  return (
    <div className="green-building-grid">
      {GreenBuildingPages.map((item, i) => (
        <Link href={`/products/${item.proxy}/${item.slug}`}>
          <a>
            <div className="green-building-col">
              <div className="green-building-image">
                <img src={item.image} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p>{item.shortDescription}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default GreenBuilding;
