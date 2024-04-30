/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollBasedAnimation = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(80, 1, 245)", "rgb(1, 245, 13)"]
  );

  return (
    <>
      <div className="">
        <motion.div
          className="sticky top-0 w-[100vw] h-[10px] rounded-lg"
          style={{
            // scaleX: scrollYProgress,
            background: background,
            scaleX,
            transformOrigin: "left",
          }}
        ></motion.div>
        <div className="max-w-[100vw] m-auto p-[1.2rem] flex gap-[10px] flex-col">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit impedit neque cum labore rem magni dolorem magnam ex
            molestias expedita maiores, iure ad distinctio repudiandae beatae
            quasi minima eveniet molestiae? Magni atque amet quia harum vero
            voluptatum nisi? Iusto distinctio suscipit nihil sapiente nam
            reiciendis ipsum necessitatibus alias aliquid doloribus! Eligendi
            quod voluptatum voluptas non itaque. Qui doloremque veritatis natus.
          </p>
        </div>
      </div>
    </>
  );
};

export default ScrollBasedAnimation;
