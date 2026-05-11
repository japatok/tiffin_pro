import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Menu from '../components/Menu';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Menu />
        <Pricing />
        
        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Common Questions</h2>
              <p className="text-secondary/60">Everything you need to know about our tiffin service.</p>
            </div>
            <div className="space-y-4">
              <FAQItem 
                question="How do I start my tiffin subscription?" 
                answer="Simply choose a plan from our pricing section and click 'Subscribe Now'. You can also message us on WhatsApp for a custom plan."
              />
              <FAQItem 
                question="Can I cancel or pause my subscription?" 
                answer="Yes, you can pause or cancel your subscription at any time with a 24-hour notice. Your balance will be adjusted accordingly."
              />
              <FAQItem 
                question="What kind of oil and spices do you use?" 
                answer="We use premium sunflower/mustard oil and hand-ground spices to ensure that home-cooked flavor and health benefits."
              />
              <FAQItem 
                question="Do you deliver on weekends?" 
                answer="Our Standard and Premium plans include weekend deliveries. Basic plans are typically Monday to Friday."
              />
            </div>
          </div>
        </section>

        <Reviews />
        <Contact />
      </main>
      <Footer />

      {/* Floating Call to Action */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 relative group"
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 10 10 0 0 1 5.1 1.4L21 4z" />
          </svg>
          <span className="absolute right-full mr-4 bg-secondary text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Order on WhatsApp
          </span>
        </motion.button>
        
        {/* Call Now Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 relative group"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
           <span className="absolute right-full mr-4 bg-secondary text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Call Us Now
          </span>
        </motion.button>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-cream rounded-2xl overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-cream/30 transition-colors"
      >
        <span className="font-bold text-secondary">{question}</span>
        <ChevronDown className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden bg-cream/20"
      >
        <div className="p-6 text-secondary/70 text-sm leading-relaxed border-t border-cream">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
