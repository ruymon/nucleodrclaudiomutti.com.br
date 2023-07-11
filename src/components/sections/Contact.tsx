"use client";

import { contact } from "@/helpers/contact";
import { Button } from "../primitives/Button";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";

interface ContactSectionProps {};

export function ContactSection({}: ContactSectionProps) {
  return (
    <section id="contact" className="wrapper flex gap-20 mt-24">
      <aside className="w-full max-w-sm flex flex-col gap-8">
        <Heading>Entre em contato com a gente!</Heading>

        <div className="flex flex-col gap-4">
          {contact.map(({ label, value, icon }, index) => (
            <div key={index} className="flex items-center gap-2">
              { icon }
              <Paragraph>{ value }</Paragraph>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full lg:w-fit">
          AGENDE SUA CONSULTA
        </Button>
      </aside>

      <figure className="flex-1 flex w-full bg-gray-200 items-center justify-center rounded-xl">
        <h1>MAPA</h1>
      </figure>
    </section>
  );
};
