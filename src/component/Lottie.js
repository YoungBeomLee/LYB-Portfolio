import lottie from "lottie-web";
import lottieAni from "../cube.json";
import React from "react";

const Lottie = () => {
  const cube = React.useRef();
  React.useEffect(() => {
    lottie.loadAnimation({
      container: cube.current,
      animationData: lottieAni,
      loop: true,
      autoplay: true,
    });
  }, []);
  return <span ref={cube} style={{ position: "absolute", top: 0, width: 100, height: 100 }}></span>;
};
export default Lottie;
