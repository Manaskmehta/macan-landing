import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiBarChart2, FiTrendingUp, FiPieChart, FiActivity, 
    FiTarget, FiArrowRight, FiCheckCircle, FiCpu, 
    FiLayers, FiDatabase 
} from 'react-icons/fi';
import './FeaturePages.css';

const Analytics = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Data-Driven Insights
                        </div>
                        <h1>
                            Advanced <br />
                            <span className="gradient-text">Business Analytics</span>
                        </h1>
                        <p>
                            Turn raw data into actionable intelligence. Predict trends, optimize stock, 
                            and maximize your ROI with real-time analytics designed for enterprise scale.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Launch Insight Dash <FiArrowRight /></button>
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
                            {/* Background pulse */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '350px',
                                    height: '350px',
                                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                                    borderRadius: '50%'
                                }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity
                                }}
                            />

                            {/* Header */}
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1}}>
                                <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500}}>
                                    Analytics Dashboard
                                </div>
                                <motion.div
                                    animate={{
                                        opacity: [1, 0.5, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                    style={{
                                        padding: '0.4rem 0.8rem',
                                        background: 'rgba(16, 185, 129, 0.15)',
                                        border: '1px solid rgba(16, 185, 129, 0.3)',
                                        borderRadius: '6px',
                                        fontSize: '0.75rem',
                                        color: '#10b981',
                                        fontWeight: 600
                                    }}
                                >
                                    LIVE
                                </motion.div>
                            </div>

                            {/* Key metrics */}
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', zIndex: 1}}>
                                {[
                                    { label: 'Revenue', value: '₹24.8L', change: '+12%', color: '#10b981' },
                                    { label: 'Orders', value: '847', change: '+8%', color: '#3b82f6' },
                                    { label: 'Avg Value', value: '₹29.3K', change: '+5%', color: 'var(--accent-color)' }
                                ].map((metric, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        style={{
                                            padding: '0.75rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '8px'
                                        }}
                                    >
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>
                                            {metric.label}
                                        </div>
                                        <div style={{fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem'}}>
                                            {metric.value}
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: metric.color, display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                                            <FiTrendingUp size={12} />
                                            {metric.change}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Animated bar chart */}
                            <div style={{flex: 1, display: 'flex', alignItems: 'end', gap: '0.5rem', zIndex: 1}}>
                                {[
                                    { height: 45, label: 'Mon', value: '3.2L' },
                                    { height: 65, label: 'Tue', value: '4.5L' },
                                    { height: 40, label: 'Wed', value: '2.8L' },
                                    { height: 75, label: 'Thu', value: '5.2L' },
                                    { height: 55, label: 'Fri', value: '3.8L' },
                                    { height: 85, label: 'Sat', value: '5.9L' },
                                    { height: 70, label: 'Sun', value: '4.9L' }
                                ].map((bar, i) => (
                                    <div key={i} style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${bar.height}%` }}
                                            transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                                            whileHover={{ scale: 1.05 }}
                                            style={{
                                                width: '100%',
                                                background: `linear-gradient(to top, var(--accent-color), ${i === 5 ? '#10b981' : 'var(--accent-color)'})`,
                                                borderRadius: '4px 4px 0 0',
                                                position: 'relative',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                style={{
                                                    position: 'absolute',
                                                    top: '-25px',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    fontSize: '0.65rem',
                                                    color: '#fff',
                                                    background: 'rgba(0, 0, 0, 0.8)',
                                                    padding: '0.25rem 0.5rem',
                                                    borderRadius: '4px',
                                                    whiteSpace: 'nowrap'
                                                }}
                                            >
                                                {bar.value}
                                            </motion.div>
                                        </motion.div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)'}}>
                                            {bar.label}
                                        </div>
                                    </div>
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
                        { title: "Revenue Analysis", desc: "Track sales trends, margins, and top-performing SKUs in real-time.", icon: <FiTrendingUp /> },
                        { title: "Stock IQ", desc: "AI-driven inventory forecasting to reduce dead stock and carry costs.", icon: <FiTarget /> },
                        { title: "Customer Cohorts", desc: "Segment behavior patterns to improve retention and lifetime value.", icon: <FiPieChart /> },
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
                        <h3>Visual Intelligence</h3>
                        <p>
                            Complex data doesn't have to be confusing. Our interactive dashboards 
                            bring your business metrics to life with high-fidelity visualizations.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiActivity />
                                <span>Drill-down capabilities for deep data exploration.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Real-time sync with all branch and retail outlets.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Export ready reports for board and tax audits.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiPieChart style={{
                            fontSize: '10rem',
                            opacity: 0.05,
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Interactive data visualization */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', padding: '2rem'}}>
                            {/* Circular chart representation */}
                            <div style={{position: 'relative', width: '180px', height: '180px'}}>
                                {/* Animated rings */}
                                {[
                                    { size: 180, color: 'var(--accent-color)', opacity: 0.3, delay: 0 },
                                    { size: 140, color: '#3b82f6', opacity: 0.4, delay: 0.2 },
                                    { size: 100, color: '#10b981', opacity: 0.5, delay: 0.4 }
                                ].map((ring, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: ring.opacity }}
                                        transition={{ delay: 0.3 + ring.delay, type: 'spring' }}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: `${ring.size}px`,
                                            height: `${ring.size}px`,
                                            borderRadius: '50%',
                                            border: `3px solid ${ring.color}`,
                                            borderTopColor: 'transparent',
                                            borderRightColor: 'transparent'
                                        }}
                                    />
                                ))}

                                {/* Center value */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.8, type: 'spring' }}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{fontSize: '2rem', fontWeight: 700, color: 'var(--accent-color)'}}>
                                        847
                                    </div>
                                    <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                        Active SKUs
                                    </div>
                                </motion.div>
                            </div>

                            {/* Category breakdown */}
                            <div style={{width: '100%', maxWidth: '280px'}}>
                                {[
                                    { category: 'Gold Jewelry', percentage: 45, color: '#fbbf24' },
                                    { category: 'Diamond Sets', percentage: 35, color: 'var(--accent-color)' },
                                    { category: 'Silver Items', percentage: 20, color: '#6b7280' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 + i * 0.15 }}
                                        style={{marginBottom: '1rem'}}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '0.5rem'
                                        }}>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                                <div style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    background: item.color
                                                }} />
                                                <span style={{fontSize: '0.8rem', color: '#fff'}}>
                                                    {item.category}
                                                </span>
                                            </div>
                                            <span style={{fontSize: '0.85rem', fontWeight: 600, color: item.color}}>
                                                {item.percentage}%
                                            </span>
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
                                                animate={{ width: `${item.percentage}%` }}
                                                transition={{ duration: 1, delay: 1.2 + i * 0.15 }}
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
                    </div>
                </div>

                {/* Deep Dive Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>Predictive Forecasting</h3>
                        <p>
                            Don't just look at the past. Use our AI-driven forecasting models to 
                            anticipate market demand and gold rate fluctuations.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiDatabase />
                                <span>Historic data modeling for seasonal demand prediction.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Scenario planning for pricing and production.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Automated alerts for anomalies and revenue dips.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiTrendingUp style={{
                            fontSize: '10rem',
                            opacity: 0.05,
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Forecasting interface */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', gap: '1.5rem'}}>
                            {/* Forecast header */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    padding: '1rem',
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                    borderRadius: '10px',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>
                                    Next Month Forecast
                                </div>
                                <div style={{fontSize: '2rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.25rem'}}>
                                    ₹32.4L
                                </div>
                                <div style={{fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem'}}>
                                    <FiTrendingUp size={14} />
                                    +18% projected growth
                                </div>
                            </motion.div>

                            {/* Trend line visualization */}
                            <div style={{position: 'relative', height: '120px'}}>
                                {/* Grid lines */}
                                {[0, 1, 2, 3].map((line) => (
                                    <div
                                        key={line}
                                        style={{
                                            position: 'absolute',
                                            top: `${line * 33}%`,
                                            left: 0,
                                            right: 0,
                                            height: '1px',
                                            background: 'rgba(255, 255, 255, 0.05)'
                                        }}
                                    />
                                ))}

                                {/* Trend line */}
                                <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0}}>
                                    <motion.path
                                        d="M 0 80 Q 60 60, 120 50 T 240 30"
                                        stroke="var(--accent-color)"
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 0.5 }}
                                    />
                                    {/* Future forecast (dashed) */}
                                    <motion.path
                                        d="M 240 30 Q 280 20, 320 15"
                                        stroke="#10b981"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 2 }}
                                    />
                                </svg>

                                {/* Data points */}
                                {[
                                    { x: '20%', y: '67%', label: 'Jan' },
                                    { x: '40%', y: '50%', label: 'Feb' },
                                    { x: '60%', y: '42%', label: 'Mar' },
                                    { x: '80%', y: '25%', label: 'Apr', isFuture: true }
                                ].map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.8 + i * 0.3 }}
                                        style={{
                                            position: 'absolute',
                                            left: point.x,
                                            top: point.y,
                                            transform: 'translate(-50%, -50%)',
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            background: point.isFuture ? '#10b981' : 'var(--accent-color)',
                                            border: '2px solid rgba(0, 0, 0, 0.5)',
                                            boxShadow: `0 0 10px ${point.isFuture ? '#10b981' : 'var(--accent-color)'}`
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Insights */}
                            <div>
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>
                                    AI Insights
                                </div>
                                {[
                                    { text: 'Peak demand expected in wedding season', icon: <FiTarget size={14} />, color: '#f59e0b' },
                                    { text: 'Stock up on 22K gold items', icon: <FiCheckCircle size={14} />, color: '#10b981' }
                                ].map((insight, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 2.5 + i * 0.2 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.75rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '8px',
                                            marginBottom: '0.5rem'
                                        }}
                                    >
                                        <div style={{color: insight.color}}>
                                            {insight.icon}
                                        </div>
                                        <span style={{fontSize: '0.75rem', color: '#fff'}}>
                                            {insight.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Deployment Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Gain total clarity today?</h2>
                        <p>Start making data-backed decisions that grow your bottom line.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> 50+ Pre-built Dashboards</li>
                            <li><FiCheckCircle/> Real-time Processing</li>
                            <li><FiCheckCircle/> Secure Data Access</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Request Data Audit</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Analytics;
