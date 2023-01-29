import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const CallNow = () => {
  return (
    <div className="call-now">
      <Link href="tel:+919891924243">
        <a>
          <FaPhoneAlt />
          Call Now
        </a>
      </Link>
    </div>
  );
};

export default CallNow;
