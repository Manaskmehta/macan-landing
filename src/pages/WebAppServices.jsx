import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiMonitor, FiSmartphone, FiLayers, FiCode, 
    FiArrowRight, FiCheckCircle, FiZap, FiLayout,
    FiSmartphone as FiMobile, FiGlobe, FiDatabase, FiPenTool
} from 'react-icons/fi';
import { 
    FullStackHeroVisual, WebDevVisual, MobileAppVisual, 
    UIUXVisual, CustomSoftwareVisual 
} from '../components/WebAppVisuals';
import './FeaturePages.css';

const WebAppServices = () => {
    const navigate = useNavigate();
    
    const scrollToSection = (e, id) => {
        if (e) e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            window.history.pushState(null, null, `#${id}`);
        }
    };

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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Digital Craftsmanship
                        </div>
                        <h1>
                            Full-Stack <br />
                            <span className="gradient-text">Web & App Solutions</span>
                        </h1>
                        <p>
                            We build high-performance, scalable digital products that deliver 
                            exceptional user experiences. From concept to deployment, we turn 
                            your vision into a powerful digital reality.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={(e) => scrollToSection(e, 'web-dev')}>Our Services <FiArrowRight /></button>
                            <button className="cta-secondary" onClick={() => navigate('/contact')}>View Portfolio</button>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="feature-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <FullStackHeroVisual />
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="container">
                <div className="feature-grid">
                    {[
                        { title: "Web Development", id: "web-dev", desc: "Modern, responsive websites and web applications built with the latest technologies.", icon: <FiGlobe /> },
                        { title: "Mobile Apps", id: "mobile-app", desc: "Native and cross-platform mobile experiences for iOS and Android.", icon: <FiSmartphone /> },
                        { title: "UI/UX Design", id: "ui-ux", desc: "User-centric design that balances aesthetics with functional performance.", icon: <FiPenTool /> },
                        { title: "Custom Software", id: "custom-software", desc: "Bespoke software solutions tailored to solve your unique business challenges.", icon: <FiCode /> },
                    ].map((f, i) => (
                        <div key={i} className="feature-card glass-panel clickable" onClick={(e) => scrollToSection(e, f.id)}>
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                            <div className="card-link" style={{marginTop: '1rem', color: 'var(--accent-color)', fontSize: '0.9rem'}}>View Deep Dive <FiArrowRight /></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Web Development Section */}
            <section id="web-dev" className="info-section container">
                <div className="detail-row">
                    <div className="detail-content">
                        <div className="pill-badge sm">Web 3.0 Ready</div>
                        <h3>Web Development</h3>
                        <p>
                            We create fast, secure, and SEO-optimized web applications. 
                            Our team specializes in React, Next.js, and high-performance backend systems 
                            that ensure your digital presence is world-class.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Progressive Web Apps (PWA) development.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Headless CMS & E-commerce solutions.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Server-side rendering & Static site generation.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <WebDevVisual />
                    </div>
                </div>
            </section>

            {/* Mobile App Section */}
            <section id="mobile-app" className="info-section container" style={{background: 'rgba(255,255,255,0.01)'}}>
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <div className="pill-badge sm">Mobile First</div>
                        <h3>Mobile App Development</h3>
                        <p>
                            Reach your customers wherever they are. We build high-performance 
                            mobile applications with fluid animations and offline capabilities.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Native iOS (Swift) & Android (Kotlin) apps.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Cross-platform development (React Native/Flutter).</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Real-time features & Push notifications.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <MobileAppVisual />
                    </div>
                </div>
            </section>

            {/* UI/UX Design Section */}
            <section id="ui-ux" className="info-section container">
                <div className="detail-row">
                    <div className="detail-content">
                        <div className="pill-badge sm">User Centric</div>
                        <h3>UI/UX Design</h3>
                        <p>
                            Design that drives engagement. We combine deep user research with 
                            beautiful aesthetics to create products that people love to use.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Interactive Prototyping & Wireframing.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Design Systems & Component Libraries.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>User Testing & Accessibility Audits.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <UIUXVisual />
                    </div>
                </div>
            </section>

            {/* Custom Software Section */}
            <section id="custom-software" className="info-section container" style={{background: 'rgba(255,255,255,0.01)'}}>
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <div className="pill-badge sm">Bespoke Solutions</div>
                        <h3>Custom Software Engineering</h3>
                        <p>
                            When off-the-shelf software isn't enough, we build the engine 
                            that powers your business growth. Scaleable, maintainable, and robust.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Bespoke ERP & CRM software modules.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Microservices architecture & API development.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Legacy system modernization & migration.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <CustomSoftwareVisual />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Ready to build your next product?</h2>
                        <p>Our engineering team is ready to turn your complex requirements into a seamless digital journey.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> 24/7 Agile Sprints</li>
                            <li><FiCheckCircle/> Full Source Access</li>
                            <li><FiCheckCircle/> Lifetime Support</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Start Your Project</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebAppServices;
