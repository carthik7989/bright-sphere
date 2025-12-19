import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Why from "./Components/Why";
import Third from "./Components/Third";
import Learn from "./Components/Learn";
import Different from "./Components/Different";
import Outcome from "./Components/Outcome";
import Certification from "./Components/Certification";
import CallToAction from "./Components/CallToAction";
import Trust from "./Components/Trust";
import Who from "./Components/Who";
import Footer from "./Components/Footer";
import StickyBar from "./Components/StickyBar";
import Toolkit from "./Components/Toolkit";
import Test from "./Components/Test";

export default function Home() {
  return (
    <main className="ralative min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <Why />
      <Third />
      <Learn />
      <Different />
      <Outcome />
      <Toolkit />
      <Certification />
      <CallToAction />
      <Test />
      <Trust />
      <Who />
      <Footer />
      <StickyBar />
    </main>
  );
}
