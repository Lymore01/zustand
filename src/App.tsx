import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function App() {
  /* const ref = useRef(null);
  const inView = useInView(ref, { once: false }); */

  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY ;
      setIsScrolled(scrollY > 0); // Check if scrolled beyond the top
      if (scrollY > 0) {
        controls.start({ backgroundColor: "white" });
      } else {
        controls.start({ backgroundColor: "transparent" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      <div
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
        className="relative bg-clip-content w-full h-[105vh] items-start justify-between flex flex-col"
      >
        <div className="w-full h-full absolute inset-0">
          <div className="absolute inset-0 w-full h-full object-cover bg-[rgba(0,0,0,0.3)]"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://media.iceportal.com/151526/Videos/video112923012536472_720p.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.div
          initial={{ backgroundColor: "transparent" }}
          animate={controls}
          className={`z-20 sticky top-0 w-full h-auto p-3 pr-8 pl-8 flex flex-row justify-between ${
            isScrolled ? "text-[black]" : "text-[white]"
          } text-white font-extrabold items-center`}
        >
          <div className="items-center flex flex-row gap-[50px]">
            <button className="rtL:ml-6 ltr:mr-6 md:p-4" aria-label="menu">
              <div className="w-10 h-1 rotate-0 transition-all bg-current mb-2"></div>
              <div className="w-10 h-1 rotate-0 transition-all bg-current "></div>
            </button>
            <span className="flex flex-row items-center gap-[20px] lg:gap-[8px] text-[18px] font-semibold">
              EN{" "}
              <span>
                <IoIosArrowDown className="h-[24px] w-[24px] lg:w-[16px]" />
              </span>
            </span>
          </div>
          <div className="translate-x-[50%]">
            <svg
              className="fill-current"
              width="129"
              height="52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M83.9 10.8c-.6.2-1 .5-1.5.9-.4.4-.7.9-.8 1.5l.1.3.4.2c.6 0 1.1-.4 1.5-.8.5-.4.7-.9.9-1.5a.6.6 0 0 0-.2-.4.6.6 0 0 0-.4-.2Zm40.7 0c-.6.2-1 .5-1.5.9-.4.4-.7.9-.8 1.5a.6.6 0 0 0 .3.5h.2c.6 0 1.1-.4 1.6-.8.4-.4.6-.9.8-1.5v-.2a.6.6 0 0 0-.4-.3h-.2ZM58.3.4c-8.7 0-22.2 12.2-29.5 17.4 1.8-4 3.8-7.9 6-11.6 1-1.3.7-1.8.3-1.8-.4 0-1.9.6-7.6 1.3-5.6.8-8.6 4-8.6 7.6a5.2 5.2 0 0 0 1.6 3.8c.2.2.5.1.2-.4-.6-.8-.9-1.7-1-2.8.1-1.2.5-2.5 1.3-3.5a6 6 0 0 1 3-2.1c2.3-1 4.3-1 7.7-1.4C26.9 15.2 18.9 39 8.6 39c-1.4 0-2.7-.4-3.9-1A7.6 7.6 0 0 1 2 35c-.3-.6-.5-.8-1-.8-.2 0-.4 0-.6.2a1 1 0 0 0-.3.6C0 37.8 4.8 40 8.3 40c9.5 0 15-10.7 20-21C31 27 33.7 38.4 43 38.4c3.8 0 7.6-2.9 9.3-5.1.4-.6.3-1-.2-.4-1.5 1.5-4.8 4.3-8.5 4.3-5.5 0-9.1-5.3-12.9-18.8 6.1-5 20.7-17 27.7-17 1.6 0 2.8.5 2.8 1.3s-1 1.7-1 2a.4.4 0 0 0 .2.2.4.4 0 0 0 .3.1c.5 0 1-.4 1.2-.8.4-.4.5-.9.5-1.4 0-1.3-1.9-2.4-4-2.4Z"></path>
              <path d="m128.2 18.3-.4.4c-1 1.8-5.4 6.8-7.9 6.8-.6 0-1-.6-1-1.3 0-2.5 2.6-5.6 2.6-6.5 0-.2-.3-.4-.6-.4-1 0-1.3.2-2 1.2-1.3 2-3.6 7-5.9 7-1.7 0-2.7-3.4-3-6.4 1.7-1.4 3.6-2.7 5.6-3.8.6-.3.3-1.2-.3-1.2-.4 0-5.7 4-7.1 5 2.5-5.2 5.8-12.3 7.7-15.4.6-.9 2-2.4 2-3.3 0-.2 0-.4-.3-.4-1.7 0-4.7 5.9-12.4 11.5-.9.7-3.5 2.4-3.7 4.5-.8 0-1.6.2-2.3.6a4 4 0 0 0-1.5 1.9c-1.6 3.8-4.9 6.8-6.4 6.8-.4 0-.5-.3-.5-.6 0-1.5 2.4-5 2.4-6.2a1.2 1.2 0 0 0-.4-.9 1.1 1.1 0 0 0-.9-.3c-1.6 0-3 1.1-4.7 2.9l.8-2.3c0-.3-.2-.6-.5-.6s-.7.1-1 .3l-.7.7c-1.8 3-5.5 7-6.9 7-.3 0-.4-.2-.4-.6 0-1.4 2.8-6.2 3-6.8.2-.5-.2-.6-.5-.6a2 2 0 0 0-1.6.8l-.1.3a23.3 23.3 0 0 1-8.4 6.7c2-1.6 3.8-4 3.8-6 0-.5-.2-1-.5-1.3-.4-.4-.8-.6-1.3-.6h-.2c-1.4.1-2.7.7-3.8 1.7l1.8-3.4c.1-.3-.2-.6-.5-.6a2.2 2.2 0 0 0-1.8 1 93 93 0 0 0-3 6.5 6.5 6.5 0 0 1-4 2.8c-.3 0-.4-.2-.4-.6 0-1.5 2.4-5 2.4-6.2 0-.3-.1-.6-.3-.8-.3-.3-.6-.4-.9-.4-1.7 0-2.9 1-4.6 2.7.4-1.7-.1-2.7-1.3-2.7-1.6 0-3.3 1.5-4.7 3.2.3-.6.5-1.2.5-2 0-.2 0-.5-.2-.7a1 1 0 0 0-.7-.4H51c-3.7 0-6.2 8.5-10.5 8.5-.4 0-.8-.1-1.2-.4-.3-.3-.5-.7-.5-1.2V23c2.8-.3 7.1-3 7.1-5.5 0-.8-.7-1.3-1.7-1.3-3.4 0-7.7 4.6-7.7 7.7 0 .8.2 1.6.8 2.2.5.6 1.2 1 2 1h.2c3.1 0 5.7-3 7.6-5.6 1.1-1.6 2.1-2.5 2.4-2.5.1 0 .2 0 .2.2 0 1-2.6 6.5-2.6 7.1 0 .3.3.3.6.3 1.2 0 1.6-.6 2.4-2.2.7-1.6 3.5-5.8 5-5.8.4 0 .5.3.5.6 0 1.6-2.8 6.4-2.8 7.2 0 .3.3.3.6.3 1.4 0 1.8-1.2 3-3.5 1-2.4 3.5-4.6 4.4-4.6.3 0 .3.1.3.4 0 .8-2.5 4.8-2.5 6.4 0 .8.6 1.3 1.5 1.3 1.6-.2 3-1 4.2-2-3 7.2-4.7 12.2-11.2 15.6-.2.1-.2.3 0 .3.6 0 1-.3 1.6-.5 6-3.1 8.4-7.5 11.2-14 2-4.4 3.9-7.8 5.9-7.8.5 0 .7.5.7 1 0 1.2-1.8 4-3.6 5.3-1 .8-1.6 1-1.6 1.5 0 .4.3.5.7.5 2.6 0 6.4-2.2 9.3-5-.6 1-1 2.3-1.2 3.5 0 .4.2.8.4 1 .3.4.6.5 1 .5h.2c2 0 4.7-2.6 7-5.4a50 50 0 0 0-2.2 5.2c0 .4.4.4.7.4 1.4 0 1.8-1.2 3-3.6 1-2.3 3.5-4.5 4.5-4.5.2 0 .3 0 .3.3 0 .9-2.5 4.9-2.5 6.4 0 .9.6 1.3 1.5 1.3 2.6 0 5.8-3 7.7-6.4.6 1.3 2 2.6 2 4a1.5 1.5 0 0 1-.4 1 1.4 1.4 0 0 1-1 .4c-1.5 0-1.6-1.3-2.2-1.3-.7 0-1 .3-1 .7 0 .8 1.6 1.6 2.7 1.6 1 0 1.9-.3 2.6-1 .7-.6 1.1-1.5 1.2-2.5 0-2-2.3-3.4-2.3-5 0-.7.5-1.3 1.6-1.3.4 0 .8.2 1.2.4.4.5 1 .7 1.7.7.8 0 1.6-.3 2.2-.8.4-.4.2-.7-.1-.5-.4.2-.9.3-1.3.3a1.2 1.2 0 0 1-1-.2 1.3 1.3 0 0 1-.5-.9v-.4c0-2.3 4.7-4.2 9-8.7-2.7 5.2-7.1 14.9-8.4 17.6l-.7 2c0 .3.2.3.6.3.8 0 1.4-.3 2-1.6l2.5-5.4c.5 4.2 2 7 4.4 7 1.6 0 3-1.1 4.4-3.1 0 2 1 3.1 2.7 3.1 3.6 0 8.9-6.2 8.9-8.2v-.1a.2.2 0 0 0-.1 0v-.1h-.2Zm-84.8-.8c.3 0 .5.2.5.6 0 1.2-2.7 3.8-5 4.3.9-2.6 3.4-4.9 4.5-4.9ZM49.9 51.9h3.4v-1H51v-1h2.1v-1h-2V48h2.2v-.9h-3.4v4.8Zm-7-4.8h-1.2v4.8h3v-1h-1.8V47Zm16.5 1.6c0-.4-.1-.8-.4-1a2 2 0 0 0-1.5-.6h-2V52h1.2v-1.7h.7l1 1.7h1.2l-1-2c.2 0 .5-.2.6-.4l.3-.9Zm-1.7.6h-1V48h1c.2 0 .6 0 .6.6 0 .7-.5.7-.6.7Zm-11.2 2.6h1V47h-1v4.8ZM27.4 47c-.5 0-1 .2-1.3.5-.4.3-.7.6-.9 1.1a2.6 2.6 0 0 0 .6 2.7c.3.3.7.6 1.2.7.5 0 1 0 1.4-.2.4-.2.8-.5 1-1a2.6 2.6 0 0 0-.3-3c-.5-.5-1-.8-1.7-.8Zm0 4c-.4 0-.7-.2-1-.5a1.6 1.6 0 0 1 0-2c.1-.3.4-.5.8-.6.3 0 .7.1 1 .4.3.2.5.6.6 1v.1a1.5 1.5 0 0 1-.4 1.1 1.4 1.4 0 0 1-1 .5Zm-5.2-2.1h-1.7V47h-1.1V52h1.1v-2h1.7v2h1.1V47h-1.1v1.8Zm8.7-.8h1.2v3.8h1.2V48h1.1v-1H31v1Zm5.2 3.8h3.4v-1h-2.2v-1h2v-1h-2V48h2.2v-.9h-3.4v4.8Zm54.9 0h3.4v-1H92v-1h2.1v-1h-2V48h2.2v-.9H91v4.8Zm14.9-2.5.4-.4.2-.6-.1-.5a1.1 1.1 0 0 0-.7-.6 1.8 1.8 0 0 0-1.6.2l-.3.4v.5l.1.6.5.4a1 1 0 0 0-.7.4l-.2.8.1.6.4.4.5.2.6.1h.6l.5-.3a1.2 1.2 0 0 0 .5-1c0-.3 0-.5-.2-.8l-.6-.4Zm-1.2-1.3a.6.6 0 0 1 .8 0 .5.5 0 0 1 .2.4.5.5 0 0 1-.2.3.6.6 0 0 1-.4.2c-.1 0-.3 0-.4-.2l-.1-.3.1-.4Zm.9 2.7a.6.6 0 0 1-.5.1.6.6 0 0 1-.5-.1v-.2l-.1-.2a.6.6 0 0 1 .1-.5l.5-.2.4.2a.6.6 0 0 1 .2.5v.2l-.2.2Zm-5.5-3a2 2 0 0 1-.8.2v.8c.3 0 .7 0 1-.2V52h1v-4.6h-.8c0 .2-.2.4-.4.5Zm11-.1-.6-.3c-.4-.2-.9-.2-1.3 0-.2 0-.3.1-.5.3-.1.1-.3.3-.3.5l-.2.6c0 .3 0 .6.2.8l.6.6.6.1h.3l-1 1.6h1.1l1-1.5.2-.4a2.3 2.3 0 0 0 .3-.7v-.5l-.1-.6-.4-.5Zm-.7 1.7-.6.2c-.1 0-.3 0-.5-.2a.8.8 0 0 1-.2-.5.7.7 0 0 1 .2-.5.7.7 0 0 1 1 0 .7.7 0 0 1 .2.5.7.7 0 0 1-.1.5Zm2.5-2v.8h2.2l-1.8 3.6h1l1.8-3.7v-.8H113Zm-48.4 1.8c-.4-.2-.9-.3-1.4-.3-.2 0-.5 0-.5-.5 0-.3.2-.4.6-.4a1.6 1.6 0 0 1 1.1.4l.8-.6a2.6 2.6 0 0 0-1.8-.8c-.8 0-1.9.3-1.9 1.6 0 1 1 1.2 1.3 1.3l.8.1c.2 0 .7.1.7.5s-.4.6-.8.6l-.9-.3-.3-.2-.9.6a2.4 2.4 0 0 0 2 .8 2.2 2.2 0 0 0 1.7-.7c.2-.2.4-.6.4-1 0-.2 0-.5-.2-.7-.2-.2-.4-.4-.7-.4ZM76 51.8H77v-4.7H76v4.7Zm11.4-.8c-.6 0-1.1-.5-1.1-1.6 0-.8.3-1.5 1-1.5.3 0 .5 0 .7.2.2.1.3.3.3.5l1-.5-.8-.9a2 2 0 0 0-1.1-.3c-.6 0-1.2.3-1.6.7-.4.5-.7 1.1-.6 1.7v.1c0 .5 0 .9.2 1.3l.8 1a2.1 2.1 0 0 0 2.4-.2l.7-.8-.9-.4c0 .2-.2.3-.4.5a1 1 0 0 1-.6.2ZM73 49.2l-1.4-.3c-.2 0-.6-.1-.6-.5 0-.3.2-.5.7-.5a1.6 1.6 0 0 1 1 .5l.9-.6a2.6 2.6 0 0 0-2-.8c-.7 0-1.7.3-1.7 1.6 0 1 1 1.2 1.2 1.3l.8.1c.3 0 .8.1.8.5s-.4.5-.9.5a1.9 1.9 0 0 1-1.2-.4l-.8.6a2.4 2.4 0 0 0 2 .8 2.1 2.1 0 0 0 1.6-.7c.3-.3.4-.7.4-1 0-.3 0-.5-.2-.7-.1-.3-.3-.4-.6-.5Zm9 1c-.1-.5-.2-.7-.6-1.4l-1-1.8h-1.1v4.8h1v-3l.8 1.6.8 1.5h1.1V47h-1v3Z"></path>
            </svg>
          </div>

          <div className="uppercase flex flex-row gap-14 items-center font-semibold text-[15px]">
            <span className="tracking-widest">Sign In</span>
            <div
              className={`cursor-pointer p-3 pr-4 pl-4 w-auto items-center ${
                isScrolled == true
                  ? "bg-[#b5A191] text-white"
                  : "bg-[transparent]"
              } justify-center border border-[#b5A191] flex`}
            >
              <span className="hidden sm:hidden lg:flex tracking-widest">
                Book Now
              </span>
              <span className="hidden sm:flex lg:hidden">Book</span>
            </div>
          </div>
        </motion.div>
        <div className="flex-col relative z-10 items-center justify-center w-full h-full place-content-center flex bg-clip-content">
          <div className="mt-[-8%] text-white text-center flex flex-col gap-[10px]">
            <h1 className="text-[36px] lg:text-[70px] font-bold lg:font-normal">
              Kempinski Hotels
            </h1>
            <span className="font-normal lg:text-[20px]">
              Destinations to discover,<br className="flex lg:hidden"></br>{" "}
              journeys to <br className="hidden lg:flex"></br>remember
            </span>
          </div>
          <div className="p-4 absolute bottom-2 animate-bounce duration-800">
            <svg
              width="76"
              height="76"
              className="cursor-pointer stroke-current text-white"
              fill="none"
              viewBox="0 0 76 76"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m22.7998 30.3996 15.2 15.2 15.2-15.2"
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh]"></div>
    </>
  );
}

export default App;
