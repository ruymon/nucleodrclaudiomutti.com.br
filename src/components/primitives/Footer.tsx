import { footerCopyright, footerSocials } from "@/helpers/footer";
import { Logo } from "../brand/Logo";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { SocialMediaIconButton } from "./SocialMediaIconButton";

interface FooterProps {};

export function Footer({}: FooterProps) {
  return (
    <section className="flex mt-48 border-t border-gray-100">
      <footer className="w-full flex flex-col bg-gray-50">

        <div className="wrapper flex py-10 items-center justify-between">
          <div className="flex flex-col gap-6">
            <Logo size="lg" />

            <div className="flex items-center divide-x divide-gray-300">
            { footerCopyright.brandPillars.map((pillar, index) => {
              return (
                <Heading 
                  key={index} 
                  accentColor="gray-light"
                  fontWeight="medium"
                  as="h4"
                  className="px-4 first:pr-4 first:pl-0 last:pl-4 last:pr-0"
                >{ pillar }</Heading>
              )
            })}
            </div>

            <div className="flex flex-col gap-2">
              <Paragraph accentColor="gray-light">{ footerCopyright.copyright }</Paragraph>
              <div className="flex flex-col">
                <Paragraph accentColor="gray-light" size="small">{ footerCopyright.representative }</Paragraph>
                <Paragraph accentColor="gray-light" size="small">{ footerCopyright.rights }</Paragraph>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full bg-gray-800 py-4">
          <div className="wrapper flex items-center gap-4">
            { footerSocials.map(({ href, icon }, index) => <SocialMediaIconButton key={index} href={href} icon={icon} />)}
          </div>
        </div>

      </footer>
    </section>
  );
};
