import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiCpu, FiTrendingUp, FiTarget, FiMessageSquare, 
    FiArrowRight, FiCheckCircle, FiCompass, FiLayers, FiShield,
    FiSearch, FiActivity, FiUsers
} from 'react-icons/fi';
import './FeaturePages.css';

const AIConsulting = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Strategic AI
                        </div>
                        <h1>
                            Expert <br />
                            <span className="gradient-text">AI Consulting</span>
                        </h1>
                        <p>
                            Navigate the complex landscape of Artificial Intelligence with confidence. 
                            We provide strategic roadmaps that align AI capabilities with your business goals, 
                            ensuring sustainable growth and competitive advantage.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Book a Strategy Session <FiArrowRight /></button>
                            <button className="cta-secondary" onClick={() => navigate('/contact')}>Our Methodology</button>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="feature-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="app-mockup glass-panel" style={{
                            minHeight: '380px',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Background compass */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            >
                                <FiCompass style={{fontSize: '12rem', color: 'var(--accent-color)', opacity: 0.05}} />
                            </motion.div>

                            {/* Header */}
                            <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, zIndex: 1}}>
                                AI Strategy Roadmap
                            </div>

                            {/* Roadmap phases */}
                            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 1}}>
                                {[
                                    { phase: 'Discovery', progress: 100, color: '#10b981' },
                                    { phase: 'Architecture', progress: 85, color: '#3b82f6' },
                                    { phase: 'Implementation', progress: 60, color: 'var(--accent-color)' },
                                    { phase: 'Optimization', progress: 30, color: '#6366f1' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            padding: '1rem',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(255, 255, 255, 0.05)'
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.85rem'
                                        }}>
                                            <span style={{color: '#fff'}}>{item.phase}</span>
                                            <span style={{color: item.color}}>{item.progress}%</span>
                                        </div>
                                        <div style={{
                                            width: '100%',
                                            height: '6px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '3px',
                                            overflow: 'hidden'
                                        }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.progress}%` }}
                                                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                                style={{
                                                    height: '100%',
                                                    background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`,
                                                    borderRadius: '3px'
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Status badges */}
                            <div style={{display: 'flex', gap: '0.75rem', marginTop: 'auto', zIndex: 1}}>
                                <motion.div
                                    className="dash-card"
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem',
                                        background: 'rgba(139, 92, 246, 0.1)',
                                        border: '1px solid rgba(139, 92, 246, 0.3)'
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)'}}>Version</div>
                                    <div style={{fontSize: '1.1rem', fontWeight: 600}}>v2.4</div>
                                </motion.div>
                                <motion.div
                                    className="dash-card"
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '1px solid rgba(16, 185, 129, 0.3)'
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)'}}>Status</div>
                                    <div style={{fontSize: '1.1rem', fontWeight: 600, color: '#10b981'}}>✓ Audit Pass</div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="container">
                <div className="feature-grid">
                    {[
                        { title: "Readiness Audit", desc: "Evaluate your data infrastructure and architectural readiness for AI integration.", icon: <FiShield /> },
                        { title: "ROI Modeling", desc: "Calculate the potential business value and return on investment for AI projects.", icon: <FiTrendingUp /> },
                        { title: "Strategic Roadmap", desc: "Phase-wise implementation plan tailored to your specific industry constraints.", icon: <FiTarget /> },
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
                        <h3>Custom AI Frameworks</h3>
                        <p>
                            We don't believe in one-size-fits-all. Our consultants work deeply with 
                            your domain experts to build frameworks that solve actual business problems, 
                            focusing on scalability and long-term maintenance.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Domain-specific model selection and fine-tuning strategies.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Ethical AI guidelines and data privacy compliance standards.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Legacy system modernization for high-performance AI compatibility.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <FiLayers style={{fontSize: '10rem', opacity: 0.1, color: 'var(--accent-color)'}} />
                    </div>
                </div>

                {/* Detailed Content Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>Data Strategy & Governance</h3>
                        <p>
                            The quality of your AI is only as good as the quality of your data. We help 
                            you establish robust pipelines and governance structures to fuel your 
                            intelligence engines.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiSearch />
                                <span>Deep-dive data auditing and cleaning protocols.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiActivity />
                                <span>Real-time data quality monitoring and alerting.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiUsers />
                                <span>Role-based data access and security architecture.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <FiActivity style={{fontSize: '10rem', opacity: 0.1, color: 'var(--accent-color)'}} />
                    </div>
                </div>
            </section>

             {/* Deployment Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Start your AI journey right?</h2>
                        <p>Our consultants help you avoid expensive mistakes and focus on high-impact wins.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> Expert Guidance</li>
                            <li><FiCheckCircle/> Tailored Solutions</li>
                            <li><FiCheckCircle/> Clear ROI</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Contact Consultant</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AIConsulting;
