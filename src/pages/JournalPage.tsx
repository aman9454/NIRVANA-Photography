import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const JournalPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24 bg-true-black min-h-screen mt-10">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-playfair mb-6">Journal</h1>
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            Dive deep into our world of photography, techniques, and creative insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/journal/${post.id}`} className="group block">
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-true-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-gray">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag size={16} />
                      <span>{post.category}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-playfair group-hover:text-ogilvy-red transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-gray">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-ogilvy-red group-hover:gap-4 transition-all duration-300">
                    <span>Read More</span>
                    <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;