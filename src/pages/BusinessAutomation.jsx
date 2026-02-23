import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiSettings, FiZap, FiLayers, FiActivity, 
    FiArrowRight, FiCheckCircle, FiCpu, FiGrid,
    FiFileText, FiShield, FiTrendingUp
} from 'react-icons/fi';
import './FeaturePages.css';

const BusinessAutomation = () => {
    const navigate = useNavigate();
    return (
        <div className="feature-page">
            <div className="feature-bg-glow"></div>
            
            {/* Hero Section */}
            <section className="feature-hero container">
                <div className="feature-hero-content">
                    <motion.div 
                        className="feature-hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="pill-badge">
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Operational Excellence
                        </div>
                        <h1>
                            Intelligent <br />
                            <span className="gradient-text">Business Automation</span>
                        </h1>
                        <p>
                            Streamline repetitive admin tasks and complex workflows with AI-driven automation. 
                            From back-office operations to executive administration, focus on high-value strategy.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Launch Automation Lab <FiArrowRight /></button>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="feature-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="app-mockup glass-panel" style={{minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{textAlign: 'center', color: 'var(--accent-color)'}}>
                                <FiCpu style={{fontSize: '6rem', opacity: 0.5, marginBottom: '1rem'}} />
                                <div className="dash-card">Autopilot Active: 84% tasks</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="container">
                <div className="feature-grid">
                    {[
                        { title: "RPA Integration", desc: "Automate legacy desktop and web applications with intelligent bots that work tirelessly 24/7.", icon: <FiCpu /> },
                        { title: "Smart Admin Hub", desc: "AI assistants for calendar management, document sorting, and stakeholder communications.", icon: <FiGrid /> },
                        { title: "Workflow Orchestration", desc: "End-to-end task execution across multiple software platforms without manual intervention.", icon: <FiZap /> },
                    ].map((f, i) => (
                        <div key={i} className="feature-card glass-panel">
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed Content Section 1 */}
            <section className="info-section container">
                <div className="detail-row">
                    <div className="detail-content">
                        <h3>Strategic Process Optimization</h3>
                        <p>
                            We don't just automate chaos; we restructure for efficiency. Our team identifies 
                            structural bottlenecks before deploying intelligent agents.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Zero-error automated data entry and cross-platform migration.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiShield />
                                <span>Multi-tier approval workflows with secure digital signatures.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Legacy system integration via secure, high-performance API gateways.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <FiSettings style={{fontSize: '10rem', opacity: 0.1, color: 'var(--accent-color)'}} />
                    </div>
                </div>

                {/* Detailed Content Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>AI Document Intelligence</h3>
                        <p>
                            Stop manually processing invoices, contracts, and receipts. Our document 
                            intelligence engine extracts, validates, and files data automatically.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiFileText />
                                <span>Automated invoice matching and ledger reconciliation.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiTrendingUp />
                                <span>Expense trend analysis and budget variance alerts.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Legal contract risk assessment and clause summarization.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <FiFileText style={{fontSize: '10rem', opacity: 0.1, color: 'var(--accent-color)'}} />
                    </div>
                </div>
            </section>

             {/* Deployment Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Ready to scale your efficiency?</h2>
                        <p>Transform your business into a high-performance engine where AI handles the repetitive work.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> 40%+ Cost Reduction</li>
                            <li><FiCheckCircle/> 100% Data Accuracy</li>
                            <li><FiCheckCircle/> Rapid Deployment</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Contact Automation Hub</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessAutomation;
