import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiCpu, FiMessageSquare, FiMonitor, FiSettings, 
    FiArrowRight, FiCheckCircle, FiZap, FiTarget,
    FiCompass, FiEye, FiMic, FiActivity, FiLayers,
    FiTrendingUp, FiDatabase, FiCode, FiGlobe
} from 'react-icons/fi';
import './FeaturePages.css';
import { NLPVisual, VisionVisual, SpeechVisual, AutomationVisual } from '../components/AIVisuals';

const ArtificialIntelligence = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('ai-consulting');
     const location = useLocation();

    // Map paths to section IDs
    const pathToSection = {
        '/ai-consulting': 'ai-consulting',
        '/nlp': 'nlp',
        '/computer-vision': 'computer-vision',
        '/speech-text-services': 'speech-text',
        '/business-automation': 'business-automation'
    };

    // Handle initial scroll based on path or hash
    useEffect(() => {
        const scrollToSection = (sectionId) => {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offset = 100;
                    const elementPosition = element.offsetTop - offset;
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                    setActiveSection(sectionId);
                }
            }, 100);
        };

        // Check if there's a hash in the URL
        if (location.hash) {
            const sectionId = location.hash.replace('#', '');
            scrollToSection(sectionId);
        } 
        // Check if the path matches a specific AI section
        else if (pathToSection[location.pathname]) {
            scrollToSection(pathToSection[location.pathname]);
        }
    }, [location]);

    // Scroll spy to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['ai-consulting', 'nlp', 'computer-vision', 'speech-text', 'business-automation'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSectionManual = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const navItems = [
        { id: 'ai-consulting', label: 'AI Consulting', icon: <FiCpu /> },
        { id: 'nlp', label: 'NLP', icon: <FiMessageSquare /> },
        { id: 'computer-vision', label: 'Computer Vision', icon: <FiMonitor /> },
        { id: 'speech-text', label: 'Speech & Text', icon: <FiMic /> },
        { id: 'business-automation', label: 'Business Automation', icon: <FiSettings /> }
    ];

    return (
        <div className="feature-page">
            <div className="feature-bg-glow"></div>
            
            {/* Sticky Navigation Sidebar */}
            {/* <motion.nav
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'fixed',
                    left: '2rem',
                    top: '18%',
                    transform: 'translateY(-50%)',
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}
            >
                {navItems.map((item) => (
                    <motion.button
                        key={item.id}
                        onClick={() => scrollToSectionManual(item.id)}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '0.75rem',
                            padding: '0.875rem 1.25rem',
                            background: activeSection === item.id 
                                ? 'rgba(139, 92, 246, 0.2)' 
                                : 'rgba(255, 255, 255, 0.05)',
                            border: activeSection === item.id 
                                ? '1px solid var(--accent-color)' 
                                : '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '10px',
                            color: activeSection === item.id ? 'var(--accent-color)' : '#fff',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: activeSection === item.id ? 600 : 500,
                            transition: 'all 0.3s ease',
                            minWidth: '200px',
                            boxShadow: activeSection === item.id 
                                ? '0 4px 12px rgba(139, 92, 246, 0.2)' 
                                : 'none'
                        }}
                    >
                        <span style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
                            {item.icon}
                        </span>
                        <span>{item.label}</span>
                    </motion.button>
                ))}
            </motion.nav> */}

            {/* Main Content */}
            <div style={{  }}>
                
                {/* Page Header */}
                <section className="feature-hero container" style={{marginBottom: '4rem'}}>
                    <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="pill-badge" style={{display: 'inline-flex', marginBottom: '1.5rem'}}>
                                <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> 
                                AI-Powered Solutions
                            </div>
                            <h1 style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
                                <span className="gradient-text">Artificial Intelligence</span>
                            </h1>
                            <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6}}>
                                Transform your business with cutting-edge AI technologies. From natural language 
                                processing to computer vision, we deliver intelligent solutions that drive innovation.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* AI Consulting Section */}
                <section id="ai-consulting" className="container" style={{marginBottom: '6rem', paddingTop: '2rem'}}>
                    <div className="feature-hero-content">
                        <motion.div 
                            className="feature-hero-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
                                <span className="gradient-text">AI Consulting</span>
                            </h2>
                            <p>
                                Strategic AI transformation starts with the right roadmap. Our consulting services 
                                help you identify high-impact use cases and build scalable AI infrastructure.
                            </p>
                            <div className="cta-row">
                                <button className="cta-primary" onClick={() => navigate('/contact')}>Get Strategy Session <FiArrowRight /></button>
                            </div>
                        </motion.div>
                        
                        {/* AI Consulting Visual - Reusing from AIConsulting.jsx */}
                        <motion.div 
                            className="feature-visual"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
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
                                    <FiCompass style={{fontSize: '15rem', opacity: 0.05, color: 'var(--accent-color)'}} />
                                </motion.div>

                                {/* Header */}
                                <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, zIndex: 1}}>
                                    AI Transformation Roadmap
                                </div>

                                {/* Roadmap phases */}
                                <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem', zIndex: 1}}>
                                    {[
                                        { phase: 'Discovery', progress: 100, status: 'Complete', color: '#10b981' },
                                        { phase: 'Architecture', progress: 75, status: 'In Progress', color: '#3b82f6' },
                                        { phase: 'Implementation', progress: 40, status: 'Ongoing', color: '#f59e0b' },
                                        { phase: 'Optimization', progress: 0, status: 'Planned', color: '#6b7280' }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + i * 0.15 }}
                                            style={{
                                                padding: '1rem',
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                                borderRadius: '10px'
                                            }}
                                        >
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem'}}>
                                                <div>
                                                    <div style={{fontSize: '0.9rem', fontWeight: 600, color: '#fff'}}>
                                                        {item.phase}
                                                    </div>
                                                    <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                                        {item.status}
                                                    </div>
                                                </div>
                                                <div style={{fontSize: '1.1rem', fontWeight: 700, color: item.color}}>
                                                    {item.progress}%
                                                </div>
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
                                                    transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                                                    style={{
                                                        height: '100%',
                                                        background: item.color,
                                                        borderRadius: '3px'
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="feature-grid" style={{marginTop: '3rem'}}>
                        {[
                            { title: "Use Case Discovery", desc: "Identify AI opportunities aligned with business goals.", icon: <FiTarget /> },
                            { title: "Technology Assessment", desc: "Evaluate ML frameworks and cloud infrastructure needs.", icon: <FiDatabase /> },
                            { title: "ROI Modeling", desc: "Quantify expected impact and build business cases.", icon: <FiTrendingUp /> },
                        ].map((f, i) => (
                            <motion.div 
                                key={i} 
                                className="feature-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* NLP Section */}
                <section id="nlp" className="container" style={{marginBottom: '6rem', paddingTop: '2rem'}}>
                    <div className="feature-hero-content">
                        <motion.div 
                            className="feature-hero-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
                                <span className="gradient-text">Natural Language Processing</span>
                            </h2>
                            <p>
                                Unlock insights from unstructured text. From sentiment analysis to chatbots, 
                                our NLP solutions understand and generate human language at scale.
                            </p>
                            <div className="cta-row">
                                <button className="cta-primary" onClick={() => navigate('/contact')}>Explore NLP <FiArrowRight /></button>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="feature-visual"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="app-mockup glass-panel" style={{minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                                <NLPVisual />
                            </div>
                        </motion.div>
                    </div>

                    <div className="feature-grid" style={{marginTop: '3rem'}}>
                        {[
                            { title: "Sentiment Analysis", desc: "Understand customer emotions from reviews and feedback.", icon: <FiActivity /> },
                            { title: "Text Classification", desc: "Automatically categorize documents and support tickets.", icon: <FiLayers /> },
                            { title: "Chatbot Development", desc: "Build intelligent conversational interfaces.", icon: <FiMessageSquare /> },
                        ].map((f, i) => (
                            <motion.div 
                                key={i} 
                                className="feature-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Computer Vision Section */}
                <section id="computer-vision" className="container" style={{marginBottom: '6rem', paddingTop: '2rem'}}>
                    <div className="feature-hero-content">
                        <motion.div 
                            className="feature-hero-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
                                <span className="gradient-text">Computer Vision</span>
                            </h2>
                            <p>
                                See what machines can see. Our computer vision solutions enable visual intelligence 
                                for quality control, security, and customer analytics.
                            </p>
                            <div className="cta-row">
                                <button className="cta-primary" onClick={() => navigate('/contact')}>View Capabilities <FiArrowRight /></button>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="feature-visual"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="app-mockup glass-panel" style={{minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                                <VisionVisual />
                            </div>
                        </motion.div>
                    </div>

                    <div className="feature-grid" style={{marginTop: '3rem'}}>
                        {[
                            { title: "Object Detection", desc: "Identify and locate objects in images and video streams.", icon: <FiEye /> },
                            { title: "Quality Inspection", desc: "Automated defect detection in manufacturing.", icon: <FiCheckCircle /> },
                            { title: "Facial Recognition", desc: "Secure authentication and customer analytics.", icon: <FiMonitor /> },
                        ].map((f, i) => (
                            <motion.div 
                                key={i} 
                                className="feature-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Speech & Text Section */}
                <section id="speech-text" className="container" style={{marginBottom: '6rem', paddingTop: '2rem'}}>
                    <div className="feature-hero-content">
                        <motion.div 
                            className="feature-hero-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
                                <span className="gradient-text">Speech & Text Services</span>
                            </h2>
                            <p>
                                Convert speech to text and text to speech with high accuracy. Enable voice interfaces 
                                and accessibility features for your applications.
                            </p>
                            <div className="cta-row">
                                <button className="cta-primary" onClick={() => navigate('/contact')}>Try Voice AI <FiArrowRight /></button>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="feature-visual"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="app-mockup glass-panel" style={{minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                                <SpeechVisual />
                            </div>
                        </motion.div>
                    </div>

                    <div className="feature-grid" style={{marginTop: '3rem'}}>
                        {[
                            { title: "Speech-to-Text", desc: "Real-time transcription with speaker diarization.", icon: <FiMic /> },
                            { title: "Text-to-Speech", desc: "Natural-sounding voice synthesis in multiple languages.", icon: <FiMessageSquare /> },
                            { title: "Voice Commands", desc: "Enable hands-free control for applications.", icon: <FiZap /> },
                        ].map((f, i) => (
                            <motion.div 
                                key={i} 
                                className="feature-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Business Automation Section */}
                <section id="business-automation" className="container" style={{marginBottom: '6rem', paddingTop: '2rem'}}>
                    <div className="feature-hero-content">
                        <motion.div 
                            className="feature-hero-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
                                <span className="gradient-text">Business Automation</span>
                            </h2>
                            <p>
                                Automate repetitive tasks and workflows with intelligent process automation. 
                                Free your team to focus on high-value work.
                            </p>
                            <div className="cta-row">
                                <button className="cta-primary" onClick={() => navigate('/contact')}>Automate Now <FiArrowRight /></button>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="feature-visual"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="app-mockup glass-panel" style={{minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                                <AutomationVisual />
                            </div>
                        </motion.div>
                    </div>

                    <div className="feature-grid" style={{marginTop: '3rem'}}>
                        {[
                            { title: "RPA Integration", desc: "Robotic process automation for repetitive tasks.", icon: <FiSettings /> },
                            { title: "Workflow Orchestration", desc: "Design and deploy intelligent business workflows.", icon: <FiCode /> },
                            { title: "Document Processing", desc: "Extract data from invoices, forms, and documents.", icon: <FiDatabase /> },
                        ].map((f, i) => (
                            <motion.div 
                                key={i} 
                                className="feature-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="deployment-section container" style={{marginBottom: '4rem'}}>
                    <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                        <div className="banner-content">
                            <h2>Ready to Transform with AI?</h2>
                            <p>Let's discuss how AI can accelerate your business growth.</p>
                            <ul className="benefits-list">
                                <li><FiCheckCircle/> Custom AI Solutions</li>
                                <li><FiCheckCircle/> Expert Consultation</li>
                                <li><FiCheckCircle/> Scalable Infrastructure</li>
                            </ul>
                        </div>
                        <div className="banner-actions">
                            <button className="cta-primary big" onClick={() => navigate('/contact')}>Schedule Consultation</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ArtificialIntelligence;
