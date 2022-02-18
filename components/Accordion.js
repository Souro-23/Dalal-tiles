import { FiChevronDown } from "react-icons/fi";

import { useState } from "react";

const Accordion = (props) => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="accordion">
      {props.data.map((item, i) => (
        <div className="item">
          <div
            className={selected === i ? "title active" : "title"}
            onClick={() => toggle(i)}
          >
            <p>{item.title}</p>
            <FiChevronDown size={25} />
          </div>
          <div className={selected === i ? "content show" : "content"}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
