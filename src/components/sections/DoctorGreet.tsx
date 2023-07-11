"use client";

import { CaretLeft, CaretRight } from "@/assets/Icons";
import { doctors } from "@/helpers/doctors";
import { cn } from "@/lib/utils";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from "react";
import { Section } from "react-scroll-section";
import { Button } from "../primitives/Button";
import { DoctorGreetCard } from "../primitives/DoctorGreetCard";


interface DoctorGreetSectionProps {};

// TODO Refactor this component

export function DoctorGreetSection({}: DoctorGreetSectionProps) {
  const [isAtBeginning, setIsAtBeginning] = useState(true);


  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    slides: { spacing: 64 },
    defaultAnimation: {
      duration: 1000
    },
    slideChanged(e) {
      setIsAtBeginning(slider?.current?.track.distToIdx(0) === 0);
    }
  }, []);

  return (
    <Section id="greet" className="wrapper xl:relative flex flex-col gap-8 mt-28">
      <div className="xl:absolute xl:wrapper flex items-center gap-2 xl:gap-0 xl:justify-between bg-transparent xl:pointer-events-none xl:z-10 xl:inset-0">
        <Button
          size="icon"
          onClick={() => slider.current?.prev()}
          disabled={isAtBeginning}
          className="xl:pointer-events-auto xl:-ml-6"
        >
          <CaretLeft className="xl:w-7 xl:h-7 w-4" />
        </Button>

        <Button
          size="icon"
          onClick={() => slider.current?.next()}
          disabled={!isAtBeginning}
          className="xl:pointer-events-auto xl:-mr-6"
        >
          <CaretRight className="xl:w-7 xl:h-7 w-4" />
        </Button>
      </div>

      <div className="keen-slider" ref={ref}>
        {doctors.map((doctor) => <DoctorGreetCard key={doctor.registration} {...doctor} />)}
      </div>

      <div className="flex items-center xl:self-center gap-2">
        <div className={cn("w-1.5 h-1.5 rounded-full", isAtBeginning ? 'bg-gray-400' : 'bg-gray-200')}></div>
        <div className={cn("w-1.5 h-1.5 rounded-full", isAtBeginning ? 'bg-gray-200' : 'bg-gray-400')}></div>
      </div>

    </Section>
  );
};
