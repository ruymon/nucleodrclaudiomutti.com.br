"use client";

import { doctors } from '@/helpers/doctors';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from "react";
import { DoctorGreetCard } from '../compositions/DoctorGreetCard';
import { SliderArrowButton } from '../compositions/slider/SliderArrowButton';
import { ProgressDot } from '../primitives/ProgressDot';


interface DoctorGreetSectionProps {};

export function DoctorGreetSection({}: DoctorGreetSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderReady, setIsSliderReady] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: { spacing: 64 },
    defaultAnimation: { duration: 1000 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setIsSliderReady(true)
    },
  });

  return (
    <section id="greet" className="wrapper xl:relative flex flex-col gap-8 pt-28">
      {isSliderReady && instanceRef.current && (
        <div className="xl:absolute xl:wrapper flex items-center gap-2 xl:gap-0 xl:justify-between bg-transparent xl:pointer-events-none xl:z-10 xl:inset-0">
          <SliderArrowButton
            variant="left"
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <SliderArrowButton
            variant="right"
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
          />
        </div>
      )}

      <div className="keen-slider" ref={sliderRef}>
        {doctors.map((doctor) => <DoctorGreetCard key={doctor.registration} {...doctor} />)}
      </div>



      {isSliderReady && instanceRef.current && (
        <div className="flex items-center xl:self-center gap-2">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <ProgressDot
                key={idx}
                variant={currentSlide === idx ? 'active' : 'default'}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
              />
            )
          })}
        </div>
      )}
    </section>
  );
};
