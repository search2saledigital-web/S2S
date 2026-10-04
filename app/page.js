"use client";
import Image from "next/image";
import Hero from "./compoents/Hero";
import About from "./compoents/About";
import Service from "./compoents/Service";
import CTA from "./compoents/CTA";
import Testimonials from "./compoents/Testimonial";
import Faq from "./compoents/Faq";
import WhyChooseAndProcess from "./compoents/WhyChooseAndProcess";
import CitySection from "./compoents/CitySection";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <About />
      <WhyChooseAndProcess />
      <Testimonials />
      <Faq />
      <CTA />
      <CitySection />
    </>
  );
}
