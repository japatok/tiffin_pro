import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Utensils, Heart, Users } from 'lucide-react';

const stats = [
  { icon: <Heart className="text-red-500" />, label: "Love & Care", sub: "Home taste" },
  { icon: <ShieldCheck className="text-green-500" />, label: "100% Hygienic", sub: "Sanitized kitchen" },
  { icon: <Utensils className="text-primary" />, label: "Fresh Daily", sub: "No frozen food" },
  { icon: <Users className="text-blue-500" />, label: "Grateful", sub: "1k+ Customers" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400" alt="Cooking" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400" alt="Fresh Food" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 translate-y-12"
            >
              <div className="rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl">
                <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400" alt="Ingredients" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-cream">
                <img src="https://images.unsplash.com/photo-1590577976322-3d234ff38235?auto=format&fit=crop&q=80&w=400" alt="Tiffin Packing" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            {/* Absolute Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white font-bold text-center leading-tight shadow-xl shadow-primary/40 rotate-12 z-20">
              Est.<br/>2019
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-secondary mb-8 leading-[1.1]">
              The Kitchen That Feels Like <span className="text-primary italic underline decoration-accent underline-offset-8">Home</span>.
            </h2>
            <p className="text-secondary/60 text-lg mb-8 leading-relaxed">
              PureMeal Kitchen was born in a small apartment with a simple mission: to provide the warmth of home-cooked meals to everyone missing their family's kitchen. 
              We don't use commercial spices or frozen base gravies; every meal is cooked fresh daily using ingredients we would use for our own family.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 rounded-3xl bg-cream/50 border border-cream transition-all hover:bg-white hover:shadow-lg">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="font-bold text-secondary">{stat.label}</p>
                    <p className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-10 py-5 bg-secondary text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-primary transition-all duration-300 shadow-xl shadow-secondary/20">
              Read More About Us
              <Utensils size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
