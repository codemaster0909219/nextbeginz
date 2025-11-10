import { Header } from "@/components/Header";
import { Hero } from "@/components/services/Hero";
import { Services } from "@/components/services/Content";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";


export default function Service() {
  return (
    <>
      {/* <div className="overflow-x-hidden"> */}
        <Header />
        <Hero />
        <Services />
        <CallToAction />
      {/* </div> */}
      <Footer />
    </>
  );
}
