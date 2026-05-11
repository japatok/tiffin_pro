import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Crown, User } from 'lucide-react';

const plans = [
  {
    name: "Basic Plan",
    price: 3500,
    period: "month",
    description: "Perfect for students & bachelors.",
    icon: <User size={24} />,
    features: [
      "Lunch Only (Mon-Fri)",
      "Daily Different Menu",
      "Traditional Thali Style",
      "Healthy & Hygienic",
      "Basic Packaging",
      "Standard Delivery"
    ],
    color: "bg-blue-500",
    isPopular: false
  },
  {
    name: "Standard Plan",
    price: 6500,
    period: "month",
    description: "Best for working professionals.",
    icon: <Zap size={24} />,
    features: [
      "Lunch + Dinner (Mon-Sat)",
      "Most Popular Choice",
      "Special Weekend Dish",
      "Premium Leak-proof Box",
      "Priority Support",
      "Free Delivery"
    ],
    color: "bg-primary",
    isPopular: true
  },
  {
    name: "Premium Plan",
    price: 8500,
    period: "month",
    description: "For the health-conscious royal.",
    icon: <Crown size={24} />,
    features: [
      "Lunch + Dinner (Daily)",
      "Custom Macro Planning",
      "Special Holiday Recipes",
      "Personalized Packaging",
      "VIP Fast Delivery",
      "Meal Customization"
    ],
    color: "bg-secondary",
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section id="plans" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4"
          >
            Flexible <span className="text-primary italic">Meal</span> Plans
          </motion.h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            Choose a subscription that fits your lifestyle. Save more with our monthly packages 
            and enjoy hassle-free homemade food.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bento-card-light p-10 flex flex-col transition-all duration-300 ${
                plan.isPopular ? "border-primary border-2 scale-105 z-10 bg-gradient-to-br from-white to-orange-50/30" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-8 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                  Best Seller
                </div>
              )}

              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 ${plan.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
                  {plan.icon}
                </div>
                {plan.isPopular && (
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">Savings</span>
                )}
              </div>

              <h3 className="text-2xl font-black text-secondary mb-2">{plan.name}</h3>
              <p className="text-secondary/50 text-sm mb-8 leading-relaxed">{plan.description}</p>
              
              <div className="mb-10">
                <span className="text-5xl font-heading font-black text-secondary tracking-tighter">₹{plan.price}</span>
                <span className="text-secondary/40 text-lg font-bold">/{plan.period}</span>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium text-secondary/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-[2rem] font-black transition-all text-lg ${
                plan.isPopular 
                  ? "bg-primary text-white shadow-2xl shadow-primary/30 hover:scale-[1.02] hover:shadow-primary/40" 
                  : "bg-cream text-secondary hover:bg-secondary hover:text-white"
              }`}>
                Subscribe Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
