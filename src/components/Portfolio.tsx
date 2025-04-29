import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    category: 'Fashion',
    image: 'shot1.png',
    title: 'Premium Luxury',
  },
  {
    id: 2,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    title: 'Timeless Elegance',
  },
  {
    id: 3,
    category: 'Product',
    image: 'shot2.png',
    title: 'Necromantic',
  },
  {
    id: 4,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    title: 'Minimal Workspace',
  },
  {
    id: 5,
    category: 'Fashion',
    image: 'shot5.png',
    title: 'Neon Noir',
  },
  {
    id: 6,
    category: 'Product',
    image: 'shot4.png',
    title: "Witch's Lullaby",
  },
  {
    id: 7,
    category: 'Fashion',
    image: 'shot3.png',
    title: "Lunaire Nocturne",
  },
  {
    id: 8,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    title: 'Minimal Workspace',
  },
  {
    id: 9,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80',
    title: 'Studio Lighting',
  },
  {
    id: 10,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80',
    title: 'Minimal Product',
  },
  {
    id: 11,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    title: 'Fashion Editorial',
  },
  {
    id: 12,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8?w=800&q=80',
    title: 'Creative Space',
  },
  {
    id: 13,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80',
    title: 'Watch Collection',
  },
  {
    id: 14,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    title: 'Summer Collection',
  },
  {
    id: 15,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80',
    title: 'Office Life',
  },
];

const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500:1,
  };

  return (
    <section id="portfolio" className="py-24 px-4 bg-true-black scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h2 className="text-5xl font-playfair mb-12 text-center">Portfolio</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-ogilvy-red text-white'
                  : 'bg-slate-gray/20 text-slate-gray hover:bg-slate-gray/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div className="relative group overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-true-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-playfair text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </motion.div>
    </section>
  );
};

export default Portfolio;