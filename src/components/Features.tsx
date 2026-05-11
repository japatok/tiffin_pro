import React from 'react';
import { motion } from 'motion/react';
import { Truck, ChefHat, ShieldCheck, Heart, Clock, Wallet } from 'lucide-react';

const features = [
  {
    icon: <Heart size={32} />,
    title: "Homemade Taste",
    desc: "Just like Maa ke hath ka khana, cooked with love."
  },
  {
    icon: <ChefHat size={32} />,
    title: "Fresh Ingredients",
    desc: "Quality local produce sourced fresh every morning."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Hygienic Kitchen",
    desc: "Strict sanitization and safety protocols followed."
  },
  {
    icon: <Truck size={32} />,
    title: "Fast Delivery",
    desc: "Punctual delivery for hot and fresh meal experience."
  },
  {
    icon: <Wallet size={32} />,
    title: "Affordable Plans",
    desc: "Premium quality food at student-friendly prices."
  },
  {
    icon: <Clock size={32} />,
    title: "Daily Different Menu",
    desc: "Never get bored with 30+ unique daily recipes."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4"
          >
            Why Choose <span className="text-primary italic">Pure</span>Meal?
          </motion.h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            We prioritize your health without compromising on the authentic taste of Indian home cooking. 
            Experience the difference of real food.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[3rem] bg-cream/50 border border-cream hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-lg shadow-primary/5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{feature.title}</h3>
              <p className="text-secondary/60 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
