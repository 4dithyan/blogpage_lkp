import { BookOpen, Quote } from "lucide-react";
import { BlogCard } from "./BlogCard";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Destinations",
    title: "Island Hopping in Greece: A Dream Itinerary",
    description: "Sun-kissed islands, crystal-clear waters and timeless beauty — perfect for your Greek adventure.",
    date: "May 20, 2024",
    readTime: "5 min read",
    imageClassName: "h-[340px] rounded-t-[100px] rounded-b-3xl",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Travel Guides",
    title: "A Guide to Italy's Most Romantic Lakes",
    description: "Explore the charm, culture and cuisine around Italy's hidden lake towns.",
    date: "May 18, 2024",
    readTime: "6 min read",
    imageClassName: "h-56 rounded-[40px]",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Experiences",
    title: "Unforgettable Evenings by the Sea",
    description: "How we create magical seaside events that leave lasting memories.",
    date: "May 12, 2024",
    readTime: "4 min read",
    imageClassName: "h-64 rounded-3xl",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Travel Guides",
    title: "Wander Off the Beaten Path: Hidden Gems",
    description: "Explore lesser-known places that offer incredible experiences and memories.",
    date: "May 6, 2024",
    readTime: "6 min read",
    imageClassName: "h-48 rounded-3xl rounded-bl-[60px]",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Guides",
    title: "The Ultimate Escape: Private Villas in Bali",
    description: "Discover handpicked private villas in Bali that offer luxury, privacy and breathtaking views.",
    date: "May 15, 2024",
    readTime: "5 min read",
    imageClassName: "h-60 rounded-[40px]",
    badgeIcon: <BookOpen size={20} />
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Tips & Advice",
    title: "8 Travel Tips for a Stress-Free Vacation",
    description: "Simple tips to help you plan better, travel smarter and enjoy more.",
    date: "May 15, 2024",
    readTime: "7 min read",
    imageClassName: "h-64 rounded-3xl",
  }
];

export function BlogGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 items-start">
        {/* Column 1 */}
        <div className="flex flex-col gap-16">
          <BlogCard {...posts[0]} />
          <BlogCard {...posts[3]} />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-16">
          <BlogCard {...posts[1]} />
          
          {/* Quote Block */}
          <div className="relative py-16 px-10 flex items-center justify-center text-center my-6">
            <div className="absolute inset-0 bg-cyan-50 opacity-90 -z-10 transform scale-105" 
                 style={{ borderRadius: '120px 40px 120px 40px' }}></div>
            <Quote size={50} fill="currentColor" className="absolute top-6 left-8 text-cyan-200 opacity-60" />
            <Quote size={50} fill="currentColor" className="absolute bottom-6 right-8 text-cyan-200 opacity-60 transform rotate-180" />
            
            <h3 className="text-[28px] font-bold text-[var(--color-brand-dark)] leading-snug">
              The world is full of <br />
              beautiful places — <br />
              let's go <span className="text-[var(--color-brand)] italic">explore</span> them.
            </h3>
          </div>

          <BlogCard {...posts[4]} />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-16 mt-0 lg:mt-8">
          <BlogCard {...posts[2]} />
          <BlogCard {...posts[5]} />
        </div>
      </div>
    </section>
  );
}
