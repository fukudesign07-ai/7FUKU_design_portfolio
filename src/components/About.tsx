import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["1%", "-1%"]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="bg-warm-gray py-32 md:py-64 overflow-hidden relative noise-bg border-t border-charcoal/10">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-start gap-24 md:gap-32 w-full pt-16 md:pt-48">
        
        {/* Left Side Large Text */}
        <motion.div 
          ref={ref}
          style={{ y }}
          className="w-full md:w-[60%] xl:w-[65%] relative"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            <div className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.4em] mb-12 md:mb-16 opacity-60 ml-[5vw] md:ml-[10%] lg:ml-[15%]">About</div>
            <p className="font-sans text-[10px] border-l border-charcoal/10 pl-5 md:border-none md:pl-0 md:text-[14px] lg:text-[15px] text-charcoal/70 leading-[2.6] md:leading-[2.8] max-w-[300px] md:max-w-lg lg:max-w-xl xl:max-w-2xl antialiased ml-[5vw] md:ml-[15%] lg:ml-[20%] mt-16 md:mt-0 tracking-[0.05em] whitespace-pre-wrap">
              教育の現場を経て、
現在はGraphic Artist Guild所属の
プロギルドメンバーとして活動しながら、
ブランドビジュアル制作や
Instagram運用を中心に
デザイン制作を行っています。

想いや空気感を丁寧にすくい取り、
ブランドの輪郭を整えることを
大切にしています。
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side Info */}
        <div className="w-full md:w-[35%] xl:w-[30%] flex flex-col gap-16 md:gap-24 font-sans pt-16 md:pt-40 lg:pt-48 self-start md:ml-auto lg:pr-12 xl:pr-24">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="flex flex-col gap-3 md:gap-1"
          >
            <h3 className="text-[9px] uppercase tracking-[0.3em] font-medium text-charcoal/50 mb-4 md:mb-6">Profile</h3>
            <p className="text-[11px] md:text-sm leading-[2] md:leading-relaxed text-charcoal tracking-wide mb-1">AIRI FUKUMOTO</p>
            <p className="text-[10px] md:text-xs leading-[2.2] md:leading-relaxed text-charcoal/60 tracking-wider">7FUKU design <br className="hidden md:block" /> Graphic Designer</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-3 md:gap-1 mt-4 md:mt-0"
          >
            <h3 className="text-[9px] uppercase tracking-[0.3em] font-medium text-charcoal/50 mb-4 md:mb-6">Certification</h3>
            <ul className="text-[10px] md:text-xs leading-[2.2] md:leading-[2] text-charcoal/60 flex flex-col gap-2 md:gap-1 tracking-wider">
              <li>Graphic Artist Guild</li>
              <li>Pro Guild Member</li>
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
