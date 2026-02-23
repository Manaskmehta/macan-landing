import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiSettings, FiCloud, FiCommand, FiActivity, 
    FiShield, FiZap, FiCheckCircle, FiArrowRight,
    FiLayers, FiCpu, FiHardDrive
} from 'react-icons/fi';
import './DevOps.css';
import { 
    MLOpsVisual, 
    DevOpsConsultingVisual, 
    CloudSolutionsVisual, 
    DevOpsHeroVisual 
} from '../components/DevOpsVisuals';

const DevOps = () => {
    const navigate = useNavigate();
    
    const scrollToSection = (e, id) => {
        if (e) e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            window.history.pushState(null, null, `#${id}`);
        }
    };

    return (
        <div className="devops-page">
            <div className="bg-glow-devops"></div>
            
            {/* Hero Section */}
            <section className="devops-hero container">
                <div className="devops-hero-content">
                    <motion.div 
                        className="devops-hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="devops-pill">
                            <span className="dot" style={{color: '#10b981'}}></span> Cloud & Infrastructure Engineering
                        </div>
                        <h1>
                            Modern <br />
                            <span className="gradient-text-devops">DevOps & MLOps</span>
                        </h1>
                        <p>
                            Scale your infrastructure with master-level precision. We provide end-to-end automation, 
                            cloud-native architectures, and high-performance MLOps pipelines to accelerate your innovation.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={(e) => scrollToSection(e, 'mlops')}>Explore MLOps <FiArrowRight /></button>
                            <button className="cta-secondary" onClick={(e) => scrollToSection(e, 'cloud-solutions')}>Cloud Expertise</button>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="devops-hero-visual"
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <DevOpsHeroVisual />
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="container">
                <div className="devops-grid">
                    {[
                        { title: "MLOps Excellence", id: "mlops", desc: "Automate machine learning workflows from data ingestion and versioning to production monitoring.", icon: <FiSettings /> },
                        { title: "DevOps Consulting", id: "devops-consulting", desc: "Strategic CI/CD architecture, Infrastructure as Code (IaC), and platform engineering.", icon: <FiCommand /> },
                        { title: "Enterprise Cloud", id: "cloud-solutions", desc: "Multi-cloud management, zero-downtime migrations, and high-security cloud architectures.", icon: <FiCloud /> },
                    ].map((f, i) => (
                        <motion.div 
                            key={i} 
                            className="devops-card" 
                            onClick={(e) => scrollToSection(e, f.id)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="devops-icon-wrapper">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                            <div className="devops-card-footer">View Deep Dive <FiArrowRight /></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* MLOps Section */}
            <section id="mlops" className="info-section-devops container">
                <div className="detail-row">
                    <motion.div 
                        className="detail-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="devops-pill">AI Operations</div>
                        <h3>MLOps Excellence</h3>
                        <p>
                            Bridging the gap between data science and production. We build resilient 
                            pipelines that ensure your models are versioned, tested, and monitored in real-time.
                        </p>
                        <div className="ai-feature-list">
                            <li><FiCheckCircle /> Automated Model Retraining & Validation.</li>
                            <li><FiCheckCircle /> Feature Store Implementation & Management.</li>
                            <li><FiCheckCircle /> Drift Detection & Performance Monitoring.</li>
                        </div>
                    </motion.div>
                    <div className="detail-visual glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
                        <MLOpsVisual />
                    </div>
                </div>
            </section>

            {/* DevOps Consulting Section */}
            <section id="devops-consulting" className="info-section-devops container alternate">
                <div className="detail-row reverse">
                    <motion.div 
                        className="detail-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="devops-pill">Strategy</div>
                        <h3>DevOps Consulting</h3>
                        <p>
                            Transform your development culture. Our consultants help you implement 
                            best-in-class CI/CD practices that reduce friction and improve reliability.
                        </p>
                        <div className="ai-feature-list">
                            <li><FiCheckCircle /> Terraform & Infrastructure as Code (IaC).</li>
                            <li><FiCheckCircle /> Kubernetes & Container Orchestration.</li>
                            <li><FiCheckCircle /> Zero-Downtime Deployment Strategies.</li>
                        </div>
                    </motion.div>
                    <div className="detail-visual glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
                        <DevOpsConsultingVisual />
                    </div>
                </div>
            </section>

            {/* Cloud Solutions Section */}
            <section id="cloud-solutions" className="info-section-devops container">
                <div className="detail-row">
                    <motion.div 
                        className="detail-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="devops-pill">Infrastructure</div>
                        <h3>Enterprise Cloud Solutions</h3>
                        <p>
                            Secure, scalable, and cost-optimized cloud architectures. Whether it's 
                            AWS, Azure, or GCP, we ensure your infrastructure is built for the future.
                        </p>
                        <div className="ai-feature-list">
                            <li><FiCheckCircle /> Multi-cloud & Hybrid-cloud Architectures.</li>
                            <li><FiShield /> Cloud Security & Compliance Auditing.</li>
                            <li><FiCheckCircle /> FinOps & Cost Optimization Strategies.</li>
                        </div>
                    </motion.div>
                    <div className="detail-visual glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
                        <CloudSolutionsVisual />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: '#3b82f6', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(59, 130, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Optimize your infrastructure?</h2>
                        <p>Join world-class engineering teams who trust us to manage their most critical systems.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> 24/7 Availability</li>
                            <li><FiCheckCircle/> 99.9% Uptime Guarantee</li>
                            <li><FiCheckCircle/> SLA Driven Support</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Contact Platform Team</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DevOps;
