import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Products from "@/components/home/Products";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

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
