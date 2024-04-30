/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useAnimationControls } from "framer-motion";

const AnimateControls = () => {
    const flipControls = useAnimationControls()
    const handleClick = () =>{
        flipControls.start()
    }

  return (
    <>
      <div className="grid place-content-center h-[100vh] gap-[4.8rem]">
        <motion.button onClick={handleClick} className="w-[150px] h-[40px] rounded-md bg-[black] text-[white] font-bold cursor-pointer flex items-center justify-center">
          <span>Flip it!</span>
        </motion.button>
        <motion.div
          variants={{
            initial: {
              rotate: "0deg",
            },
            flip: {
              rotate: "360deg",
            },
          }}
          initial='initial'
          className="w-[150px] h-[150px] bg-[#e618e6] rounded cursor-pointer"
          animate={flipControls}
        ></motion.div>
      </div>
    </>
  );
};

export default AnimateControls;
