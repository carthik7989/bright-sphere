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
      <Certification />
      <CallToAction />
      <Trust />
      <Who />
      <Footer />
    </main>
  );
}
