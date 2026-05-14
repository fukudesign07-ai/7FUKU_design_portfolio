import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { works, Work } from '../data';

const imgRefrigerator = "/images/refrigerator_ad.jpg";
const imgSoratowa = "/images/soratowa_tea.jpg";
const imgSoundmaster = "/images/soundmaster_ad.jpg";

function WorkItem({ work, index }: { work: Work, index: number, key?: React.Key }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15px", "15px"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10px", "-10px"]);
  const subImageY = useTransform(scrollYProgress, [0, 1], ["25px", "-25px"]);
  const extraImageY = useTransform(scrollYProgress, [0, 1], ["15px", "-15px"]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const ProjectText = ({ align = 'left', customColor = '' }: { align?: 'left'|'center', customColor?: string }) => (
    <div className={`relative z-10 w-full flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${customColor || "text-charcoal"}`}>
      <div className={`text-[9px] md:text-[10px] font-sans uppercase tracking-[0.3em] mb-4 md:mb-6 font-medium opacity-60`}>
        <span className="opacity-50 mr-2 md:inline hidden">PROJ.</span>{work.id} <span className="mx-2 md:mx-4 opacity-30">/</span> {work.category}
      </div>
      <h2 className={`font-serif text-[10vw] sm:text-4xl md:text-[50px] ${align === 'center' ? 'lg:text-[70px] xl:text-[90px]' : 'lg:text-[60px] xl:text-[80px]'} font-light tracking-tighter leading-[1] mb-6 md:mb-8 block break-words w-full max-w-full lg:max-w-4xl pt-2`}>
        {work.title}
      </h2>
      <p className="font-sans text-[12px] md:text-sm lg:text-[15px] leading-[2.2] md:leading-relaxed max-w-sm md:max-w-lg mix-blend-normal opacity-80 whitespace-pre-wrap">
        {work.description}
      </p>
    </div>
  );

  if (work.id === "01") {
    return (
      <div ref={ref} className="py-16 md:py-32 lg:py-48 w-full flex flex-col relative group border-b border-charcoal/5">
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 px-6 lg:px-0">
          
          <motion.div style={{ y: imageY }} className="lg:col-span-8 relative industrial-shadow overflow-hidden md:w-[90%] md:mx-auto lg:w-full">
             <motion.img 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeUpVariant}
              src={work.imageMain} 
              alt={work.title}
              className="w-full h-auto object-contain select-none"
            />
          </motion.div>

          <motion.div 
            style={{ y: textY }}
            className="lg:col-span-4 flex flex-col items-start px-0 md:px-12 lg:pl-20 lg:pr-8 mt-4 md:mt-8 lg:mt-32 z-20"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeUpVariant}
            >
              <ProjectText />
            </motion.div>
            
            {work.imageSub && (
              <motion.div 
                style={{ y: subImageY }}
                className="w-full mt-12 md:mt-16 lg:mt-72 relative industrial-shadow ml-0 md:w-[70%] lg:w-[95%] lg:-ml-24 overflow-hidden"
              >
                <motion.img 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "100px" }}
                  variants={fadeUpVariant}
                  src={work.imageSub} alt={`${work.title} detail`} className="w-full h-auto object-contain" />
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    );
  }

  if (work.id === "02") {
    return (
      <div ref={ref} className="py-20 md:py-40 lg:py-72 w-full flex flex-col relative group border-b border-charcoal/5">
        <div className="flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto relative px-6 md:px-12">
          <motion.div 
            style={{ y: textY }}
            className="w-full flex flex-col items-center text-center z-20 mb-8 md:mb-16 lg:mb-24"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeUpVariant}
            >
              <ProjectText align="center" />
            </motion.div>
          </motion.div>
          <motion.div style={{ y: imageY }} className="w-[90%] md:w-[75%] lg:w-[45%] max-w-[800px] relative industrial-shadow overflow-hidden lg:ml-[15%]">
             <motion.img 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeUpVariant}
              src={work.imageMain} 
              alt={work.title}
              className="w-full h-auto object-contain select-none filter transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
            />
          </motion.div>
        </div>
      </div>
    );
  }

  if (work.id === "03") {
    return (
      <div ref={ref} className="py-16 md:py-32 lg:py-64 w-full flex flex-col items-start relative group border-b border-charcoal/5 px-6 md:px-12 !lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 w-full items-center">
          <motion.div style={{ y: textY }} className="lg:col-span-5 lg:col-start-1 mt-0 z-20 md:mb-12 lg:mb-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeUpVariant}
            >
               <ProjectText />
            </motion.div>
          </motion.div>
          <motion.div style={{ y: imageY }} className="lg:col-span-7 lg:col-start-6 relative industrial-shadow w-full group overflow-hidden md:w-[90%] md:mx-auto lg:w-full">
               <motion.img 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "100px" }}
                 variants={fadeUpVariant}
                 src={work.imageMain} alt={work.title} className="w-full h-auto object-contain transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]" />
          </motion.div>
        </div>
      </div>
    );
  }

  if (work.id === "04") {
    return (
      <div ref={ref} className="py-20 md:py-48 lg:py-56 w-full flex flex-col relative group border-b border-charcoal/5 px-6 md:px-12 max-w-[1800px] mx-auto">
        <motion.div style={{ y: imageY }} className="relative w-full mx-auto industrial-shadow-lg overflow-hidden group">
          <motion.img 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeUpVariant}
            src={work.imageMain} 
            alt={work.title}
            className="w-full h-auto object-contain select-none transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01] origin-center"
          />
          <div className="absolute inset-0 bg-black/5 transition-colors duration-700 group-hover:bg-transparent pointer-events-none" />
        </motion.div>
        <motion.div 
          style={{ y: textY }}
          className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center mt-12 md:mt-24 px-6 z-20"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeUpVariant}
          >
            <ProjectText align="center" />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (work.id === "05") {
    return (
      <div ref={ref} className="py-16 md:py-32 lg:py-56 w-full flex flex-col relative group border-b border-charcoal/5 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">
          
          <motion.div 
            style={{ y: textY }}
            className="lg:col-span-4 lg:order-1 lg:sticky lg:top-32 z-30 pt-2 lg:pt-32"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeUpVariant}
            >
              <ProjectText />
            </motion.div>
          </motion.div>

          <div className="lg:col-span-8 lg:order-2 flex flex-col w-full z-10 gap-12 md:gap-20 lg:gap-16 pb-8 lg:pb-16 mt-8 lg:mt-0 items-center lg:items-start">
            
            {/* Main Visual - Cover */}
            <motion.div style={{ y: imageY }} className="w-full relative industrial-shadow group overflow-hidden md:w-[90%] lg:w-[95%] lg:self-end lg:-mr-4">
               <motion.img initial="hidden" whileInView="visible" viewport={{ once: true, margin: "100px" }} variants={fadeUpVariant} src={work.imageMain} className="w-full h-auto object-contain transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]" alt={work.title} />
            </motion.div>
            
            {/* Sub Visual */}
            {work.imageSub && (
              <motion.div style={{ y: subImageY }} className="w-[85%] md:w-[70%] lg:w-[75%] industrial-shadow relative flex justify-center mt-0 lg:mt-4 mr-auto lg:mr-auto lg:ml-0 z-20 overflow-hidden">
                   <motion.img initial="hidden" whileInView="visible" viewport={{ once: true, margin: "100px" }} variants={fadeUpVariant} src={work.imageSub} alt={`${work.title} detail`} className="w-full h-auto object-contain transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]" />
              </motion.div>
            )}

            {/* Extra Visual - Cover */}
            {work.imageExtra && (
              <motion.div style={{ y: extraImageY }} className="w-[95%] md:w-[80%] lg:w-[80%] relative industrial-shadow ml-auto lg:ml-auto lg:mr-16 z-30 mt-0 lg:mt-4 group overflow-hidden">
                 <motion.img initial="hidden" whileInView="visible" viewport={{ once: true, margin: "100px" }} variants={fadeUpVariant} src={work.imageExtra} className="w-full h-auto object-contain transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]" alt={`${work.title} extra environment`} />
              </motion.div>
            )}
            
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function Works() {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15px", "15px"]);
  const subImageY = useTransform(scrollYProgress, [0, 1], ["25px", "-25px"]);
  const extraImageY = useTransform(scrollYProgress, [0, 1], ["15px", "-15px"]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="works" className="bg-off-white py-12 md:py-40 lg:py-48 relative z-20 overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 mb-12 md:mb-40 flex justify-start md:justify-center w-full">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeUpVariant}
          className="font-serif text-xl md:text-4xl lg:text-5xl tracking-[0.3em] md:tracking-[0.5em] font-light italic text-charcoal uppercase opacity-40 md:opacity-60"
        >
          Selected<br className="md:hidden" /> Works
        </motion.h2>
      </div>
      
      <div className="flex flex-col">
        {works.map((work, idx) => (
          <WorkItem key={work.id} work={work} index={idx} />
        ))}
      </div>
      
      {/* 06 Selected Graphic Works */}
      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 mt-20 lg:mt-64 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeUpVariant}
          className="mb-12 lg:mb-32 flex flex-col lg:flex-row justify-start items-start lg:items-end gap-6 lg:gap-24"
        >
          <div className="flex flex-col">
            <div className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.3em] font-medium text-charcoal mb-4 opacity-60">
              <span className="opacity-50 mr-2 md:inline hidden">PROJ.</span>06 <span className="mx-2 md:mx-4 opacity-30">/</span> Graphic Advertisement / Visual Design
            </div>
            <h2 className="font-serif text-[10vw] sm:text-4xl md:text-5xl lg:text-[70px] xl:text-[80px] font-light tracking-tighter leading-[1] text-charcoal max-w-2xl break-words">
              Selected <br className="hidden lg:block"/>Graphic Works
            </h2>
          </div>
          <p className="font-sans text-[12px] md:text-sm lg:text-[15px] leading-[2.2] mt-2 lg:mt-0 lg:leading-relaxed text-charcoal/80 max-w-sm whitespace-pre-wrap lg:pb-2">
            商品やサービスの魅力を、
一目で印象に残るビジュアルとして表現。

配色・構図・余白を設計しながら、
それぞれの世界観に合わせた広告表現を制作しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          
          {/* Main vertical poster */}
          <div className="lg:col-span-5 flex flex-col relative w-full group items-center lg:items-start md:w-[85%] md:mx-auto lg:w-full">
            <motion.div style={{ y: imageY }} className="w-full industrial-shadow relative overflow-hidden">
              <motion.img 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "100px" }}
                variants={fadeUpVariant}
                src={imgRefrigerator} 
                alt="ICHI techs Refrigerator Ad"
                className="w-full h-auto object-contain filter brightness-[0.98] transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
              />
            </motion.div>
          </div>
          
          {/* Stacked right column */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-24 lg:pt-48 mt-8 lg:mt-0 items-center lg:items-start">
            <motion.div style={{ y: subImageY }} className="relative w-[85%] md:w-[70%] lg:w-[80%] ml-auto lg:ml-4 md:mr-auto industrial-shadow group overflow-hidden">
              <motion.img 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "100px" }}
                variants={fadeUpVariant}
                src={imgSoratowa} 
                alt="Soratowa Tea Ad"
                className="w-full h-auto object-contain filter brightness-[0.98] transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
              />
            </motion.div>
            
            <motion.div style={{ y: extraImageY }} className="relative w-[90%] md:w-[75%] lg:w-[50%] mr-auto lg:mr-8 md:ml-auto md:mr-0 lg:self-end industrial-shadow group mt-4 lg:mt-8 overflow-hidden z-20">
              <motion.img 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "100px" }}
                variants={fadeUpVariant}
                src={imgSoundmaster} 
                alt="SoundMaster Headphones Ad"
                className="w-full h-auto object-contain filter brightness-[0.98] transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
}
