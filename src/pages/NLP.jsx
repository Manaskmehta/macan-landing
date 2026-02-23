import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiMessageSquare, FiSearch, FiType, FiGlobe, 
    FiArrowRight, FiCheckCircle, FiZap, FiDatabase,
    FiCpu, FiLayout, FiMaximize
} from 'react-icons/fi';
import './FeaturePages.css';

const NLP = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Language Intelligence
                        </div>
                        <h1>
                            Natural Language <br />
                            <span className="gradient-text">Processing (NLP)</span>
                        </h1>
                        <p>
                            Extract meaning from unstructured text at scale. From sentiment analysis to automated 
                            legal document summarization, our NLP solutions bridge the gap between human language and actionable data.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Launch NLP Demo <FiArrowRight /></button>
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
                            {/* Animated background */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '400px',
                                    height: '400px',
                                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)'
                                }}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity
                                }}
                            />

                            {/* Header */}
                            <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, zIndex: 1}}>
                                NLP Processing Engine
                            </div>

                            {/* Sample text being analyzed */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    fontSize: '0.85rem',
                                    lineHeight: '1.6',
                                    color: 'var(--text-secondary)',
                                    zIndex: 1
                                }}
                            >
                                "I absolutely <span style={{color: '#10b981', fontWeight: 600}}>love</span> this product! 
                                The <span style={{color: '#3b82f6', fontWeight: 600}}>customer service</span> was 
                                exceptional and delivery was <span style={{color: '#10b981', fontWeight: 600}}>fast</span>."
                            </motion.div>

                            {/* Analysis results */}
                            <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 1}}>
                                {[
                                    { label: 'Sentiment', value: 'Positive', confidence: 99, color: '#10b981' },
                                    { label: 'Intent', value: 'Purchase', confidence: 95, color: '#3b82f6' },
                                    { label: 'Emotion', value: 'Joy', confidence: 92, color: 'var(--accent-color)' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem'
                                        }}
                                    >
                                        <div style={{
                                            minWidth: '80px',
                                            fontSize: '0.75rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            {item.label}
                                        </div>
                                        <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                                            <div style={{
                                                flex: 1,
                                                height: '8px',
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                borderRadius: '4px',
                                                overflow: 'hidden'
                                            }}>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.confidence}%` }}
                                                    transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
                                                    style={{
                                                        height: '100%',
                                                        background: item.color,
                                                        borderRadius: '4px'
                                                    }}
                                                />
                                            </div>
                                            <div style={{
                                                minWidth: '60px',
                                                fontSize: '0.85rem',
                                                fontWeight: 600,
                                                color: item.color
                                            }}>
                                                {item.value}
                                            </div>
                                            <div style={{
                                                fontSize: '0.75rem',
                                                color: 'var(--text-secondary)'
                                            }}>
                                                {item.confidence}%
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Entities detected */}
                            <div style={{marginTop: 'auto', zIndex: 1}}>
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>
                                    Entities Detected
                                </div>
                                <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                                    {['Product', 'Service', 'Delivery'].map((entity, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1 + i * 0.1 }}
                                            style={{
                                                padding: '0.4rem 0.8rem',
                                                background: 'rgba(139, 92, 246, 0.15)',
                                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                                borderRadius: '6px',
                                                fontSize: '0.75rem',
                                                color: 'var(--accent-color)'
                                            }}
                                        >
                                            {entity}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="container">
                <div className="feature-grid">
                    {[
                        { title: "Sentiment Analysis", desc: "Understand customer emotions and brand perception in real-time across social media and support tickets.", icon: <FiMessageSquare /> },
                        { title: "Entity Extraction", desc: "Automatically identify names, dates, values, and organizations from massive document sets.", icon: <FiSearch /> },
                        { title: "Multi-lingual Support", desc: "Process and translate content across 50+ languages with state-of-the-art accuracy.", icon: <FiGlobe /> },
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
                        <h3>Semantic Search & Discovery</h3>
                        <p>
                            Move beyond simple keyword matching. Our semantic search engines understand 
                            intent and context, delivering relevant results even when words don't match exactly.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Context-aware document retrieval for internal wikis.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Automated categorization and hierarchical indexing.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Topic modeling for large-scale customer feedback analysis.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <FiDatabase style={{fontSize: '10rem', opacity: 0.1, color: 'var(--accent-color)'}} />
                    </div>
                </div>

                {/* Detailed Content Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>LLM Fine-tuning & Deployment</h3>
                        <p>
                            Leverage the power of Large Language Models (LLMs) customized for your brand 
                            voice and specific industrial terminology.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCpu />
                                <span>Custom training on your proprietary knowledge base.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiLayout />
                                <span>RAG (Retrieval-Augmented Generation) for grounded AI.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiMaximize />
                                <span>Scalable API deployment with low-latency response.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <FiZap style={{fontSize: '10rem', opacity: 0.1, color: 'var(--accent-color)'}} />
                    </div>
                </div>
            </section>

             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Optimize your text data?</h2>
                        <p>Unlock the power of language models to automate and enhance your business operations.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> 95% Accuracy</li>
                            <li><FiCheckCircle/> Real-time Processing</li>
                            <li><FiCheckCircle/> Scalable Infrastructure</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Request API Access</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NLP;
