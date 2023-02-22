import { useState } from "react";
import { motion } from "framer-motion";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const SwiperJs = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative bg-gray-800 w-full h-[40rem]">
            <div className="absolute left-[-2rem] md:left-[10rem] xl:left-[15rem] top-40 p-20 z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-7xl font-bold text-customPrimary ">
                    {" "}
                    DESAFIA TUS
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <p className="text-7xl font-bold text-customPrimary ">
                    {" "}
                    LIMITES
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="absolute left-[40rem] top-0">
              <img
                src={image2}
                alt="123"
                className="w-3/5 2xl:w-[700px] hidden lg:block flex-inline z-0 lg:top-6 xl:top-0 xl:w-[600px] md:w-[500px] justify-end"
              />
            </div>
            <div className="absolute top-[30rem] left-[3rem] md:left-[15rem] xl:left-[20rem]">
              <a href="#" className="button bg-customPrimary p-4 rounded-lg">
                <span className="text-xl font-bold text-white">LEER MÁS</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-gray-800 w-auto h-[40rem]">
            <div className="absolute left-[-2rem] md:left-[10rem] xl:left-[15rem] top-40 p-20 z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-7xl font-bold text-customPrimary ">
                    {" "}
                    PONTE FUERTE
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <p className="text-7xl font-bold text-customPrimary "> HOY</p>
                </motion.div>
              </div>
            </div>
            <div className="absolute left-[40rem] top-0">
              <img
                src={image3}
                alt="123"
                className="w-3/5 2xl:w-[700px] hidden lg:block flex-inline z-0 lg:top-6 xl:top-0 xl:w-[600px] md:w-[500px] justify-end"
              />
            </div>
            <div className="absolute top-[30rem] left-[3rem] md:left-[15rem] xl:left-[20rem]">
              <a href="#" className="button bg-customPrimary p-4 rounded-lg">
                <span className="text-xl font-bold text-white">LEER MÁS</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-gray-800 w-full h-[40rem]">
            <div className="absolute left-[-2rem] md:left-[10rem] xl:left-[15rem] top-40 p-20 z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-7xl font-bold text-customPrimary ">
                    {" "}
                    EXPLOTA TU
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <p className="text-7xl font-bold text-customPrimary ">
                      {" "}
                      POTENCIAL
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="absolute left-[40rem] top-0">
              <img
                src={image3}
                alt="123"
                className="w-3/5 2xl:w-[700px] hidden lg:block flex-inline z-0 lg:top-6 xl:top-0 xl:w-[600px] md:w-[500px] justify-end"
              />
            </div>
            <div className="absolute top-[30rem] left-[3rem] md:left-[15rem] xl:left-[20rem]">
              <a href="#" className="button bg-customPrimary p-4 rounded-lg">
                <span className="text-xl font-bold text-white">LEER MÁS</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
