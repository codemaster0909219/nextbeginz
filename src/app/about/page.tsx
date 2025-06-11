import { Header } from "@/components/Header";
import { Hero } from "@/components/about/Hero";
import { AboutUs } from "@/components/about/AboutUs";
import { Mission } from "@/components/about/Mission";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";


export default function About() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <Hero />
        <AboutUs />
        <Mission />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
