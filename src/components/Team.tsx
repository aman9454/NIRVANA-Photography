import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Aperture, Film, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Alexandra Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    specialty: 'Editorial & Fashion',
    bio: 'With over a decade of experience in fashion photography, Alexandra brings her unique vision to every project.',
    icon: Camera,
    notable: 'Vogue, Elle, Harper Bazaar'
  },
  {
    id: 2,
    name: 'Marcus Rivera',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    specialty: 'Product & Lighting',
    bio: 'Marcus specializes in creating stunning product imagery through innovative lighting techniques.',
    icon: Aperture,
    notable: 'Apple, Nike, Samsung'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Art Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    specialty: 'Conceptual & Fine Art',
    bio: 'Sarahs work bridges the gap between commercial photography and fine art.',
    icon: Lightbulb,
    notable: 'Museum of Modern Art, Venice Biennale'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Cinematographer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    specialty: 'Motion & Narrative',
    bio: 'David brings stories to life through his cinematic approach to commercial photography.',
    icon: Film,
    notable: 'BMW, Mercedes-Benz, Audi'
  }
];

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="py-24 px-4 bg-true-black scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair mb-6">Our Team</h2>
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            A collective of visionary photographers and artists pushing the boundaries of visual storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden bg-slate-gray/10 rounded-lg">
                  <div className="aspect-w-4 aspect-h-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-true-black/90 via-true-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <p className="text-slate-gray mb-4">{member.bio}</p>
                        <div className="border-t border-ogilvy-red/30 pt-4">
                          <p className="text-sm text-slate-gray">Notable Projects</p>
                          <p className="text-white">{member.notable}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="text-ogilvy-red" size={24} />
                      <div>
                        <h3 className="text-2xl font-playfair">{member.name}</h3>
                        <p className="text-slate-gray">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-ogilvy-red font-medium">{member.specialty}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;