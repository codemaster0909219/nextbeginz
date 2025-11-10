import { Header } from "@/components/Header";
import { Hero } from "@/components/blog/Hero";
import { Content } from "@/components/blog/Content";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";


export default function Service() {
  return (
    <>
      {/* <div className="overflow-x-hidden"> */}
        <Header />
        <Hero />
        <Content />
        <CallToAction />
      {/* </div> */}
      <Footer />
    </>
  );
}
