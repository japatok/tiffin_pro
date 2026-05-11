import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -mr-32 -mt-32" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-heading font-bold tracking-tight">
                PureMeal <span className="text-primary">Kitchen</span>
              </span>
            </div>
            <p className="text-white/50 mb-8 leading-relaxed">
              Delivering the warmth of home-cooked meals to your doorstep since 2019. 
              Healthy, hygienic, and always fresh.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 lg:grid-cols-2 col-span-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-8">Quick Links</h4>
              <ul className="space-y-4">
                <FooterLink name="Home" />
                <FooterLink name="Our Menu" />
                <FooterLink name="Subscription Plans" />
                <FooterLink name="Customer Reviews" />
                <FooterLink name="Food Gallery" />
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-8">Company</h4>
              <ul className="space-y-4">
                <FooterLink name="About Us" />
                <FooterLink name="Contact Us" />
                <FooterLink name="Careers" />
                <FooterLink name="Privacy Policy" />
                <FooterLink name="Terms of Service" />
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-primary mt-1"><MapPin size={20} /></div>
                <span className="text-white/60 text-sm">123, Food Street, Indiranagar, Bangalore, KA - 560038</span>
              </li>
              <li className="flex gap-4">
                <div className="text-primary mt-1"><Phone size={20} /></div>
                <span className="text-white/60 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex gap-4">
                <div className="text-primary mt-1"><Mail size={20} /></div>
                <span className="text-white/60 text-sm">hello@puremeal.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/5 rounded-[2.5rem] p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Subscribe To Our Newsletter</h3>
            <p className="text-white/40">Get weekly updates on our special menu and exclusive offers.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 flex-1 md:w-80 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-white p-4 rounded-2xl hover:scale-105 transition-all">
              <ArrowUpRight size={24} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">© {currentYear} PureMeal Kitchen. All rights reserved. Designed for Premium Growth.</p>
          <div className="flex gap-8">
            <span className="text-white/40 text-sm hover:text-primary cursor-pointer transition-colors">Privacy</span>
            <span className="text-white/40 text-sm hover:text-primary cursor-pointer transition-colors">Terms</span>
            <span className="text-white/40 text-sm hover:text-primary cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
      {icon}
    </div>
  );
}

function FooterLink({ name }: { name: string }) {
  return (
    <li className="text-white/50 text-sm hover:text-primary hover:translate-x-2 transition-all cursor-pointer flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
      {name}
    </li>
  );
}
