import { Paragraph } from "@/components/primitives/Paragraph";
import { navbar } from "@/helpers/navbar";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { ScheduleAppointmentButton } from "../ScheduleAppointmentButton";
import { MobileNavbarItem } from "./MobileNavbarItem";

interface MobileNavbarContainerProps {};

export function MobileNavbarContainer({}: MobileNavbarContainerProps) {
  // useLockBody();
  const { handleScroll } = useSmoothScroll();

  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden">
      <div className="relative z-20 grid gap-6 bg-white border-y border-t-gray-100 border-b-gray-200 shadow-sm p-6">
        <Paragraph size="large" className="font-semibold">Menu</Paragraph>
        <nav className="flex flex-col gap-1">
          {navbar.map(({ title, id, ...props }, idx) => (
            <MobileNavbarItem 
              key={id}
              // TODO: Add current section isActive prop
              // isActive={idx===1}
              onClick={handleScroll}
              {...props}
            >
              {title}
            </MobileNavbarItem>
          ))}

        </nav>
        <ScheduleAppointmentButton variant="outline" className="flex w-full">AGENDAR CONSULTA</ScheduleAppointmentButton>
      </div>
    </div>
  );
};
