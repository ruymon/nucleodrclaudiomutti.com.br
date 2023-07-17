import { contact } from "@/helpers/contact";
import { Map } from "../compositions/Map";
import { ScheduleAppointmentButton } from "../compositions/ScheduleAppointmentButton";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";

interface ContactSectionProps {};

export function ContactSection({}: ContactSectionProps) {
  return (
    <section id="contact" className="wrapper flex flex-col lg:flex-row lg:gap-20 gap-16 py-24">
      <aside className="w-full lg:max-w-sm flex flex-col gap-8 items-center sm:items-start text-center sm:text-left">
        <Heading>Entre em contato com a gente!</Heading>

        <address className="flex flex-col gap-2">
          {contact.map(({ values, icon }, index) => (
            <Paragraph key={index} className="flex items-center gap-2 break-words flex-col sm:flex-row group">
              {icon}
              {values.map(value => value)}
            </Paragraph>
          ))}
        </address>

        <ScheduleAppointmentButton customLabel="Agendar uma visita" variant="outline" className="w-full lg:w-fit" />
      </aside>

      <figure className="lg:flex-1 flex w-full h-80 lg:h-auto lg:aspect-auto bg-gray-200 items-center justify-center rounded-xl">
        <Map />
      </figure>
    </section>
  );
};
