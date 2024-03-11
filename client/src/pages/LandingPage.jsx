import { motion } from "framer-motion";
import { useRef, useState } from "react";
import DrawOutlineButton from "../components/DrawOutlineButton";
import BubbleText from "../components/BubbleText";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

function LandingPage() {
  const [isScaled, setIsScaled] = useState(false);
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  function handleClick() {
    setIsScaled(!isScaled);
    if (!isScaled) {
      setTimeout(() => {
        window.location.href = "/Latest";
      }, 250);
    }
  }
  const variants = {
    zoom: { opacity: 0, x: "60%" },
    normal: { opacity: 1, x: 0 },
  };
  return (
    <div className="h-screen bg-gray-200">
      <div className="w-[950px] mx-auto px-2 grid grid-cols-4 gap-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className={`h-[550px] flex items-between justify-between col-span-4 `}
          variants={variants}
          animate={isScaled ? "zoom" : "normal"}
          transition={{ duration: 0.25 }}
        >
          <div
            style={{ backgroundColor: "#020617" }}
            className="flex flex-col justify-center gap-12 items-center w-full text-center rounded-l-lg drop-shadow-2xl shadow-lg shadow-violet-500"
          >
            <div className="">
              <img
                src="../../public/assets/icons/infinity.png"
                className="w-[40px] mx-auto"
              />
            </div>
            <div className="">
              <BubbleText />
            </div>
            <div className="">
              <DrawOutlineButton onClick={handleClick}>
                Web site
              </DrawOutlineButton>
            </div>
          </div>
          <div className="text-center w-[550px] object-cover rounded-r-lg bg-cover bg-center ">
            <motion.div
              className="relative w-[550px] drop-shadow-2xl shadow-lg shadow-violet-500 rounded-r-xl"
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                backgroundImage: "url(../../public/assets/image/bg-2.jpg)",
                transformStyle: "preserve-3d",
                height: "550px",
              }}
              animate={{ rotateX, rotateY }}
            >
              <div
                style={{
                  transform: "translateZ(75px)",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src="https://th-a.kakaopagecdn.com/P/C/353/t2/2x/cc4fa235-5cd8-4a43-ae83-7d930e188713.png"
                  className="absolute"
                  alt=""
                />
                <video
                  style={{ width: "650px", height: "608px" }}
                  className="absolute ml-16 inset-4 grid place-content-center"
                  autoPlay
                  muted
                  loop
                >
                  <source
                    src=" https://th-a.kakaopagecdn.com/P/C/353/c1a/a124957b-5d43-42b0-ac3c-571844949405.webm"
                    className="w-[400px] mx-auto"
                    type="video/webm"
                  />
                </video>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
