import { Hero } from "@/components/Hero";
import { Filters } from "@/components/Filters";
import { BlogGrid } from "@/components/BlogGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden pt-6">
      <Hero />
      <Filters />
      <BlogGrid />
      <Footer />
    </main>
  );
}
