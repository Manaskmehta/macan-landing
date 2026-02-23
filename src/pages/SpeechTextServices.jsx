import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiMic, FiMusic, FiPhone, FiVolume2, 
    FiArrowRight, FiCheckCircle, FiCpu, FiMessageCircle,
    FiFileText, FiActivity, FiGlobe, FiUsers
} from 'react-icons/fi';
import './FeaturePages.css';

const SpeechTextServices = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Audio Intelligence
                        </div>
                        <h1>
                            Advanced <br />
                            <span className="gradient-text">Speech & Text Services</span>
                        </h1>
                        <p>
                            High-accuracy transcription, translation, and synthesis. From automated customer 
                            support to real-time meeting intelligence, we turn voice into actionable business data.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Launch Audio Demo <FiArrowRight /></button>
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
                                <FiMic style={{fontSize: '6rem', opacity: 0.4, marginBottom: '1rem'}} />
                                <div style={{display: 'flex', gap: '3px', justifyContent: 'center'}}>
                                    {[10, 30, 50, 20, 40, 60, 30].map((h, i) => (
                                        <div key={i} style={{width: '6px', height: `${h}px`, background: 'var(--accent-color)', borderRadius: '4px', opacity: 0.3 + (h/100)}}></div>
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
                        { title: "Speech-to-Text (STT)", desc: "Convert live or recorded audio into high-fidelity searchable text with automated speaker diarization.", icon: <FiMic /> },
                        { title: "Voice Synthesis (TTS)", desc: "Generate human-like speech from text with customizable emotional tone and prosody.", icon: <FiVolume2 /> },
                        { title: "AI Voice Agents", desc: "Build intelligent voice bots for seamless automated phone support and customer service.", icon: <FiMessageCircle /> },
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
                        <h3>Interactive Voice AI</h3>
                        <p>
                            Revolutionize your customer experience with intelligent, low-latency voice 
                            agents that understand nuance, tone, and multi-turn conversations.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Real-time transcription for multi-lingual contact centers.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiActivity />
                                <span>Emotion and sentiment detection from vocal acoustics.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiGlobe />
                                <span>Multi-dialect and accent support across 40+ global languages.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <FiMusic style={{fontSize: '10rem', opacity: 0.1, color: 'var(--accent-color)'}} />
                    </div>
                </div>

                {/* Detailed Content Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>Meeting Intelligence & Analytics</h3>
                        <p>
                            Turn your internal meetings and sales calls into a knowledge base. 
                            Automate note-taking and task extraction with 98% accuracy.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiFileText />
                                <span>Automated executive summaries and action-item extraction.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiUsers />
                                <span>Speaker identification and participation metrics.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Integration with Zoom, Teams, and Google Meet.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <FiFileText style={{fontSize: '10rem', opacity: 0.1, color: 'var(--accent-color)'}} />
                    </div>
                </div>
            </section>

             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Optimize your audio data?</h2>
                        <p>Leverage the power of voice AI to automate workflows and delight your global customers.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> 200ms Latency</li>
                            <li><FiCheckCircle/> GDPR & SOC2 Compliant</li>
                            <li><FiCheckCircle/> 100+ Custom Voices</li>
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

export default SpeechTextServices;
