import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const CallNow = () => {
  return (
    <div className="call-now">
      <Link href="tel:+918836452136">
        <a>
          <FaPhoneAlt />
          Call Now
        </a>
      </Link>
    </div>
  );
};

export default CallNow;
