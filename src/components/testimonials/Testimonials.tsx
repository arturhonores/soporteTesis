"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

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
}

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const testimonios: TestimonialsClients[] = [
    {
      name: "Gloria Reluz Flores",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic reiciendis molestias tenetur totam delectus velit.",
      stars: 4,
      date: "20-10-23",
    },
    {
      name: "Mikel Honores Agapito",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic reiciendis molestias tenetur totam delectus velit.",
      stars: 5,
      date: "20-10-23",
    },
    {
      name: "Verónica Agapito Reluz",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic reiciendis molestias tenetur totam delectus velit.",
      stars: 4,
      date: "20-10-23",
    },
    {
      name: "Roberto Ayasta Reluz",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic reiciendis molestias tenetur totam delectus velit.",
      stars: 4,
      date: "20-10-23",
    },
    {
      name: "Martha Mendoza Portuguez",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic reiciendis molestias tenetur totam delectus velit.",
      stars: 4,
      date: "20-10-23",
    },
  ];

  return (
    <section className="bg-zinc-100 py-16x">
      <section className="max-w-7xl m-auto px-4">
        <div className="flex flex-col md:flex-row h-96 items-center border border-orange-300">
          <div className="bg-red-400 border-4 border-yellow-500 w-full md:w-1/2 flex justify-center">
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-full max-w-md"
              plugins={[plugin.current]}
              // onMouseEnter={plugin.current.stop}
              // onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-mt-1 h-[300px]">
                {testimonios.map((testimonio, index) => (
                  <CarouselItem
                    key={index}
                    className="pt-1 md:basis-1/2"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center p-6">
                          <h6>{testimonio.name}</h6>
                          <p></p>
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
          <div className="bg-green-500 w-full md:w-1/2 border-4 border-cyan-600">
            <h3 className="text-3xl font-black text-center">
              Testimonios que nos llegan de orgullo
            </h3>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Testimonials;
