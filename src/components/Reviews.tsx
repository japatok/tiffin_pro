import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Ananya Sharma",
    profession: "Software Engineer",
    text: "This food tastes exactly like home. Very hygienic and delicious. I've tried many tiffin services in Bangalore, but PureMeal is the only one that doesn't feel like restaurant food.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ananya"
  },
  {
    name: "Rahul Mehra",
    profession: "Design Student",
    text: "Best tiffin service for office lunch. Packaging and quality are amazing. The daily changing menu keeps it interesting. Highly recommended for students!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    name: "Priya Das",
    profession: "Content Creator",
    text: "I tried many services, but this one is premium quality. The Shahi Paneer is to die for! I love how they balance nutrition with taste. Great value for money.",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=priya"
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Quote className="absolute top-20 left-10 text-cream w-40 h-40 -rotate-12 opacity-50" />
        <Quote className="absolute bottom-20 right-10 text-cream w-40 h-40 rotate-168 opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            Hear From Our <span className="text-primary italic">Pure</span>Family
          </h2>
          <p className="text-secondary/60">
            Real stories from real foodies who have made PureMeal Kitchen a part of their daily life.
          </p>
        </motion.div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-cream rounded-[3rem] p-12 md:p-16 shadow-xl shadow-black/5 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <img src={testimonials[index].image} alt={testimonials[index].name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < testimonials[index].rating ? "text-accent fill-accent" : "text-secondary/10 fill-secondary/10"} 
                    />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-medium text-secondary/80 italic mb-10 leading-relaxed">
                  "{testimonials[index].text}"
                </p>

                <div>
                  <h4 className="text-xl font-bold text-secondary">{testimonials[index].name}</h4>
                  <p className="text-primary font-bold text-sm tracking-widest uppercase">{testimonials[index].profession}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button 
              onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-3 bg-white border border-cream rounded-full hover:bg-primary hover:text-white transition-all shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-primary w-8" : "bg-cream"}`}
                />
              ))}
            </div>
            <button 
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-3 bg-white border border-cream rounded-full hover:bg-primary hover:text-white transition-all shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
