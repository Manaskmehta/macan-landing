import React from 'react';
import { motion } from 'framer-motion';
import { 
    FiCpu, FiCheckCircle, FiCloud, FiCode, FiZap, 
    FiSettings, FiShield, FiTrendingUp, FiMessageSquare,
    FiArrowRight, FiDatabase, FiServer, FiMessageCircle, FiLayers
} from 'react-icons/fi';
import './AIAgentDevelopment.css';
import { RAGVisual, InferenceVisual, ChatbotVisual } from '../components/AIAgentVisuals';
import { OrbitingCircles } from '../components/OrbitingCircles';
import { CircleIcon } from '../components/AnimatedBeam';
import { useNavigate } from 'react-router-dom';

const AIAgentDevelopment = () => {
    const navigate = useNavigate();
    
    const scrollToSection = (e, id) => {
        if (e) e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
            // Update hash without jumping
            window.history.pushState(null, null, `#${id}`);
        }
    };

    return (
        <div className="ai-agent-page">
            <div className="bg-glow-effect-ai"></div>
            
            {/* Hero Section */}
            <div className="ai-hero container">
                <div className="ai-hero-content">
                    <motion.div 
                        className="ai-hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="pill-badge">
                            <span className="dot" style={{backgroundColor: '#60a5fa'}}></span> Next-Gen Automation
                        </div>
                        <h1>
                            Build Intelligent <br />
                            <span className="gradient-text-ai">AI Agents</span> for Your Business
                        </h1>
                        <p>
                            We create autonomous agents that understand context, make decisions, and execute tasks. 
                            From customer support to complex data analysis, automate workflows with precision.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>
                                Consult an Expert <FiArrowRight />
                            </button>
                            <button className="cta-secondary" onClick={(e) => scrollToSection(e, 'capabilities')}>
                                View Capabilities
                            </button>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="ai-hero-visual"
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="hero-visual-container" style={{
                            position: 'relative',
                            width: '100%',
                            height: '500px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Central Brain/AI Node */}
                            <div className="central-node" style={{
                                width: '100px',
                                height: '100px',
                                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                                borderRadius: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontSize: '3rem',
                                boxShadow: '0 0 50px rgba(96, 165, 250, 0.4)',
                                zIndex: 10,
                                transform: 'rotate(-10deg)',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}>
                                <FiCpu />
                            </div>

                            {/* Orbiting Tech Stack */}
                            <OrbitingCircles radius={160} duration={30} reverse>
                                <CircleIcon icon={<FiMessageSquare />} color="#60a5fa" />
                            </OrbitingCircles>
                            <OrbitingCircles radius={160} duration={30} delay={15} reverse>
                                <CircleIcon icon={<FiDatabase />} color="#a78bfa" />
                            </OrbitingCircles>
                            
                            <OrbitingCircles radius={100} duration={20}>
                                <div style={{ 
                                    padding: '8px', 
                                    background: 'rgba(255,255,255,0.05)', 
                                    borderRadius: '50%',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#f472b6'
                                }}>
                                    <FiZap />
                                </div>
                            </OrbitingCircles>

                            {/* Decorative background glow */}
                            <div style={{
                                position: 'absolute',
                                width: '300px',
                                height: '300px',
                                background: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                                zIndex: 1
                            }}></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Quick Links / Sub Nav */}
            <div className="ai-quick-links container">
                <a href="#rag" onClick={(e) => scrollToSection(e, 'rag')}>RAG Development</a>
                <span className="separator"></span>
                <a href="#inference" onClick={(e) => scrollToSection(e, 'inference')}>LLM Inference</a>
                <span className="separator"></span>
                <a href="#chatbot" onClick={(e) => scrollToSection(e, 'chatbot')}>AI Chatbots</a>
            </div>

            {/* Core Capabilities */}
            <section id="capabilities" className="ai-process-section container">
                <div className="section-header-ai">
                    <h2>Capabilities & Services</h2>
                    <p style={{color: 'var(--text-secondary)'}}>End-to-end development of custom AI solutions.</p>
                </div>
                
                <div className="process-grid">
                    {[
                        { title: "RAG Systems", id: "rag", desc: "Retrieval-Augmented Generation for agents to access and use your proprietary data securely.", icon: <FiDatabase /> },
                        { title: "LLM Inference", id: "inference", desc: "High-performance model deployment and optimization for production environments.", icon: <FiServer /> },
                        { title: "AI Chatbots", id: "chatbot", desc: "Conversational agents designed for deep engagement and task execution.", icon: <FiMessageCircle /> },
                        { title: "Multi-Agent Systems", id: "capabilities", desc: "Coordinated systems where multiple specialized agents collaborate.", icon: <FiLayers /> },
                    ].map((item, i) => (
                        <motion.div 
                            key={i} 
                            className="process-card clickable" 
                            onClick={(e) => scrollToSection(e, item.id)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="process-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <div className="card-link">Learn More <FiArrowRight /></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Detailed RAG Section */}
            <section id="rag" className="detail-section container">
                <div className="detail-row">
                    <motion.div 
                        className="detail-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="pill-badge sm">Knowledge Base</div>
                        <h3>RAG Development</h3>
                        <p>
                            Connect your large language models to your unique data source. 
                            Our RAG (Retrieval-Augmented Generation) architectures ensure your AI 
                            always provides accurate, up-to-date, and context-aware information.
                        </p>
                        <ul className="ai-feature-list">
                            <li><FiCheckCircle /> Semantic Vector Search integration</li>
                            <li><FiCheckCircle /> Enterprise Data Connectors (Sharepoint, Local, SQL)</li>
                            <li><FiCheckCircle /> Real-time Knowledge Updates</li>
                            <li><FiCheckCircle /> Document Parsing & Chunking Optimization</li>
                        </ul>
                    </motion.div>
                    <div className="detail-visual glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
                        <RAGVisual />
                    </div>
                </div>
            </section>

            {/* Detailed Inference Section */}
            <section id="inference" className="detail-section container alternate">
                <div className="detail-row reverse">
                    <motion.div 
                        className="detail-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="pill-badge sm">Production Ready</div>
                        <h3>LLM Inference & Optimization</h3>
                        <p>
                            Deploying models is easy, making them fast and affordable is hard. 
                            We specialize in optimizing model latency and throughput.
                        </p>
                        <ul className="ai-feature-list">
                            <li><FiCheckCircle /> Quantization (INT8/FP8) for faster response</li>
                            <li><FiCheckCircle /> VLLM & TGI deployment strategies</li>
                            <li><FiCheckCircle /> Autoscaling GPU Clusters</li>
                            <li><FiCheckCircle /> Cost-effective Token Management</li>
                        </ul>
                    </motion.div>
                    <div className="detail-visual glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
                        <InferenceVisual />
                    </div>
                </div>
            </section>

            {/* Detailed Chatbot Section */}
            <section id="chatbot" className="detail-section container">
                <div className="detail-row">
                    <motion.div 
                        className="detail-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="pill-badge sm">User Experience</div>
                        <h3>LLM Conversational Chatbots</h3>
                        <p>
                            Build bots that don't just talk—they solve. Our chatbots are integrated 
                            directly into your APIs to perform actions like booking, debugging, or analyzing.
                        </p>
                        <ul className="ai-feature-list">
                            <li><FiCheckCircle /> Multi-turn Dialogue Management</li>
                            <li><FiCheckCircle /> Native Tool Use & Function Calling</li>
                            <li><FiCheckCircle /> Brand Voice & Tone Compliance</li>
                            <li><FiCheckCircle /> Integration with WhatsApp, Slack, & Web</li>
                        </ul>
                    </motion.div>
                    <div className="detail-visual glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
                        <ChatbotVisual />
                    </div>
                </div>
            </section>

             {/* Deployment Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'rgba(96, 165, 250, 0.3)'}}>
                    <div className="banner-content">
                        <h2>Ready to deploy your workforce?</h2>
                        <p>Start small with a pilot agent and scale as you see value.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> 2-Week PoC Delivery</li>
                            <li><FiCheckCircle/> Enterprise Security Standards</li>
                            <li><FiCheckCircle/> Ongoing Optimization</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Contact Application Team</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AIAgentDevelopment;
