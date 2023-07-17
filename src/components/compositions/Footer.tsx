import { footerCopyright, footerSocials } from "@/helpers/footer";
import { Logo } from "../brand/Logo";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { SocialMediaIconButton } from "./SocialMediaIconButton";

interface FooterProps {};

export function Footer({}: FooterProps) {
  return (
    <footer className="flex border-t border-gray-100">
      <div className="w-full flex flex-col bg-gray-50">

        <div className="wrapper flex py-10 items-center justify-between">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-10 md:gap-6 w-full">

            <Logo size="lg" className="hidden sm:flex" />
            <Logo className="flex sm:hidden" />



            <div className="w-full flex flex-col md:flex-row items-center md:divide-x md:divide-gray-300 gap-3 md:gap-0">
              {footerCopyright.brandPillars.map((pillar, index) => {
                return (
                  <Heading
                    key={index}
                    accentColor="gray-light"
                    fontWeight="medium"
                    as="h4"
                    className="md:px-4 md:first:pr-4 md:first:pl-0 md:last:pl-4 md:last:pr-0 md:w-fit"
                  >{pillar}</Heading>
                )
              })}
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <Paragraph accentColor="gray-light">{footerCopyright.copyright}</Paragraph>
              <div className="flex flex-col">
                <Paragraph accentColor="gray-light" size="small">{footerCopyright.representative}</Paragraph>
                <Paragraph accentColor="gray-light" size="small">{footerCopyright.rights}</Paragraph>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full bg-gray-800 py-4">
          <div className="wrapper flex items-center flex-col-reverse gap-6 md:gap-4 justify-center md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              {footerSocials.map(({ href, icon }, index) => <SocialMediaIconButton key={index} href={href} icon={icon} />)}
            </div>

            <ScrollToTopButton />
          </div>
        </div>

      </div>
    </footer>
  );
};
