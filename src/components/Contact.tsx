import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="contact" className="bg-off-white text-charcoal py-48 md:py-64 flex flex-col relative overflow-hidden border-t border-charcoal/5">
      
      {/* Abstract blurred glow - optional, can be removed to be more editorial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-charcoal/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[100rem] mx-auto px-6 md:px-12 w-full z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-16 lg:gap-24 relative pt-12 md:pt-0">
        
        <div className="w-full lg:w-1/2 text-left">
          <div className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.4em] mb-12 md:mb-16 opacity-50 ml-[5vw] md:ml-[10%]">Contact</div>
          <h2 className="font-serif font-light tracking-tighter leading-[0.8] lg:leading-[0.9] mb-8 md:mb-12 flex flex-col">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[13vw] sm:text-6xl md:text-7xl lg:text-[110px] xl:text-[130px] ml-[4vw] md:ml-0"
            >
              Say
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="block italic text-[13vw] sm:text-6xl md:text-7xl lg:text-[105px] xl:text-[120px] ml-[20vw] md:ml-[12%] lg:ml-[10%] xl:ml-[12%] text-charcoal/80 -mt-2.5 sm:-mt-3 md:-mt-4 lg:-mt-2 xl:-mt-2"
            >
              Hello.
            </motion.span>
          </h2>
          
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="font-sans text-[11px] md:text-[13px] text-charcoal/60 mb-2 md:mb-12 leading-[2.5] max-w-sm md:max-w-md ml-[6vw] md:ml-[10%] tracking-wide whitespace-pre-wrap"
          >
            お仕事のご相談は、
メールまたはInstagram DMより
お気軽にご連絡ください。
          </motion.p>
          
          <div className="hidden lg:flex text-[9px] leading-[2] opacity-50 uppercase tracking-[0.3em] font-sans mt-24 flex-col gap-1">
            <span>© {new Date().getFullYear()} 7FUKU design. All rights reserved.</span>
          </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="w-full lg:w-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24 font-sans ml-[5vw] md:ml-[10vw] lg:ml-auto md:pr-12 lg:pb-32 lg:mt-0"
        >
          <div className="flex flex-col items-start lg:items-end gap-1">
            <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-3 md:mb-4">Email</span>
            <a href="mailto:fukudesign.07@gmail.com" className="text-[11px] md:text-sm border-b border-charcoal/20 pb-1 hover:border-charcoal transition-colors tracking-widest text-charcoal/80 hover:text-charcoal flex items-center gap-1 xl:whitespace-nowrap break-all sm:break-normal">
              fukudesign.07@gmail.com <ArrowUpRight className="w-3 h-3 opacity-50" />
            </a>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-1">
            <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-charcoal/40 mb-3 md:mb-4">Social</span>
            <a href="https://www.instagram.com/7fuku_design?igsh=MWVpZmYyNTZmaTU5YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-[11px] md:text-sm border-b border-charcoal/20 pb-1 hover:border-charcoal transition-colors tracking-widest text-charcoal/80 hover:text-charcoal flex items-center gap-1 xl:whitespace-nowrap">
              Instagram <ArrowUpRight className="w-3 h-3 opacity-50" />
            </a>
          </div>
        </motion.div>

        <div className="lg:hidden flex w-full text-[9px] leading-[2] opacity-50 uppercase tracking-[0.3em] font-sans ml-[5vw] md:ml-[10vw] mt-16 flex-col gap-1">
          <span>© {new Date().getFullYear()} 7FUKU design. All rights reserved.</span>
        </div>

      </div>
    </section>
  );
}
