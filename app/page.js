import Image from "next/image";
import Navbar from "./compoents/Navbar";
import Hero from "./compoents/Hero";
import About from "./compoents/About";
import Service from "./compoents/Service";
import Footer from "./compoents/Footer";
import CTA from "./compoents/CTA";
import Testimonials from "./compoents/Testimonial";
import Faq from "./compoents/Faq";

export default function Home() {
  return (
    <>
    <Hero/>
    <Service/>
    <About/>
    <Testimonials/>
    <Faq/>
    <CTA/>

    </>
  );
}
