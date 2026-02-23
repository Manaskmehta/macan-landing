import React from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiSettings, FiCode, FiLayers, FiBarChart2, FiCpu } from 'react-icons/fi';
import './Features.css';

const features = [
    {
        icon: <FiDatabase />,
        title: 'Enterprise ERP',
        description: 'Comprehensive resource planning to unify your business operations from finance to supply chain.',
        color: 'from-blue-500 to-cyan-500' 
    },
    {
        icon: <FiCpu />,
        title: 'MECS Platform',
        description: 'Advanced Manufacturing Execution & Control Systems to optimize production lines in real-time.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: <FiCode />,
        title: 'Custom Solutions',
        description: 'Tailor-made software built specifically for your unique business challenges and goals.',
        color: 'from-orange-500 to-red-500'
    },
    {
        icon: <FiLayers />,
        title: 'Scalable Architecture',
        description: 'Built on microservices to ensure your platform grows with your user base without friction.',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: <FiBarChart2 />,
        title: 'Advanced Analytics',
        description: 'Deep insights and predictive reporting to help you make data-driven decisions.',
        color: 'from-yellow-400 to-orange-400'
    },
    {
        icon: <FiSettings />,
        title: 'Process Automation',
        description: 'Automate repetitive tasks and workflows to increase efficiency and reduce error rates.',
        color: 'from-indigo-500 to-blue-500'
    }
];

const Features = () => {
  return (
    <section className="features-section" id="services">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core <span className="gradient-text">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering businesses with a suite of integrated tools designed for performance and scalability.
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`feature-icon-wrapper`}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
