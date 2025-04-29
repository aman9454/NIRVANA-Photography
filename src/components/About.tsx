import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, Users } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Industry Recognition',
    description: '15+ International Photography Awards'
  },
  {
    icon: Users,
    title: 'Global Clientele',
    description: 'Trusted by 200+ Premium Brands'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Featured in Leading Publications'
  }
];

const testimonials = [
  {
    quote: "Nirvana X transformed our brand identity through their exceptional visual storytelling. Their attention to detail and creative vision exceeded our expectations.",
    author: "Emily Chen",
    position: "Creative Director, Luxe Fashion"
  },
  {
    quote: "Working with Nirvana X was a game-changer for our product launches. Their ability to capture the essence of our brand is unmatched.",
    author: "Michael Stewart",
    position: "Marketing Head, Tech Innovations"
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-true-black scroll-mt-20 mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Studio Philosophy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-playfair mb-8">Our Approach</h2>
            <div className="prose prose-invert">
              <p className="text-lg text-slate-gray leading-relaxed mb-6">
                At Nirvana X, we believe in the transformative power of visual storytelling. Our approach combines technical excellence with artistic innovation, creating imagery that resonates and inspires.
              </p>
              <p className="text-lg text-slate-gray leading-relaxed mb-6">
                Every project is an opportunity to push boundaries and challenge conventional perspectives. We work closely with our clients to understand their vision and translate it into compelling visual narratives.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="p-6 bg-slate-gray/10 rounded-lg"
                  >
                    <Icon className="text-ogilvy-red mb-4" size={24} />
                    <h3 className="text-xl font-playfair mb-2">{achievement.title}</h3>
                    <p className="text-slate-gray">{achievement.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-16 h-16 -mt-4 -ml-4">
                <div className="absolute transform rotate-45 w-full h-full border-l-2 border-t-2 border-ogilvy-red" />
              </div>
              
              <div className="space-y-12 pl-8 pt-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    className="relative"
                  >
                    <blockquote className="text-xl font-playfair italic mb-4 text-white">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-px w-12 bg-ogilvy-red mr-4" />
                      <div>
                        <p className="font-medium text-white">{testimonial.author}</p>
                        <p className="text-slate-gray">{testimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Studio Stats */}
            <div className="mt-16 p-8 bg-slate-gray/10 rounded-lg">
              <h3 className="text-2xl font-playfair mb-6">Studio Recognition</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-gray">Client Satisfaction</span>
                  <span className="text-ogilvy-red font-medium">98%</span>
                </div>
                <div className="w-full h-1 bg-slate-gray/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '98%' } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-ogilvy-red"
                  />
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-slate-gray">Project Completion Rate</span>
                  <span className="text-ogilvy-red font-medium">100%</span>
                </div>
                <div className="w-full h-1 bg-slate-gray/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-ogilvy-red"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;