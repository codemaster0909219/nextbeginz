import { Header } from "@/components/Header";
import { Hero } from "@/components/testimonial/Hero";
import { Content } from "@/components/testimonial/Content";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";


export default function Service() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <Hero />
        <Content />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
