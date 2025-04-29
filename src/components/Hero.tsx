import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const gridImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
  "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400&q=80",
];

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/*Scrolling Background Grid */}
      <div className="absolute inset-0 bg-true-black/90" />

      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -100] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          className="grid grid-cols-1 gap-1"
        >
          {[...gridImages, ...gridImages].map((image, index) => (
            <div
              key={`col1-${index}`}
              className="aspect-square overflow-hidden"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover filter opacity-30"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: [-50, -150] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="grid grid-cols-1 gap-4"
        >
          {[...gridImages.reverse(), ...gridImages.reverse()].map(
            (image, index) => (
              <div
                key={`col2-${index}`}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover filter opacity-30"
                />
              </div>
            )
          )}
        </motion.div>
        <motion.div
          initial={{ y: -25 }}
          animate={{ y: [-25, -125] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 22,
            ease: "linear",
          }}
          className="grid grid-cols-1 gap-1"
        >
          {[...gridImages, ...gridImages].map((image, index) => (
            <div
              key={`col3-${index}`}
              className="aspect-square overflow-hidden"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover filter opacity-30"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: -75 }}
          animate={{ y: [-75, -175] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 28,
            ease: "linear",
          }}
          className="grid grid-cols-1 gap-1"
        >
          {[...gridImages.reverse(), ...gridImages.reverse()].map(
            (image, index) => (
              <div
                key={`col4-${index}`}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover filter opacity-30"
                />
              </div>
            )
          )}
        </motion.div>
      </div>

      {/*Content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-7xl md:text-8xl font-playfair mb-6">
          <span className="hero-underline">NIRVANA X</span>
        </h1>
        <p className="text-xl italic opacity-85 tracking-widest md:text-2xl font-inter max-w-2xl mx-auto px-4">
          Where product branding meets visual storytelling, creating
          unforgettable narratives through the lens of innovation.
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-ogilvy-red" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
