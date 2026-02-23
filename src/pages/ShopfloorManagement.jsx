import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiSettings, FiActivity, FiCpu, FiClock, 
    FiShield, FiTrendingUp, FiZap, FiBarChart2,
    FiCheckCircle, FiArrowRight, FiHardDrive, FiMonitor
} from 'react-icons/fi';
import './ShopfloorManagement.css';

const ShopfloorManagement = () => {
    const navigate = useNavigate();
    return (
        <div className="shopfloor-page">
            <div className="shopfloor-bg-glow"></div>
            
            {/* Hero Section */}
            <section className="shopfloor-hero container">
                <div className="sf-hero-content">
                    <motion.div 
                        className="sf-hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="pill-badge">
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Industrial Excellence
                        </div>
                        <h1>
                            Optimize Your <br />
                            <span className="gradient-text">Shopfloor Intelligence</span>
                        </h1>
                        <p>
                            Real-time visibility into machine performance, worker efficiency, and production quality. 
                            The digital backbone for modern manufacturing.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>
                                Explore Dashboard <FiArrowRight />
                            </button>
                            <button className="cta-secondary" onClick={() => navigate('/contact')}>
                                Technical Specs
                            </button>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="sf-hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="app-mockup glass-panel" style={{minHeight: '400px', padding: '1.5rem'}}>
                            <div className="mockup-header" style={{marginBottom: '2rem'}}>
                                <span className="circle red"></span>
                                <span className="circle yellow"></span>
                                <span className="circle green"></span>
                            </div>
                            <div className="sf-live-data" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                                <div className="dash-card" style={{border: '1px solid rgba(139, 92, 246, 0.2)'}}>
                                    <FiActivity style={{color: 'var(--accent-color)'}} />
                                    <span style={{fontSize: '0.8rem', opacity: 0.6}}>OEE Score</span>
                                    <h3 style={{fontSize: '1.8rem'}}>94.2%</h3>
                                </div>
                                <div className="dash-card" style={{border: '1px solid rgba(139, 92, 246, 0.2)'}}>
                                    <FiClock style={{color: 'var(--accent-color)'}} />
                                    <span style={{fontSize: '0.8rem', opacity: 0.6}}>Downtime</span>
                                    <h3 style={{fontSize: '1.8rem'}}>12m</h3>
                                </div>
                                <div className="dash-card" style={{gridColumn: '1 / span 2', background: 'rgba(139, 92, 246, 0.05)'}}>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                                        <span style={{fontSize: '0.8rem'}}>Production Line 04</span>
                                        <span style={{fontSize: '0.8rem', color: '#28c840'}}>Active</span>
                                    </div>
                                    <div style={{height: '60px', display: 'flex', alignItems: 'flex-end', gap: '4px'}}>
                                        {[40, 70, 45, 90, 65, 80, 50, 85, 95, 70, 60, 75].map((h, i) => (
                                            <div key={i} style={{flex: 1, height: `${h}%`, background: 'var(--accent-color)', borderRadius: '2px', opacity: 0.6 + (h/200)}}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Features */}
            <section className="sf-process-section container">
                <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
                    <h2 style={{fontSize: '2.5rem'}}>Precision Control Modules</h2>
                    <p style={{color: 'var(--text-secondary)'}}>Everything you need to manage a high-performance factory floor.</p>
                </div>
                
                <div className="sf-process-grid">
                    {[
                        { title: "Machine Monitoring", desc: "Real-time IoT integration to track machine health and cycle times.", icon: <FiCpu />, step: "01" },
                        { title: "Quality Assurance", desc: "Digital inspection logs and automated defect tracking workflows.", icon: <FiShield />, step: "02" },
                        { title: "Operator Tracking", desc: "Manage shifts, performance, and productivity metrics per workstation.", icon: <FiMonitor />, step: "03" },
                        { title: "Predictive Maintenance", desc: "AI-driven alerts before machine failures happen, reducing downtime.", icon: <FiZap />, step: "04" },
                    ].map((item, i) => (
                        <div key={i} className="sf-card">
                            <span className="sf-card-step">{item.step}</span>
                            <div className="sf-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Monitoring Terminal */}
            <section className="sf-monitoring">
                <div className="container">
                    <div className="section-header" style={{textAlign: 'center', marginBottom: '3rem'}}>
                        <h2>Live Production Stream</h2>
                    </div>
                    <div className="monitor-frame glass-panel">
                        <div className="monitor-header">
                            <div className="monitor-dots">
                                <span className="monitor-dot dot-red"></span>
                                <span className="monitor-dot dot-yellow"></span>
                                <span className="monitor-dot dot-green"></span>
                            </div>
                            <span style={{fontSize: '0.8rem', opacity: 0.5}}>terminal -- shopfloor-agent-v1.0.4</span>
                        </div>
                        <div className="monitor-body">
                            {[
                                { tag: "[INFO]", text: "Initializing IoT Gateway connection..." },
                                { tag: "[OK  ]", text: "Machine ID: M-842 Connected. Frequency: 50.2Hz" },
                                { tag: "[DATA]", text: "Batch #4029 processing started at Station 4." },
                                { tag: "[WARN]", text: "Operating temperature rising in Line 02 - Threshold: 75°C" },
                                { tag: "[OK  ]", text: "Quality check passed for Unit ABC-1029." },
                                { tag: "[INFO]", text: "OEE Calculation updated: 94.2% Efficient." },
                            ].map((line, i) => (
                                <div key={i} className="terminal-line">
                                    <span className="line-tag">{line.tag}</span>
                                    <span className="line-content">{line.text}</span>
                                </div>
                            ))}
                            <div className="terminal-line">
                                <span className="line-tag">_</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Deployment Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel">
                    <div className="banner-content">
                        <h2>Ready to digitize your factory?</h2>
                        <p>Let's map your shopfloor processes to a high-performance digital twin.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> Hardware Integration Support</li>
                            <li><FiCheckCircle/> Real-time IoT Connectivity</li>
                            <li><FiCheckCircle/> Enterprise Security Architecture</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Contact Tech Team</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopfloorManagement;
