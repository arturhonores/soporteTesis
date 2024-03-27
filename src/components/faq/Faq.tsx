import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <h2 className="text-3xl font-black text-center">Tienes dudas</h2>
      <div className="max-w-4xl mx-auto px-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              ¿Cuál es la experiencia y formación académica de sus asesores?
            </AccordionTrigger>
            <AccordionContent>
              Todo nuestros asesores son investigadores RENACYT, profesionales
              destacados con experiencia en el dictado de catedra de tesis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              ¿Cómo funciona el proceso de asesoramiento de tesis?
            </AccordionTrigger>
            <AccordionContent>
              El acompañamiento es personalizado (virtual), previa
              coordinaciones tendrá reuniones de acuerdo a un Plan de trabajo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              ¿Pueden ayudarme en todas las etapas de mi tesis, desde la
              planificación hasta la defensa?
            </AccordionTrigger>
            <AccordionContent>
              Nuestro asesores lo acompañarán en todas las etapas de la Tesis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              ¿Cuál es el tiempo estimado de respuesta y disponibilidad para las
              consultas?
            </AccordionTrigger>
            <AccordionContent>
              En nuestro Plan de trabajo tenemos reuniones virtuales de
              asesoramiento programadas durante el desarrollo de su tesis, cómo
              también resolvemos cualquier consulta en el plazo de 24h.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              ¿Qué métodos de comunicación utilizan para la asesorías,
              consultas, reuniones?
            </AccordionTrigger>
            <AccordionContent>
              Utilizamos WhatsApp para una comunicación rápida y efectiva de las
              consultas, como Zoom para las asesorías y reuniones previamente
              agendadas en el Plan de Trabajo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              ¿Los asesores tiene paciencia, dado que uno no tiene mucho
              conocimiento?
            </AccordionTrigger>
            <AccordionContent>
              Si, nuestros asesores tienen capacitación en habilidades blandas,
              experiencia en el dictado de clases, empatía, paciencia y
              compromiso con sus estudiantes y profesión.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
