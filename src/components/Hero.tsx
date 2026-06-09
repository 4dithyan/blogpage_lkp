"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-16 lg:pt-24 pb-12 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6 z-10"
      >
        <p className="text-[var(--color-brand)] font-semibold tracking-widest text-sm uppercase">
          Our Blog
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-dark)] leading-tight">
          Stories that <br />
          inspire <span className="text-[var(--color-brand)] italic font-light">journeys</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
          Travel guides, hidden gems and real stories from around the world.
        </p>
        
        <button className="group flex items-center gap-3 bg-[var(--color-brand)] text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-600 transition-colors">
          Explore All Posts
          <span className="bg-white text-[var(--color-brand)] rounded-full p-1 group-hover:translate-x-1 transition-transform">
            <ArrowRight size={18} />
          </span>
        </button>
      </motion.div>

      {/* Right Content - Images */}
      <div className="flex-1 relative h-[500px] w-full flex items-center justify-center">
        {/* Floating Background dots/shapes could be added here */}
        
        {/* Top Left Image - Overwater Bungalow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute top-0 left-0 w-[60%] h-[65%] z-10 overflow-hidden"
          style={{ 
            borderTopLeftRadius: '40px', 
            borderTopRightRadius: '120px', 
            borderBottomRightRadius: '40px', 
            borderBottomLeftRadius: '120px' 
          }}
        >
          <Image 
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Overwater Bungalow" 
            fill 
            className="object-cover"
          />
        </motion.div>

        {/* Top Right Image - Circle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute top-[-5%] right-0 w-[45%] h-[45%] z-20 rounded-full overflow-hidden border-4 border-white shadow-lg"
        >
          <Image 
            src="https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Woman in boat on lake" 
            fill 
            className="object-cover"
          />
        </motion.div>

        {/* Bottom Right Image - Organic Shape */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-[5%] right-[5%] w-[55%] h-[45%] z-10 overflow-hidden"
          style={{ 
            borderTopLeftRadius: '100px', 
            borderTopRightRadius: '40px', 
            borderBottomRightRadius: '100px', 
            borderBottomLeftRadius: '40px' 
          }}
        >
          <Image 
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Palm trees at sunset" 
            fill 
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
