import React from 'react';
import { motion } from 'motion/react';
import { Flame, Star, Leaf } from 'lucide-react';

const lunchItems = [
  {
    name: "Dal Tadka",
    description: "Yellow lentils tempered with ghee, cumin and garlic.",
    calories: 245,
    protein: "12g",
    price: 120,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=300",
    isVeg: true
  },
  {
    name: "Paneer Butter Masala",
    description: "Soft cottage cheese cubes in a creamy tomato gravy.",
    calories: 380,
    protein: "18g",
    price: 180,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=300",
    isVeg: true
  },
  {
    name: "Mix Veg",
    description: "A seasonal medley of fresh vegetables tossed in spices.",
    calories: 190,
    protein: "6g",
    price: 110,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300",
    isVeg: true
  }
];

const dinnerItems = [
  {
    name: "Shahi Paneer",
    description: "Royal cottage cheese in a rich nut-based white gravy.",
    calories: 420,
    protein: "16g",
    price: 200,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=300",
    isVeg: true
  },
  {
    name: "Veg Biryani",
    description: "Fragrant basmati rice cooked with fresh veggies and herbs.",
    calories: 310,
    protein: "8g",
    price: 130,
    image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=300",
    isVeg: true
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4"
          >
            Today's <span className="text-primary italic">Signature</span> Menu
          </motion.h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            Our menu changes every day to ensure variety and seasonal freshness. 
            Balanced meals prepared with low oil and premium spices.
          </p>
        </div>

        {/* Lunch Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-cream" />
            <span className="px-6 py-2 bg-cream rounded-full text-primary font-bold text-sm tracking-widest uppercase">
              Lunch Selection
            </span>
            <div className="h-px flex-1 bg-cream" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lunchItems.map((item, idx) => (
              <FoodCard key={item.name} item={item} index={idx} />
            ))}
          </div>
        </div>

        {/* Dinner Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-cream" />
            <span className="px-6 py-2 bg-cream rounded-full text-primary font-bold text-sm tracking-widest uppercase">
              Dinner Selection
            </span>
            <div className="h-px flex-1 bg-cream" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dinnerItems.map((item, idx) => (
              <FoodCard key={item.name} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FoodCard({ item, index }: { item: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-[2rem] overflow-hidden border border-cream hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {item.isVeg && (
            <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-lg">
              <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center rounded-sm">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
              </div>
            </div>
          )}
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
          <span className="text-secondary font-bold text-sm">₹{item.price}</span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-secondary">{item.name}</h3>
          <div className="flex items-center gap-1 text-accent">
            <Star size={14} className="fill-accent" />
            <span className="text-xs font-bold text-secondary">4.8</span>
          </div>
        </div>
        <p className="text-sm text-secondary/60 mb-6 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between border-t border-cream pt-6">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-secondary/40 font-bold uppercase tracking-wider">Calories</span>
              <span className="text-sm font-bold text-secondary">{item.calories} kCal</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-secondary/40 font-bold uppercase tracking-wider">Protein</span>
              <span className="text-sm font-bold text-secondary">{item.protein}</span>
            </div>
          </div>
          <button className="p-3 bg-secondary text-white rounded-2xl hover:bg-primary transition-colors">
            <Flame size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
