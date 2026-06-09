import { Globe, ArrowUp, Star, Home, Ticket, Users } from "lucide-react";

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
      <div className="relative z-20 text-white pt-24 md:pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12">
          
          {/* Newsletter & Left Section */}
          <div className="lg:w-[40%] space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white text-[var(--color-brand)] p-3 rounded-2xl flex-shrink-0">
                <Globe size={32} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[32px] font-bold leading-tight">Explore World.<br />Experience More.</h3>
              </div>
            </div>
            <p className="text-gray-200 max-w-md text-[15px] leading-relaxed">
              Discover handpicked experiences, unique stays, local food, cultural events and hidden places across World.
            </p>

            <div className="flex items-center gap-2 max-w-lg bg-[rgba(255,255,255,0.08)] rounded-full p-1 border border-[rgba(255,255,255,0.15)] mt-6">
              <input 
                type="email" 
                placeholder="Get updates on experiences, events & hidden destinations" 
                className="bg-transparent text-white px-5 py-2.5 w-full focus:outline-none text-[13px] placeholder:text-gray-400"
              />
              <button className="bg-[var(--color-brand)] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold hover:bg-cyan-600 transition-colors whitespace-nowrap">
                Join The Journey
              </button>
            </div>

            <div className="pt-6 flex items-center gap-4">
              <span className="text-[13px] text-gray-200">Follow the adventure</span>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full border border-gray-500/50 flex items-center justify-center hover:bg-white hover:text-[var(--color-brand-dark)] hover:border-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-500/50 flex items-center justify-center hover:bg-white hover:text-[var(--color-brand-dark)] hover:border-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-500/50 flex items-center justify-center hover:bg-white hover:text-[var(--color-brand-dark)] hover:border-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-[13px] font-bold text-[var(--color-brand)] tracking-wider uppercase mb-6">Explore</h4>
              <ul className="space-y-4 text-[13px] text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Experiences</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stays</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Food</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Places</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-bold text-[var(--color-brand)] tracking-wider uppercase mb-6">Discover</h4>
              <ul className="space-y-4 text-[13px] text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Trending Experiences</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Featured Stays</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Local Food Trails</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Upcoming Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-bold text-[var(--color-brand)] tracking-wider uppercase mb-6">Company</h4>
              <ul className="space-y-4 text-[13px] text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Little Known Planet</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become a Host</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[13px] font-bold text-[var(--color-brand)] tracking-wider uppercase mb-6">Support</h4>
              <ul className="space-y-4 text-[13px] text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bookings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-20 bg-white border-t border-gray-100 pt-8 pb-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-center justify-between gap-8">
          
          {/* Icons Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full xl:w-auto text-[13px]">
            <div className="flex items-start gap-4">
              <div className="text-[var(--color-brand)] mt-1"><Star size={24} strokeWidth={1.5} /></div>
              <div>
                <p className="font-bold text-[var(--color-brand-dark)] mb-1">Handpicked Experiences</p>
                <p className="text-[12px] text-gray-500">Curated and verified<br/>by our team</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 border-l border-gray-100 pl-6">
              <div className="text-[var(--color-brand)] mt-1"><Home size={24} strokeWidth={1.5} /></div>
              <div>
                <p className="font-bold text-[var(--color-brand-dark)] mb-1">Unique Local Stays</p>
                <p className="text-[12px] text-gray-500">Authentic places<br/>across World</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l border-gray-100 pl-6">
              <div className="text-[var(--color-brand)] mt-1"><Ticket size={24} strokeWidth={1.5} /></div>
              <div>
                <p className="font-bold text-[var(--color-brand-dark)] mb-1">Easy Booking</p>
                <p className="text-[12px] text-gray-500">Secure and seamless<br/>reservations</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l border-gray-100 pl-6">
              <div className="text-[var(--color-brand)] mt-1"><Users size={24} strokeWidth={1.5} /></div>
              <div>
                <p className="font-bold text-[var(--color-brand-dark)] mb-1">Local Communities</p>
                <p className="text-[12px] text-gray-500">Supporting local<br/>hosts and creators</p>
              </div>
            </div>
          </div>

          {/* Stamp and Back to top */}
          <div className="flex items-center gap-8 border-t xl:border-t-0 xl:border-l border-gray-100 pt-6 xl:pt-0 xl:pl-8 mt-4 xl:mt-0 justify-between xl:justify-end">
            <div className="relative rotate-6 text-center px-4 py-3 border-[2px] border-dashed border-cyan-400 rounded-lg text-cyan-400 font-bold leading-tight">
               <p className="text-[11px] uppercase tracking-wider">Discover</p>
               <p className="text-[11px] uppercase tracking-wider">The</p>
               <p className="text-[11px] uppercase tracking-wider">Hidden</p>
               <p className="text-[11px] uppercase tracking-wider">World</p>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <p className="text-[11px] text-[var(--color-brand-dark)] font-medium text-center leading-tight">Back to<br/>top</p>
              <div className="bg-[var(--color-brand)] text-white p-1.5 rounded-full shadow-sm group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={14} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Very Bottom */}
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-100 flex items-center gap-4">
          <div className="bg-[var(--color-brand-dark)] text-[var(--color-brand)] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs tracking-wider">
            LKP
          </div>
          <div className="text-xs text-gray-500">
            © 2026 Little Known Planet. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
