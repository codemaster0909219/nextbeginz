import { Header } from "@/components/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Portfolios } from "@/components/portfolio/Content";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";


export default function Portfolio() {
  return (
    <>
      {/* <div className="overflow-x-hidden"> */}
        <Header />
        <Hero />
        <Portfolios />
        <CallToAction />
      {/* </div> */}
      <Footer />
    </>
  );
}
