import Hero from "@/app/home/Hero";
import Stats from "@/app/home/Stats";
import Products from "@/app/home/Products";
import WhyUs from "@/app/home/WhyUs";
import Testimonials from "@/app/home/Testimonials";
import CTA from "@/app/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}
