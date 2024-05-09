import ButtonGradient from "@/public/svg/ButtonGradient";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import {
  Benefits,
  Collaboration,
  Footer,
  Pricing,
  Roadmap,
  Services,
} from "./utils";
export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}
