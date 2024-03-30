"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-zinc-100">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-black text-center pb-8">
          Nuestros Servicios
        </h2>
        <div className="flex flex-col items-center md:flex-row md:justify-around md:items-start gap-8 py-8">
          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-white rounded-lg text-center p-8 shadow-lg flex-1 min-h-80 flex flex-col justify-between items-center max-w-xs md:h-[380px]"
          >
            <Image
              src="/service1.svg"
              alt="service-icon"
              width={150}
              height={200}
            ></Image>
            <div>
              <h3 className="text-2xl font-bold">Asesoría</h3>
              <p>
                Expertos en cada materia te ayudarán a organizar tus ideas y a
                presentar una investigación adaptada a lo que necesites.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-white rounded-lg text-center p-8 shadow-lg flex-1 min-h-80 flex flex-col justify-between items-center max-w-xs md:h-[380px]"
          >
            <Image
              src="/service2.svg"
              alt="service-icon"
              width={150}
              height={200}
            ></Image>
            <div className="text-start">
              <h3 className="text-2xl font-bold text-center">Redacción</h3>
              <p>Elaboramos desde cero o retomamos tu proyecto.</p>
              <ul>
                <li className="flex items-center">
                  <FaChevronRight />
                  <span>Análisis de Resultados</span>
                </li>
                <li className="flex items-center">
                  <FaChevronRight />
                  <span>Anteproyecto</span>
                </li>
                <li className="flex items-center">
                  <FaChevronRight />
                  <span>Tesis</span>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-white rounded-lg text-center p-8 shadow-lg flex-1 min-h-80 flex flex-col justify-between items-center max-w-xs md:h-[380px]"
          >
            <Image
              src="/service3.svg"
              alt="service-icon"
              width={150}
              height={200}
            ></Image>
            <div>
              <h3 className="text-2xl font-bold">Correción</h3>
              <p>
                Nuestro equipo se encargará de la corrección y detección del
                plagio de tu proyecto universitario.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
