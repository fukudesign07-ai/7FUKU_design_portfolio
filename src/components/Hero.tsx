import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const heroBg = "/images/hero_editorial_bg.jpg";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden flex flex-col pt-16 md:pt-32 pb-24 md:pb-16 bg-off-white">
      
      {/* Editorial Atmospheric Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div 
          className="w-full h-full bg-cover bg-center select-none opacity-[0.45] md:opacity-[0.25] filter brightness-[0.95] contrast-[1.05]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Soft gradient overlay for elegant integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-off-white via-off-white/60 to-black/5 md:bg-gradient-to-r md:from-off-white md:via-off-white/70 md:to-black/5 pointer-events-none" />
      </motion.div>

      {/* Typography focused Hero */}
      <main className="relative flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left md:px-12 w-full max-w-[1600px] mx-auto z-10 px-6 pt-12 md:pt-0" style={{ transform: textY, opacity }}>
        
        {/* Text Content */}
        <div className="z-20 max-w-4xl relative mt-8 sm:mt-24 lg:mt-0">
          
          <div className="z-10 relative -left-[4vw] md:left-4">
            <h2 className="font-serif text-[12vw] sm:text-6xl lg:text-[80px] xl:text-[96px] tracking-tighter leading-[0.9] text-charcoal flex flex-col font-light">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block -ml-1 md:-ml-2 drop-shadow-sm md:drop-shadow-none"
              >
                A quiet
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block ml-[12vw] md:ml-[60px] lg:ml-[80px] italic text-charcoal/90 md:text-charcoal/80 relative z-20 mt-2 drop-shadow-sm md:drop-shadow-none"
              >
                visual
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="block ml-2 md:-ml-2 mt-3 md:mt-2 drop-shadow-sm md:drop-shadow-none"
              >
                experience.
              </motion.span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="text-[12px] md:text-[13px] leading-[2.2] text-charcoal/70 mt-8 mb-4 ml-[5vw] md:ml-[60px] lg:ml-[100px] tracking-[0.1em] whitespace-pre-wrap"
            >
              想いや空気感を丁寧にすくい取り{"\n"}ブランドの輪郭を整える
            </motion.p>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
              className="h-[1px] bg-charcoal/20 w-16 md:w-24 mt-8 md:mt-16 mb-8 origin-left ml-[5vw] md:ml-[60px] lg:ml-[100px]"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
              className="flex flex-col gap-2.5 ml-[5vw] md:ml-[60px] lg:ml-[100px] font-sans pt-2 md:pt-0"
            >
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-charcoal">Airi Fukumoto</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 text-charcoal">Brand Visual Design / Art Direction</span>
            </motion.div>
          </div>
        </div>

        
      </main>

      {/* Global Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 z-20 flex flex-col items-center gap-4 hidden md:flex"
      >
        <div className="w-[1px] h-16 bg-charcoal/10 relative overflow-hidden">
          <motion.div 
            className="w-full h-full bg-charcoal origin-top"
            animate={{ scaleY: [0, 1, 0], translateY: ['-100%', '0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "circInOut" }}
          />
        </div>
        <span className="text-charcoal text-[9px] uppercase tracking-[0.3em] opacity-40" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  );
}
