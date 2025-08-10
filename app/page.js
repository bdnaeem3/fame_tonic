import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TopBar from "@/components/sections/TopBar";

export default function Home() {
  return (
    <main className="bg-[#010101] min-h-[100vh]">
      <TopBar />
      <Header />
      <Hero />
    </main>
  );
}
