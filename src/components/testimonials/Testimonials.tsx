"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialsClients {
  name: string;
  comment: string;
  stars: number;
  date: string;
  avatar: string;
}

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const testimonios: TestimonialsClients[] = [
    {
      name: "Gloria Reluz Flores",
      comment:
        "Trabajar con Jean es interactuar con un profesional competente que ayuda a comprender los procesos en función de la calidad. En tal sentido recomiendo sus servicios en la búsqueda de resultados sobresalientes",
      stars: 4,
      date: "20-10-23",
      avatar: "/avatar1.jpg",
    },
    {
      name: "Mikel Honores Agapito",
      comment:
        "He laborado con Jean, es un profesional excepcional, tiene mucha experiencia en educación, metodología y didáctica de la investigación. Estamos seguros que tu tiempo e inversión están en buenas manos.",
      stars: 5,
      date: "20-10-23",
      avatar: "/avatar3.jpg",
    },
    {
      name: "Verónica Agapito Reluz",
      comment:
        "Conocí a Jean en una escuela de posgrado, es muy comprometido en lo que se propone, conoce como funciona todo el proceso académico.",
      stars: 5,
      date: "20-10-23",
      avatar: "/avatar2.jpg",
    },
    {
      name: "Roberto Ayasta Reluz",
      comment:
        "Es indiscutible su profesionalismo; mi tesis cumplió al 100% con las Normas APA gracias a ellos.",
      stars: 4,
      date: "20-10-23",
      avatar: "/avatar5.jpg",
    },
    {
      name: "Martha Mendoza Portuguez",
      comment:
        "Súper recomendado, todo fue a tiempo y forma, y siempre mantienen contacto contigo lo que crea más confianza 🙂",
      stars: 5,
      date: "20-10-23",
      avatar: "/avatar6.jpg",
    },
  ];

  return (
    <section className="bg-zinc-100 py-16">
      <section className="max-w-7xl m-auto px-4">
        <div className="flex flex-col md:flex-row h-96 justify-between md:items-center">
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <Carousel
              opts={{
                align: "center",
              }}
              orientation="vertical"
              className="w-full max-w-md"
              plugins={[plugin.current]}
              // onMouseEnter={plugin.current.stop}
              // onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-mt-1 h-[220px] md:h-[300px]">
                {testimonios.map((testimonio, index) => (
                  <CarouselItem
                    key={index}
                    className="pt-1 md:basis-1/2"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-start p-6 space-y-2">
                          <div className="flex items-center gap-x-2">
                            <Image
                              src={testimonio.avatar}
                              alt="avatar"
                              width={50}
                              height={50}
                              className="rounded-full"
                            ></Image>
                            <div>
                              <h6 className="text-xs font-bold">
                                {testimonio.name}
                              </h6>
                              <p className="text-xs text-gray-500">
                                {testimonio.date}
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(testimonio.stars)].map((_, i) => (
                              <FaStar
                                key={i}
                                className="text-yellow-500"
                              />
                            ))}
                          </div>
                          <p className="text-sm">{testimonio.comment}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h3 className="text-3xl font-black m-auto max-w-sm text-center">
              Testimonios que nos llenan de orgullo
            </h3>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Testimonials;
