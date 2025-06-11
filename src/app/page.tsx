import { Header } from "@/components/Header";
import { Hero } from "@/components/home/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Service } from "@/components/Services";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <Hero />
        <LogoTicker />
        <Service />
        
        <Testimonials/>
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
