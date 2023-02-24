import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import heroimage from "../assets/images/heroimage.png";

import { CloseIcon } from "../assets/icons/CloseIcon";
import { ManufitLogo } from "../assets/logos/ManufitLogo";
import { WhatsappIcon } from "../assets/icons/WhatsappIcon";

export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex relative">
            <div className="w-1/2 hidden lg:inline">
              <img
                src={heroimage}
                alt="123"
                className="w-3/5 2xl:w-[20rem] mx-auto relative z-0 lg:top-6 xl:top-0 xl:w-[20rem] md:w-[15rem] mt-40 xl:mt-0 md:mt-0 lg:mt-0"
              />
            </div>
            <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
              <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                <div className="text-white mr-2 text-8xl">
                  <ManufitLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-3xl">
                  Manufit
                </div>
              </div>

              <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-white">
                Contáctame
              </h2>
              <h2 className="text-5xl font-bold tracking-normal text-customSecondary">
                Ahora
              </h2>
              <div className="flex flex-wrap -m-2">
                <div className="w-full sm:w-4/5 p-2 mx-auto">
                  <div className="flex grid-cols-2 mt-5">
                    <WhatsappIcon className="flex-col" />
                    <h2 className="text-3xl font-bold flex-col tracking-normal text-white">
                      +51 912 172 568
                    </h2>
                  </div>
                </div>
                <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                  <button
                    className="py-4 px-6 w-full text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#7765e6] transition ease-in-out duration-200"
                    type="button"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
            <div
              className="fixed top-4 right-4 z-50 w-4 h-4 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
