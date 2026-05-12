import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Artificial delay for an ambient loader
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(onComplete, 1200); // Wait for exit animation
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-off-white flex justify-center items-center pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1, filter: isLoaded ? "blur(10px)" : "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col items-center overflow-hidden">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-serif italic text-2xl text-charcoal tracking-widest font-light"
        >
          7FUKU design
        </motion.div>
      </div>
    </motion.div>
  );
}
