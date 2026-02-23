import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiLayers, FiCheckCircle, FiTrendingUp, FiSettings, 
    FiUsers, FiDatabase, FiShield, FiBriefcase, 
    FiArrowRight, FiActivity, FiGlobe, FiPieChart
} from 'react-icons/fi';
import './CorporateERP.css';

const CorporateERP = () => {
    const navigate = useNavigate();
    return (
        <div className="corporate-page">
            <div className="corporate-bg-glow"></div>
            
            {/* Hero Section */}
            <section className="corporate-hero container">
                <div className="corp-hero-content">
                    <motion.div 
                        className="corp-hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="pill-badge">
                            <span className="dot" style={{backgroundColor: '#10b981'}}></span> For Enterprise Businesses
                        </div>
                        <h1>
                            Unified Control for <br />
                            <span className="gradient-text-corp">Corporate Operations</span>
                        </h1>
                        <p>
                            MacanX Corporate ERP integrates finance, human resources, supply chain, and customer relations 
                            into a single, powerful platform designed for multi-location enterprises.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" style={{backgroundColor: '#10b981', borderColor: '#10b981'}} onClick={() => navigate('/contact')}>
                                Request a Demo <FiArrowRight />
                            </button>
                            <button className="cta-secondary" onClick={() => navigate('/contact')}>
                                View Solutions
                            </button>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="corp-hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="app-mockup glass-panel" style={{minHeight: '400px', padding: '0'}}>
                            <div className="mockup-header" style={{padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                                <span className="circle red"></span>
                                <span className="circle yellow"></span>
                                <span className="circle green"></span>
                            </div>
                            <div className="mockup-body" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                                <div style={{display: 'flex', gap: '1rem'}}>
                                    <div className="dash-card" style={{flex: 1}}>
                                        <span style={{fontSize: '0.8rem', opacity: 0.7}}>Total Revenue</span>
                                        <h3>$12.4M</h3>
                                        <span style={{fontSize: '0.7rem', color: '#10b981'}}>+14% vs LY</span>
                                    </div>
                                    <div className="dash-card" style={{flex: 1}}>
                                        <span style={{fontSize: '0.8rem', opacity: 0.7}}>OpEx Efficiency</span>
                                        <h3>92.3%</h3>
                                        <span style={{fontSize: '0.7rem', color: '#10b981'}}>Optimized</span>
                                    </div>
                                </div>
                                <div className="dash-card" style={{flex: 1, minHeight: '150px', background: 'rgba(16, 185, 129, 0.05)'}}>
                                    <FiActivity style={{fontSize: '3rem', color: '#10b981', opacity: 0.5}} />
                                    <div style={{marginTop: 'auto'}}>
                                        <p style={{fontSize: '0.9rem'}}>Enterprise Resource Utilization</p>
                                        <div style={{height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '0.5rem'}}>
                                            <div style={{width: '75%', height: '100%', background: '#10b981', borderRadius: '2px'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="corp-stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-box">
                            <h2>200+</h2>
                            <p>Global Enterprises</p>
                        </div>
                        <div className="stat-box">
                            <h2>100%</h2>
                            <p>Data Integrity</p>
                        </div>
                        <div className="stat-box">
                            <h2>35%</h2>
                            <p>Cost Reduction</p>
                        </div>
                        <div className="stat-box">
                            <h2>24/7</h2>
                            <p>Global Support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Modules */}
            <section className="corp-features-section container">
                <div className="section-header-ai">
                    <h2>Full-Stack Enterprise Solutions</h2>
                    <p style={{color: 'var(--text-secondary)'}}>A modular approach to business excellence.</p>
                </div>
                
                <div className="corp-grid-container">
                    {[
                        { title: "Finance & Accounts", desc: "Automated bookkeeping, tax compliance, and multi-currency consolidation.", icon: <FiPieChart /> },
                        { title: "Human Capital Mgmt", desc: "End-to-end employee lifecycle management from hiring to payroll.", icon: <FiUsers /> },
                        { title: "Supply Chain Pro", desc: "Next-gen inventory, procurement, and logistics management.", icon: <FiBriefcase /> },
                        { title: "Business Intelligence", desc: "Real-time dashboards and predictive analytics for data-driven decisions.", icon: <FiTrendingUp /> },
                        { title: "Compliance & Security", desc: "Enterprise-grade encryption and automated audit logs for regulation.", icon: <FiShield /> },
                        { title: "Global Operations", desc: "Manage multi-country entities with localized tax and language support.", icon: <FiGlobe /> },
                    ].map((item, i) => (
                        <div key={i} className="corp-feature-card">
                            <div className="corp-icon-box">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Integration Section */}
            <section className="integration-section container">
                <div className="section-header-ai">
                    <h2>Seamless Ecosystem Integration</h2>
                    <p>Connect MacanX with the tools your team already uses.</p>
                </div>
                <div className="integration-logos">
                    <span className="integration-item">SAP S/4HANA</span>
                    <span className="integration-item">Salesforce</span>
                    <span className="integration-item">Microsoft 365</span>
                    <span className="integration-item">AWS</span>
                    <span className="integration-item">Oracle Cloud</span>
                </div>
            </section>

             {/* Deployment Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'rgba(16, 185, 129, 0.3)', background: 'linear-gradient(135deg, rgba(20, 20, 28, 0.9) 0%, rgba(16, 185, 129, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Ready to scale your enterprise?</h2>
                        <p>Get a customized implementation plan built for your business needs.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> Dedicated Success Manager</li>
                            <li><FiCheckCircle/> Zero-Downtime Migration</li>
                            <li><FiCheckCircle/> Ongoing Security Audits</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" style={{backgroundColor: '#10b981', borderColor: '#10b981'}} onClick={() => navigate('/contact')}>Contact Sales</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CorporateERP;
