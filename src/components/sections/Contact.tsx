import { contact } from "@/helpers/contact";
import { Button } from "../primitives/Button";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";

interface ContactSectionProps {};

export function ContactSection({}: ContactSectionProps) {
  return (
    <section id="contact" className="wrapper flex flex-col lg:flex-row lg:gap-20 gap-16 my-24">
      <aside className="w-full lg:max-w-sm flex flex-col gap-8 items-center sm:items-start text-center sm:text-left">
        <Heading>Entre em contato com a gente!</Heading>

        <address className="flex flex-col gap-4">
          {contact.map(({ values, icon }, index) => (
            <Paragraph key={index} className="flex items-center gap-2 break-words flex-col sm:flex-row">
              { icon }
              { values.map(value => value) }
            </Paragraph>
          ))}
        </address>

        <Button variant="outline" className="w-full lg:w-fit">
          AGENDE SUA CONSULTA
        </Button>
      </aside>

      <figure className="lg:flex-1 flex w-full aspect-square lg:aspect-auto bg-gray-200 items-center justify-center rounded-xl">
        <h1>MAPA</h1>
      </figure>
    </section>
  );
};
