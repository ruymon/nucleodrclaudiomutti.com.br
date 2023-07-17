"use client";

import { WhatsappLogo } from "@/assets/phosphor";
import { general } from "@/helpers/general";
import Link from "next/link";
import { Button, type ButtonProps } from "../primitives/Button";

interface ScheduleAppointmentButtonProps extends ButtonProps {
  hasWhatsappIcon?: boolean;
  customLabel?: string;
};

export function ScheduleAppointmentButton({ hasWhatsappIcon, customLabel, ...props }: ScheduleAppointmentButtonProps) {
  return (
    <Link href={general.whatsappApi} target="_blank">
      <Button {...props}>
        {hasWhatsappIcon && <WhatsappLogo size={20} className="shrink-0" />}
        {customLabel || "Agendar consulta"}
      </Button>
    </Link>
  );
};
