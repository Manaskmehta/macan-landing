import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiEye, FiMaximize, FiTarget, FiBox, 
    FiArrowRight, FiCheckCircle, FiMonitor, FiCamera,
    FiShield, FiTrendingUp, FiSettings
} from 'react-icons/fi';
import './FeaturePages.css';

const ComputerVision = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Visual Intelligence
                        </div>
                        <h1>
                            Advanced <br />
                            <span className="gradient-text">Computer Vision</span>
                        </h1>
                        <p>
                            Teach machines to see, understand, and react. From sub-millimeter quality inspection 
                            to autonomous perimeter security, our vision systems provide industry-leading accuracy.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Launch Vision Demo <FiArrowRight /></button>
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
                            {/* Background grid pattern */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                                opacity: 0.3
                            }} />

                            {/* Header */}
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1}}>
                                <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500}}>
                                    Vision Detection System
                                </div>
                                <motion.div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.4rem 0.8rem',
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                        borderRadius: '6px',
                                        fontSize: '0.75rem',
                                        color: '#ef4444'
                                    }}
                                    animate={{
                                        opacity: [1, 0.6, 1]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity
                                    }}
                                >
                                    <div style={{width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444'}} />
                                    REC
                                </motion.div>
                            </div>

                            {/* Detection area */}
                            <div style={{
                                flex: 1,
                                position: 'relative',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1
                            }}>
                                {/* Animated bounding boxes */}
                                {[
                                    { x: 20, y: 25, w: 35, h: 40, label: 'Person', conf: 98, color: '#10b981' },
                                    { x: 60, y: 40, w: 30, h: 35, label: 'Object', conf: 94, color: '#3b82f6' }
                                ].map((box, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + i * 0.2 }}
                                        style={{
                                            position: 'absolute',
                                            left: `${box.x}%`,
                                            top: `${box.y}%`,
                                            width: `${box.w}%`,
                                            height: `${box.h}%`,
                                            border: `2px solid ${box.color}`,
                                            borderRadius: '4px',
                                            boxShadow: `0 0 20px ${box.color}40`
                                        }}
                                    >
                                        <motion.div
                                            style={{
                                                position: 'absolute',
                                                top: '-24px',
                                                left: 0,
                                                padding: '0.25rem 0.5rem',
                                                background: box.color,
                                                borderRadius: '4px',
                                                fontSize: '0.7rem',
                                                fontWeight: 600,
                                                whiteSpace: 'nowrap'
                                            }}
                                            animate={{
                                                y: [0, -2, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity
                                            }}
                                        >
                                            {box.label} {box.conf}%
                                        </motion.div>
                                        
                                        {/* Corner markers */}
                                        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    position: 'absolute',
                                                    width: '8px',
                                                    height: '8px',
                                                    border: `2px solid ${box.color}`,
                                                    ...(corner.includes('top') ? { top: -2 } : { bottom: -2 }),
                                                    ...(corner.includes('left') ? { left: -2 } : { right: -2 })
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                ))}

                                {/* Center crosshair */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        width: '40px',
                                        height: '40px',
                                        border: '2px solid var(--accent-color)',
                                        borderRadius: '50%',
                                        opacity: 0.4
                                    }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.4, 0.2, 0.4]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                />
                            </div>

                            {/* Stats footer */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '0.75rem',
                                zIndex: 1
                            }}>
                                {[
                                    { label: 'FPS', value: '42', color: '#10b981' },
                                    { label: 'Objects', value: '2', color: '#3b82f6' },
                                    { label: 'Latency', value: '12ms', color: 'var(--accent-color)' }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            padding: '0.75rem',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.25rem'}}>
                                            {stat.label}
                                        </div>
                                        <div style={{fontSize: '1.2rem', fontWeight: 700, color: stat.color}}>
                                            {stat.value}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="container">
                <div className="feature-grid">
                    {[
                        { title: "Object Detection", desc: "Identify and track multiple objects in real-time video streams with millisecond latency.", icon: <FiBox /> },
                        { title: "Visual Inspection", desc: "Automate quality control by detecting Micro-defects invisible to the human eye.", icon: <FiEye /> },
                        { title: "Biometric Security", desc: "Secure multi-factor authentication and perimeter control using advanced facial recognition.", icon: <FiTarget /> },
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
                        <h3>Industrial Edge Vision</h3>
                        <p>
                            Our vision models are optimized for edge deployment using TPUs and NPUs, providing 
                            real-time processing without requiring constant cloud connectivity.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiShield />
                                <span>Real-time safety monitoring and PPE compliance detection.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Automated handwriting and invoice OCR for digitization.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Thermal imaging and anomaly detection for equipment maintenance.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <FiCamera style={{fontSize: '10rem', opacity: 0.1, color: 'var(--accent-color)'}} />
                    </div>
                </div>

                {/* Detailed Content Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>Spatial Analytics & Heatmapping</h3>
                        <p>
                            Understand your physical spaces through data. Track footfall, dwell times, 
                            and spatial utilization to optimize your retail or factory footprint.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiTrendingUp />
                                <span>Customer journey mapping in retail environments.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiSettings />
                                <span>Warehouse space optimization and pathfinding analytics.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Automated occupancy counting for facility management.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box">
                        <FiMaximize style={{fontSize: '10rem', opacity: 0.1, color: 'var(--accent-color)'}} />
                    </div>
                </div>
            </section>

             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Optimize your visual data?</h2>
                        <p>Turn standard cameras into intelligent sensors that drive your business efficiency forward.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> Edge Ready</li>
                            <li><FiCheckCircle/> High FPS Tracking</li>
                            <li><FiCheckCircle/> Custom Model Training</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Contact Sales</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComputerVision;
