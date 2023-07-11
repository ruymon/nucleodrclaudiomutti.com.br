import { CURRENT_YEAR } from "@/constants/date";
import { footerSocials, footerCopyright } from "@/helpers/footer";
import { Logo } from "../brand/Logo";
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

            <div className="flex items-center divide-x-2 divide-gray-200">
            { footerCopyright.slogan.map((slogan, index) => <Paragraph accentColor="gray-light">{ slogan }</Paragraph> )}
            </div>

            <div className="flex flex-col">
              <Paragraph accentColor="gray-light">{ footerCopyright.copyright }</Paragraph>
              <Paragraph accentColor="gray-light" size="small">{ footerCopyright.representative }</Paragraph>
              <Paragraph accentColor="gray-light" size="small">{ footerCopyright.rights }</Paragraph>
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
