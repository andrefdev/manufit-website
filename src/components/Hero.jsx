import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import heroimage from "../assets/images/heroimage.png";
import dashboard from "../assets/images/dashboard.jpg";
import background from "../assets/images/triangulo.svg";
import resultados from "../assets/images/resultados.png";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen  flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-10 md:pt-12 lg:pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold flex justify-left">
            Manufit
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, x: -200 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xlxl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className=" md:hidden shadow-lg">Libera</span>{" "}
            <span className="hidden md:inline shadow-lg">Libera</span>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative flex justify-center ">
                <img
                  src={heroimage}
                  alt="123"
                  className="w-3/5 2xl:w-[700px] mx-auto absolute z-0 lg:top-6 xl:top-0 xl:w-[600px] md:w-[500px] mt-40 xl:mt-0 md:mt-0 lg:mt-0"
                />
              </div>
            </motion.div>
          </div>
          <div className="mt-2 sm:mt-2 text-4xl w-screen sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide    px-8 sm:px-20 md:px-24 lg:px-24 flex flex-col gap-2 sm:flex-row mb-24 sm:mb-40 justify-center">
            <p className="text-white z-10">Tu verdadero</p>

            <p className="text-customPrimary z-10 rounded-2xl">potencial</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/*<div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat laoreet lacinia. Phasellus
  </div>*/}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex z-10 flex-col gap-2  sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <div
              className="custom-button-colored z-10 mt-10 lg:top-0 w-40 lg:w-80 sm:w-52 h-10 lg:h-15 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
            >
              COMENZAR
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center lg:mt-20">
            <img
              src={resultados}
              alt="123"
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl  custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
