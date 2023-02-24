import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Planes
              </h2>
              <p className="mb-6 text-customGrayText">
                (sujeto a disponibilidad de cupos)
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    4 semanas
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $50
                    </div>
                  </div>

                  <ul className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    <li>
                      <p>- Consultas 24/7 via whatsapp</p>
                      <p>
                        - Rutina de entrenamiento completamente personalizada
                      </p>
                      <p>
                        - Dieta personalizada según tus requerimientos y gustos
                      </p>
                    </li>
                  </ul>

                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Comenzar
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    8 semanas
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $80
                    </div>
                  </div>
                  <ul className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    <li>
                      <p>- Consultas 24/7 via whatsapp</p>
                      <p>
                        - Rutina de entrenamiento completamente personalizada
                      </p>
                      <p>
                        - Dieta personalizada según tus requerimientos y gustos
                      </p>
                      <p>- Chequeos semanales</p>
                    </li>
                  </ul>

                  <div
                    className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Comenzar
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    12 semanas
                  </h4>
                  <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    $100
                  </div>
                  <ul className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    <li>
                      <p>- Consultas 24/7 via whatsapp</p>
                      <p>
                        - Rutina de entrenamiento completamente personalizada
                      </p>
                      <p>
                        - Dieta personalizada según tus requerimientos y gustos
                      </p>
                      <p>- Chequeos semanales</p>
                      <p>- Entrena conmigo una vez por semana</p>
                    </li>
                  </ul>

                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Comenzar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
