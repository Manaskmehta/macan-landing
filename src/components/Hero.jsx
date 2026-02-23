import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-gradient-bg"></div>
            <div className="container hero-container">
                <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="badge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span>🌍</span> Trusted by clients worldwide
                    </motion.div>
                    
                    <h1 className="hero-title">
                        Build the Future with <br />
                        <span className="gradient-text">Intelligent Software</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        Streamline operations with our cutting-edge ERPs, MECS, and custom software solutions designed for modern enterprises.
                    </p>
                    
                    <div className="hero-actions">
                        <Link to="/contact" className="cta-primary">
                            Get Started <FiArrowRight />
                        </Link>
                    </div>
                    
                    <div className="stats-row">
                        <div className="stat-item">
                            <h3>10+</h3>
                            <p>Clients Worldwide</p>
                        </div>
                        <div className="stat-item">
                            <h3>99.9%</h3>
                            <p>Uptime Guarantee</p>
                        </div>
                         <div className="stat-item">
                            <h3>24/7</h3>
                            <p>Expert Support</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <div className="glass-card dashboard-mockup">
                        <div className="mockup-header">
                            <div className="dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        <div className="mockup-body">
                            <div className="sidebar">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <div className="main-content">
                                <div className="chart-area">
                                     <div className="graph-line"></div>
                                </div>
                                <div className="metrics-grid">
                                    <div className="metric"></div>
                                    <div className="metric"></div>
                                    <div className="metric"></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating elements */}
                        <motion.div 
                            className="floating-card card-1"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span>Revenue</span>
                            <h4>₹1.2Lakhs</h4>
                        </motion.div>
                         <motion.div 
                            className="floating-card card-2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                           <span>Growth</span>
                           <h4>+125%</h4>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
