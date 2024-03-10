import React from "react";
import { motion } from "framer-motion";

function DrawOutlineButton ({ children, ...rest }) {
  return (
    <motion.button
        {...rest}
        whileTap={{ scale: 0.8 }}
        drag
        dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
        }}
      className="group mx-auto mt-80 relative w-48  px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </motion.button>
  );
};

export default DrawOutlineButton;