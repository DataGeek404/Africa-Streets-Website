import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
    </div>
  );
}
