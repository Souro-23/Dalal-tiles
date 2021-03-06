import { FiChevronDown } from "react-icons/fi";

import { useState, useEffect } from "react";

const Accordion = (props) => {
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  useEffect(() => {
    if (props.setActiveAccordion) {
      props.setActiveAccordion(selected !== null);
    }
  }, [selected]);

  return (
    <div className="accordion">
      {props.data.map((item, index) => (
        <div className="item" key={index}>
          <div
            className={selected === index ? "title active" : "title"}
            onClick={() => toggle(index)}
          >
            <p>{item.title}</p>
            <FiChevronDown size={25} />
          </div>
          <div className={selected === index ? "content show" : "content"}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
