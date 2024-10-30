import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";
// import About from "./componets/About";
import Technologies from "./componets/technologies";
import Experience from "./componets/Experience";
import About from "./componets/about";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-2">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience/>
      </div>
    </div>
  );
}

export default App;
