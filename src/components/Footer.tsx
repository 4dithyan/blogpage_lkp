import { Plane, ShieldCheck, Heart, Clock, ArrowUp, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full mt-24 relative bg-[var(--color-brand-dark)] overflow-hidden">
      {/* Background Image on Left */}
      <div 
        className="absolute top-0 left-0 w-full md:w-[50%] h-full z-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)"
        }}
      />

      {/* Wave Mask (White) */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-24 lg:h-32 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full text-white"
          fill="currentColor"
        >
          <path d="M0,0 L1440,0 L1440,32 C720,128 288,-32 0,32 Z" />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-20 text-white pt-24 md:pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Newsletter Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white text-[var(--color-brand-dark)] p-3 rounded-2xl">
                <Plane size={28} className="transform -rotate-45" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Stay inspired, <br />travel better.</h3>
              </div>
            </div>
            <p className="text-gray-300 max-w-sm text-sm">
              Get stories, travel tips and exclusive offers straight to your inbox.
            </p>

            <div className="flex items-center gap-2 max-w-md bg-[rgba(255,255,255,0.1)] rounded-full p-1 border border-[rgba(255,255,255,0.2)]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-white px-4 py-2 w-full focus:outline-none text-sm placeholder:text-gray-400"
              />
              <button className="bg-[var(--color-brand)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-cyan-600 transition-colors">
                Subscribe
              </button>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <span className="text-sm text-gray-300">Follow our journey</span>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-[var(--color-brand-dark)] hover:border-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-[var(--color-brand-dark)] hover:border-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-[var(--color-brand-dark)] hover:border-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Experiences</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Travel Guides</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Tips & Advice</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="flex gap-16 lg:gap-12">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[var(--color-brand)] transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-20 bg-white border-t border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 w-full lg:w-auto text-sm">
            
            <div className="flex items-center gap-3">
              <div className="text-[var(--color-brand)]"><Heart size={24} /></div>
              <div>
                <p className="font-semibold text-[var(--color-brand-dark)]">Handpicked experiences</p>
                <p className="text-xs text-gray-500">Curated with love by travel experts</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-[var(--color-brand)]"><ShieldCheck size={24} /></div>
              <div>
                <p className="font-semibold text-[var(--color-brand-dark)]">Best price guarantee</p>
                <p className="text-xs text-gray-500">We match the price you find</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-[var(--color-brand)]"><Clock size={24} /></div>
              <div>
                <p className="font-semibold text-[var(--color-brand-dark)]">24/7 support</p>
                <p className="text-xs text-gray-500">We're here for you anytime, anywhere</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-[var(--color-brand)]"><Send size={24} /></div>
              <div>
                <p className="font-semibold text-[var(--color-brand-dark)]">Travel with confidence</p>
                <p className="text-xs text-gray-500">Your safety is our top priority</p>
              </div>
            </div>
          </div>

          {/* Stamp and Back to top */}
          <div className="flex items-center gap-8 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8 mt-6 md:mt-0 w-full md:w-auto justify-between md:justify-end">
            <div className="relative rotate-6 text-center px-5 py-3 border-[2px] border-dashed border-cyan-300 rounded-lg bg-cyan-50/50 shadow-sm">
               <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand)] font-bold mb-1">Let's explore</p>
               <p className="text-sm font-bold text-[var(--color-brand-dark)] leading-tight">the world <br /><span className="text-[var(--color-brand)]">together</span></p>
            </div>
            <button className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[var(--color-brand)] transition-colors">
              Back to top
              <span className="bg-[var(--color-brand)] text-white p-1.5 rounded-full shadow-sm"><ArrowUp size={14} /></span>
            </button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400">
          © 2026 littleknownplanet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
