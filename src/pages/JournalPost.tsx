import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';

const JournalPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id.toString() === id);

  if (!post) {
    return (
      <div className="pt-24 min-h-screen bg-true-black">
        <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-playfair mb-8">Post not found</h1>
          <Link 
            to="/journal"
            className="inline-flex items-center text-ogilvy-red hover:text-ogilvy-red/80 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-true-black mt-10">
      <article className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/journal"
            className="inline-flex items-center text-ogilvy-red hover:text-ogilvy-red/80 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Journal
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-slate-gray mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span>{post.category}</span>
              </div>
            </div>

            <h1 className="text-5xl font-playfair mb-8">{post.title}</h1>
            
            <div className="relative aspect-video mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-slate-gray leading-relaxed mb-8">
                {post.excerpt}
              </p>
              
              <div className="space-y-6 text-slate-gray">
                <p>
                  In the ever-evolving world of photography, mastering the art of visual storytelling requires a deep understanding of both technical expertise and creative vision. At Nirvana X, we believe that every image should not just capture a moment, but tell a compelling story that resonates with viewers on an emotional level.
                </p>

                <p>
                  Our approach combines traditional photography techniques with innovative modern methods, always pushing the boundaries of what's possible while maintaining the highest standards of quality and artistic integrity.
                </p>

                <h2 className="text-3xl font-playfair text-white mt-12 mb-6">The Creative Process</h2>
                
                <p>
                  Every project begins with a thorough understanding of the subject matter and the story we want to tell. We carefully consider lighting, composition, and timing to create images that not only look beautiful but also convey the intended message effectively.
                </p>

                <p>
                  Through careful attention to detail and a commitment to excellence, we ensure that each photograph meets our exacting standards while fulfilling our clients' creative vision.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default JournalPost;