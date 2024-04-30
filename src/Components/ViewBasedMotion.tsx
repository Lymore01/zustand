/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ViewBasedMotion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});

  useEffect(()=>{
    console.log("In view: ",isInView)
  },[isInView])
  
  return (
    <>
      <div className="h-[150vh]"></div>
      <motion.div
        className="h-[100vh] w-full bg-black"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      ></motion.div>
      <div
        ref={ref}
        className={`h-[100vh]`}
        style={{
        background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      ></div>
    </>
  );
};

export default ViewBasedMotion;
