// basics
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FramerMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div className="grid place-content-center h-[100vh] gap-[4.8rem]">
        <motion.button
          className="w-[150px] h-[40px] rounded-md bg-[black] text-[white] font-bold cursor-pointer flex items-center justify-center"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          layout
        >
          <span>Click</span>
        </motion.button>
        <AnimatePresence mode="popLayout">
          {isVisible && (
            <motion.div
              initial={{
                rotate: "0deg",
                scale: 0,
                y: 0,
              }}
              animate={{
                rotate: "180deg",
                scale: 1,
                y: [0, -150, -150, -150, 0],
              }}
              exit={{
                rotate: "0deg",
                scale: 0,
                y: 0,

              }}
              transition={{
                duration: 1,
                ease: "backInOut",
                times:[0, 0.25, 0.5, 0.85, 1]
              }}
              className="w-[150px] h-[150px] bg-[#e618e6] rounded cursor-pointer"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FramerMotion;
