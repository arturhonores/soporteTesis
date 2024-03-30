"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="bg-zinc-100">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-black text-center">Nuestros Servicios</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-around md:items-start gap-8 py-16">
          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-white rounded-lg text-center p-8 shadow-lg flex-1 min-h-80 flex flex-col justify-between items-center max-w-xs"
          >
            <Image
              src="/service1.svg"
              alt="service-icon"
              width={150}
              height={200}
            ></Image>
            <h3 className="text-2xl font-bold">Asesoría</h3>
            <p>
              Expertos en cada materia te ayudarán a organizar tus ideas y a
              presentar una investigación adaptada a lo que necesites.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-white rounded-lg text-center p-8 shadow-lg flex-1 min-h-80 flex flex-col justify-between items-center max-w-xs"
          >
            <Image
              src="/service2.svg"
              alt="service-icon"
              width={150}
              height={200}
            ></Image>
            <h3 className="text-2xl font-bold">Redacción</h3>
            <p>Elaboramos desde cero o retomamos tu proyecto.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.07 }}
            className="bg-white rounded-lg text-center p-8 shadow-lg flex-1 min-h-80 flex flex-col justify-center items-center max-w-xs"
          >
            <Image
              src="/service3.svg"
              alt="service-icon"
              width={150}
              height={200}
            ></Image>
            <h3 className="text-2xl font-bold">Correción</h3>
            <p>
              Nuestro equipo se encargará de la corrección y detección del
              plagio de tu proyecto universitario.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
