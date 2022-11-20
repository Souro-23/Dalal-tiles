import { useState, useEffect } from "react";

// const getWindowDimensions = () => {
//   let width, height;

//   useEffect(() => {
//     // window is accessible here.
//     const { innerWidth: width, innerHeight: height } = window;
//     width = width;
//     height = height;
//   }, []);

//   return {
//     width,
//     height,
//   };
// };

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setWindowDimensions({
      width,
      height,
    });

    function handleResize() {
      setWindowDimensions({
        width,
        height,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}
