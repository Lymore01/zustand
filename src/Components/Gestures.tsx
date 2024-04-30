import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <>
      <div className="grid place-content-center h-[100vh] gap-[4.8rem] drop-shadow-lg">
        <MotionConfig
          transition={{
            duration: 0.125,
            ease: "easeInOut",
          }}
        >
          <motion.button
            className="w-[150px] h-[40px] rounded-md bg-[black] text-[white] font-bold cursor-pointer flex items-center justify-center drop-shadow-lg"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
              rotate: "2.5deg",
            }}
          >
            <span>Click</span>
          </motion.button>
          <motion.button
            className="w-[150px] h-[40px] rounded-md bg-[orange] text-[white] font-bold cursor-pointer flex items-center justify-center drop-shadow-lg"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.85,
              rotate: "2.5deg",
            }}
          >
            <span>Click</span>
          </motion.button>
        </MotionConfig>
      </div>
    </>
  );
};

export default Gestures;
