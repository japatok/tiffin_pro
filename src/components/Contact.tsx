import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Send, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-8">
              Let's Start Your <span className="text-primary italic">Healthy</span> Journey
            </h2>
            <p className="text-secondary/60 text-lg mb-12 max-w-lg">
              Have questions about our meal plans or delivery areas? Our team is 
              always ready to help you choose the best plan for your lifestyle.
            </p>

            <div className="space-y-8">
              <ContactInfoItem 
                icon={<Phone className="text-primary" />}
                title="Call or WhatsApp"
                value="+91 98765 43210"
              />
              <ContactInfoItem 
                icon={<MapPin className="text-primary" />}
                title="Our Kitchen"
                value="Indiranagar, Bangalore, KA - 560038"
              />
              <ContactInfoItem 
                icon={<Clock className="text-primary" />}
                title="Working Hours"
                value="08:00 AM - 10:00 PM (Daily)"
              />
            </div>
            
            {/* WhatsApp Floating (Simulation in UI) */}
            <div className="mt-12 p-6 bg-cream rounded-3xl border border-primary/20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="font-bold text-secondary">Instant Support</p>
                  <p className="text-xs text-secondary/50">Chat with us on WhatsApp</p>
                </div>
              </div>
              <button className="bg-[#25D366] text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-green-500/20 hover:scale-105 transition-all">
                Chat Now
              </button>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cream rounded-[3rem] p-8 md:p-12 border border-white"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-secondary/70 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white border border-secondary/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary/70 mb-2">Phone Number</label>
                  <input type="text" placeholder="+91 98xxx xxxxx" className="w-full bg-white border border-secondary/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary/70 mb-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-secondary/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary/70 mb-2">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-white border border-secondary/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-secondary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary transition-all duration-300 shadow-xl shadow-secondary/20 group">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <div className="flex gap-6">
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/5 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-secondary text-lg mb-1">{title}</h4>
        <p className="text-secondary/60">{value}</p>
      </div>
    </div>
  );
}
