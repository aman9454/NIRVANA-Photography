import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin as LinkedIn } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'studio@nirvanax.com',
    link: 'mailto:studio@nirvanax.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'SoHo, New York City',
    link: 'https://maps.google.com'
  }
];

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://instagram.com'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: 'https://twitter.com'
  },
  {
    icon: LinkedIn,
    label: 'LinkedIn',
    link: 'https://linkedin.com'
  }
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.'
      });
      form.reset();
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-true-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
           {/* Contact Form */}
           <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-slate-gray/5 p-8 rounded-lg"
          >
            <h2 className="text-5xl font-playfair mb-8 text-center">Get in Touch</h2>
            <p className="text-slate-gray text-lg mb-12 text-center">
              Let's discuss your next project and create something extraordinary together.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-gray mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-slate-gray/10 border border-slate-gray/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ogilvy-red transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-slate-gray/10 border border-slate-gray/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ogilvy-red transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-gray mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-slate-gray/10 border border-slate-gray/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ogilvy-red transition-colors duration-300"
                  placeholder="Project Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-gray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-slate-gray/10 border border-slate-gray/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ogilvy-red transition-colors duration-300"
                  placeholder="Tell us about your project..."
                />
              </div>

              {formStatus.message && (
                <div className={`p-4 rounded-lg ${
                  formStatus.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ogilvy-red text-white py-4 rounded-lg hover:bg-ogilvy-red/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Studio Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Contact Details */}
            <div>
              <h3 className="text-3xl font-playfair mb-9">Contact Details</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 bg-slate-gray/10 rounded-lg group-hover:bg-ogilvy-red/10 transition-colors duration-300">
                        <Icon className="text-ogilvy-red" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-gray">{info.label}</p>
                        <p className="text-white group-hover:text-ogilvy-red transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-2xl font-playfair mb-8">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        className="p-4 bg-slate-gray/10 rounded-lg hover:bg-ogilvy-red/10 transition-colors duration-300 group"
                      >
                        <Icon className="text-ogilvy-red" size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Studio Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="p-8 bg-slate-gray/10 rounded-lg h-full"
            >
              <h3 className="text-2xl font-playfair mb-6">Studio Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-gray">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-gray">Saturday</span>
                  <span className="text-white">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-gray">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;