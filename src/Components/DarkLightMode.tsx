/* eslint-disable @typescript-eslint/no-explicit-any */
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DarkLightMode = ({ themeMode, toggleTheme }: any) => {
  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
    toggleTheme();
  };

  return (
    <>
      <div className="grid place-content-center h-[100vh] gap-4">
        <div className="w-full  h-auto p-4 flex justify-end items-end">
          <div className="w-auto h-auto p-2 gap-[5px] flex flex-row">
            <motion.div
              className={`w-[45px] rounded-xl flex ${
                isToggle == true
                  ? "justify-end bg-[grey]"
                  : "justify-start bg-[lightblue]"
              } items-center  p-1 cursor-pointer`}
              onClick={handleToggle}
            >
              <motion.div className="w-[15px] h-[15px] bg-[white] rounded-full"></motion.div>
            </motion.div>
            <span className="font-bold capitalize text-[12px]">
              toggle theme
            </span>
          </div>
        </div>
        <div
          className={`w-[300px] h-[400px] ${
            themeMode === "light"
              ? "bg-white text-black"
              : "bg-black text-white"
          } rounded-xl drop border border-slate-200 flex flex-col gap-[20px] p-4 `}
        >
          <div className="w-full h-[50%] items-center justify-center flex">
            <img
              className="w-full h-full object-cover"
              src="https://blog.hubspot.com/hs-fs/hubfs/web-development.webp?width=595&height=400&name=web-development.webp"
            ></img>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="w-full">
              <span className="text-[15px] font-extrabold capitalize">
                Apple Watch series 7GPS, Aluminium case, starlight sport
              </span>
            </div>
            <div className="w-full flex flex-row gap-[10px] items-center">
              <Rating name="size-small" defaultValue={4} size="small" />
              <div className="w-auto h-[20px] p-1.5 flex place-content-center bg-[lightblue] items-center justify-center rounded-md">
                <span className="text-[12px] font-bold text-[blue]">4.0</span>
              </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center mt-[10px]">
              <span className="text-[18px] font-[800]">$599</span>
              <motion.div
                className="w-auto p-2 h-[40px] flex items-center justify-center drop-shadow-lg bg-[blue] rounded-lg cursor-pointer"
                whileHover={{
                  scale: 1.15,
                }}
                whileTap={{
                  scale: 1,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                <span className="text-white capitalize text-[12px] font-semibold">
                  Add to cart
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DarkLightMode;
