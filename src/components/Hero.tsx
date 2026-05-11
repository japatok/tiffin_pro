import React from 'react';
import { motion } from 'motion/react';
import { Star, Clock, Heart, ArrowRight } from 'lucide-react';
import Counter from './Counter';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-12 flex items-center overflow-hidden bg-cream">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-64" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch relative z-10">
        {/* Left Column: Dark Bento Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-8 bento-card-dark flex flex-col justify-center min-h-[500px]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold text-accent uppercase tracking-widest mb-6">
              Premium Tiffin Service
            </span>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.05] mb-6">
              Healthy Homemade <br/> 
              <span className="text-primary">Food Delivered</span> Fresh.
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Ghar jaisa swad, bina kisi mehnat ke. Balanced nutrition and 
              restaurant-level hygiene delivered directly to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-[2rem] font-extrabold shadow-2xl shadow-primary/30 hover:scale-105 transition-all text-lg">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-[2rem] font-bold hover:bg-white/20 transition-all text-lg">
                View Menu
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 flex flex-col items-end">
            <div className="flex -space-x-3 mb-3">
              <img src="https://i.pravatar.cc/100?u=1" className="w-12 h-12 rounded-full border-2 border-secondary shadow-xl" />
              <img src="https://i.pravatar.cc/100?u=2" className="w-12 h-12 rounded-full border-2 border-secondary shadow-xl" />
              <div className="w-12 h-12 rounded-full bg-primary border-2 border-secondary flex items-center justify-center text-xs font-black shadow-xl">99+</div>
            </div>
            <p className="text-xs text-secondary/40 font-bold uppercase tracking-wider text-gray-400">
              Trusted by <span className="text-white"><Counter value={1000} suffix="+" /> Professionals</span>
            </p>
          </div>
        </motion.div>

        {/* Right Column: Mini Bento Blocks */}
        <div className="md:col-span-4 grid grid-rows-2 gap-6">
          {/* Stats Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bento-card-accent flex flex-col justify-center gap-6"
          >
            <div className="flex justify-between items-center border-b border-black/5 pb-4">
               <div>
                <p className="text-4xl font-black text-secondary"><Counter value={15} suffix="k+" /></p>
                <p className="text-[10px] font-bold text-secondary/60 uppercase">Meals Served</p>
              </div>
              <div className="w-px h-10 bg-secondary/10" />
              <div className="text-right">
                <p className="text-4xl font-black text-secondary">4.9</p>
                <p className="text-[10px] font-bold text-secondary/60 uppercase">Avg Rating</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <p className="text-4xl font-black text-secondary">30m</p>
                <p className="text-[10px] font-bold text-secondary/60 uppercase">Avg Delivery</p>
              </div>
            </div>
          </motion.div>

          {/* About/Story Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bento-card-light relative group cursor-pointer"
          >
            <h3 className="font-bold text-xl mb-3">Daily Special</h3>
             <div className="flex items-center space-x-4 mb-4">
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-orange-200 shadow-sm text-2xl">
                 🥘
               </div>
               <div>
                 <p className="font-bold text-sm">Paneer Butter Masala</p>
                 <p className="text-xs text-secondary/40">Thali, Rice, 4 Roti</p>
               </div>
             </div>
             <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-700 text-[10px] px-2.5 py-1 rounded-full font-bold">VEG</span>
                <span className="text-secondary/40 text-[10px] font-bold tracking-wider">740 KCAL</span>
             </div>
             
             <button className="absolute bottom-8 right-8 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all border border-orange-100">
               <ArrowRight size={20} className="text-primary" />
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
