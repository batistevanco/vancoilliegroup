import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";

export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Hero />
      <HomeSections />
    </main>
  );
}
