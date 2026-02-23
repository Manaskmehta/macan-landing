import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiCpu, FiTrendingUp, FiPieChart, FiActivity, FiShield, 
    FiArrowRight, FiCheckCircle, FiLayout, FiMaximize, FiGlobe 
} from 'react-icons/fi';
import './FeaturePages.css';

const MEC = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Executive Intelligence
                        </div>
                        <h1>
                            MEC: The <br />
                            <span className="gradient-text">Command Center</span>
                        </h1>
                        <p>
                            Manufacturer's Executive Cockpit (MEC) provides real-time visibility into your entire 
                            production ecosystem, enabling data-driven decisions at the speed of thought.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Launch Dashboard <FiArrowRight /></button>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="feature-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="app-mockup glass-panel" style={{
                            minHeight: '400px', 
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Animated background pulse */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    width: '300px',
                                    height: '300px',
                                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                                    transform: 'translate(-50%, -50%)',
                                    borderRadius: '50%',
                                }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Header with live indicator */}
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1}}>
                                <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500}}>
                                    Executive Dashboard
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                    <motion.div
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: '#10b981'
                                        }}
                                        animate={{
                                            opacity: [1, 0.3, 1],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity
                                        }}
                                    />
                                    <span style={{fontSize: '0.8rem', color: '#10b981'}}>Live</span>
                                </div>
                            </div>

                            {/* Main metrics grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                                zIndex: 1
                            }}>
                                <motion.div 
                                    className="dash-card"
                                    style={{
                                        padding: '1.5rem',
                                        background: 'rgba(139, 92, 246, 0.1)',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        borderRadius: '12px'
                                    }}
                                    whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.6)' }}
                                >
                                    <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>
                                        Production Yield
                                    </div>
                                    <div style={{fontSize: '2rem', fontWeight: 700, color: '#fff'}}>
                                        98%
                                    </div>
                                    <div style={{fontSize: '0.7rem', color: '#10b981', marginTop: '0.25rem'}}>
                                        ↑ 2.3% from yesterday
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="dash-card"
                                    style={{
                                        padding: '1.5rem',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        border: '1px solid rgba(59, 130, 246, 0.3)',
                                        borderRadius: '12px'
                                    }}
                                    whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.6)' }}
                                >
                                    <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>
                                        OEE Score
                                    </div>
                                    <div style={{fontSize: '2rem', fontWeight: 700, color: '#fff'}}>
                                        92%
                                    </div>
                                    <div style={{fontSize: '0.7rem', color: '#10b981', marginTop: '0.25rem'}}>
                                        ↑ 1.8% from yesterday
                                    </div>
                                </motion.div>
                            </div>

                            {/* Activity chart representation */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                gap: '0.5rem',
                                height: '80px',
                                padding: '1rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '8px',
                                zIndex: 1
                            }}>
                                {[65, 78, 85, 92, 88, 95, 98].map((height, i) => (
                                    <motion.div
                                        key={i}
                                        style={{
                                            flex: 1,
                                            background: `linear-gradient(to top, var(--accent-color), rgba(139, 92, 246, 0.4))`,
                                            borderRadius: '4px 4px 0 0',
                                            height: `${height}%`
                                        }}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${height}%` }}
                                        transition={{ duration: 0.8, delay: i * 0.1 }}
                                        whileHover={{ 
                                            background: 'linear-gradient(to top, #a78bfa, var(--accent-color))',
                                            scale: 1.1
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Status indicators */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                fontSize: '0.75rem',
                                color: 'var(--text-secondary)',
                                zIndex: 1
                            }}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                    <FiActivity size={14} style={{color: 'var(--accent-color)'}} />
                                    <span>5 Lines Active</span>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                    <FiTrendingUp size={14} style={{color: '#10b981'}} />
                                    <span>Trending Up</span>
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
                        { title: "Real-time KPIs", desc: "Track OEE, production yield, and labor efficiency in real-time.", icon: <FiTrendingUp /> },
                        { title: "Predictive Analytics", desc: "Forecast production bottlenecks before they impact your delivery.", icon: <FiPieChart /> },
                        { title: "Unified Control", desc: "Manage multiple factory locations from a single digital cockpit.", icon: <FiCpu /> },
                    ].map((f, i) => (
                        <div key={i} className="feature-card glass-panel">
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Deep Dive Section 1 */}
            <section className="info-section container">
                <div className="detail-row">
                    <div className="detail-content">
                        <h3>Strategic Shopfloor Visibility</h3>
                        <p>
                            MEC aggregates data from every workstation and machine on your shopfloor, 
                            presenting it in a layout designed for executive decision-making. No more 
                            waiting for end-of-day reports.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Live production tracking by line and operator.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Real-time wastage and loss (Ghat) monitoring.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Instant bottleneck identification with heatmaps.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiLayout style={{fontSize: '10rem', opacity: 0.05, color: 'var(--accent-color)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
                        
                        {/* Animated connection nodes */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            {/* Center node */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: 'rgba(139, 92, 246, 0.2)',
                                    border: '2px solid var(--accent-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                animate={{
                                    scale: [1, 1.1, 1],
                                    boxShadow: [
                                        '0 0 0 0 rgba(139, 92, 246, 0.4)',
                                        '0 0 0 20px rgba(139, 92, 246, 0)',
                                        '0 0 0 0 rgba(139, 92, 246, 0)'
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                            >
                                <FiCpu size={24} style={{color: 'var(--accent-color)'}} />
                            </motion.div>

                            {/* Satellite nodes */}
                            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                                const radius = 100;
                                const x = Math.cos((angle * Math.PI) / 180) * radius;
                                const y = Math.sin((angle * Math.PI) / 180) * radius;
                                
                                return (
                                    <React.Fragment key={i}>
                                        {/* Connection line */}
                                        <motion.div
                                            style={{
                                                position: 'absolute',
                                                width: '2px',
                                                height: `${radius}px`,
                                                background: 'linear-gradient(to bottom, var(--accent-color), transparent)',
                                                transformOrigin: 'top center',
                                                transform: `rotate(${angle}deg)`,
                                                opacity: 0.3
                                            }}
                                            animate={{
                                                opacity: [0.2, 0.5, 0.2]
                                            }}
                                            transition={{
                                                duration: 2,
                                                delay: i * 0.2,
                                                repeat: Infinity
                                            }}
                                        />
                                        
                                        {/* Node */}
                                        <motion.div
                                            style={{
                                                position: 'absolute',
                                                width: '30px',
                                                height: '30px',
                                                borderRadius: '50%',
                                                background: 'rgba(59, 130, 246, 0.2)',
                                                border: '2px solid rgba(59, 130, 246, 0.6)',
                                                left: `calc(50% + ${x}px)`,
                                                top: `calc(50% + ${y}px)`,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                borderColor: [
                                                    'rgba(59, 130, 246, 0.6)',
                                                    'rgba(139, 92, 246, 0.8)',
                                                    'rgba(59, 130, 246, 0.6)'
                                                ]
                                            }}
                                            transition={{
                                                duration: 2,
                                                delay: i * 0.2,
                                                repeat: Infinity
                                            }}
                                        />
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Deep Dive Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>Multi-Location Synchronization</h3>
                        <p>
                            Scale your operations across geographies with ease. MEC keeps your corporate 
                            headquarters in constant sync with regional manufacturing units.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Centralized master data management for all branches.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Inter-branch stock transfers and tracking.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Consolidated financial and production reporting.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Rotating globe effect */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                border: '2px solid rgba(139, 92, 246, 0.2)',
                                background: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1), transparent)'
                            }}
                            animate={{
                                rotate: 360
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {/* Latitude lines */}
                            {[30, 50, 70].map((top, i) => (
                                <div
                                    key={`lat-${i}`}
                                    style={{
                                        position: 'absolute',
                                        top: `${top}%`,
                                        left: '10%',
                                        right: '10%',
                                        height: '1px',
                                        background: 'rgba(139, 92, 246, 0.2)',
                                        borderRadius: '50%'
                                    }}
                                />
                            ))}
                        </motion.div>

                        <FiGlobe style={{
                            fontSize: '10rem', 
                            opacity: 0.08, 
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Location markers */}
                        {[
                            { x: 30, y: 40 },
                            { x: 70, y: 35 },
                            { x: 50, y: 60 },
                            { x: 45, y: 25 }
                        ].map((pos, i) => (
                            <motion.div
                                key={i}
                                style={{
                                    position: 'absolute',
                                    left: `${pos.x}%`,
                                    top: `${pos.y}%`,
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-color)',
                                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
                                }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.3,
                                    repeat: Infinity
                                }}
                            />
                        ))}

                        {/* Connection lines between locations */}
                        <svg style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none'
                        }}>
                            <motion.path
                                d="M 30% 40% Q 50% 30% 70% 35%"
                                stroke="var(--accent-color)"
                                strokeWidth="1"
                                fill="none"
                                opacity="0.3"
                                strokeDasharray="5,5"
                                animate={{
                                    strokeDashoffset: [0, -10]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                            <motion.path
                                d="M 50% 60% Q 40% 50% 30% 40%"
                                stroke="var(--accent-color)"
                                strokeWidth="1"
                                fill="none"
                                opacity="0.3"
                                strokeDasharray="5,5"
                                animate={{
                                    strokeDashoffset: [0, -10]
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </svg>
                    </div>
                </div>
            </section>

             {/* Deployment Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Ready to gain total visibility?</h2>
                        <p>Implement MEC and transform your manufacturing data into strategic assets.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> 24/7 Monitoring</li>
                            <li><FiCheckCircle/> ERP-wide Integration</li>
                            <li><FiCheckCircle/> Custom KPI Design</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Request Demo</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MEC;
