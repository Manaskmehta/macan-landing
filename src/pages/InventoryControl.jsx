import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBox, FiLayers, FiSearch, FiTruck, FiZap, FiArrowRight, FiCheckCircle, FiShield, FiTag, FiBarChart2 } from 'react-icons/fi';
import './FeaturePages.css';

const InventoryControl = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Zero-Loss Inventory
                        </div>
                        <h1>
                            Precision <br />
                            <span className="gradient-text">Inventory Control</span>
                        </h1>
                        <p>
                            Eliminate stockouts and pilferage with high-precision tracking. 
                            From raw materials to finished goods, track every unit with RFID and QR technology.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Audit Your Stock <FiArrowRight /></button>
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
                                    width: '300px',
                                    height: '300px',
                                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                                    borderRadius: '50%'
                                }}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity
                                }}
                            />

                            {/* Header */}
                            <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, zIndex: 1}}>
                                Inventory Dashboard
                            </div>

                            {/* Stock levels */}
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', zIndex: 1}}>
                                {[
                                    { label: 'Total Items', value: '12,847', change: '+234', color: '#10b981' },
                                    { label: 'Low Stock', value: '23', change: '-5', color: '#f59e0b' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            padding: '1.25rem',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255, 255, 255, 0.05)'
                                        }}
                                    >
                                        <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>
                                            {item.label}
                                        </div>
                                        <div style={{fontSize: '2rem', fontWeight: 700, color: '#fff'}}>
                                            {item.value}
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: item.color, marginTop: '0.25rem'}}>
                                            {item.change} today
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Recent scans */}
                            <div style={{zIndex: 1}}>
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>
                                    Recent RFID Scans
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                                    {[
                                        { sku: 'AU-750-RING-01', status: 'In Stock', time: '2s ago' },
                                        { sku: 'PT-950-NECK-12', status: 'In Stock', time: '5s ago' },
                                        { sku: 'AG-925-BRAC-08', status: 'In Stock', time: '8s ago' }
                                    ].map((scan, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '0.75rem',
                                                background: 'rgba(139, 92, 246, 0.05)',
                                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                                borderRadius: '8px',
                                                fontSize: '0.8rem'
                                            }}
                                        >
                                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                                <FiBox size={14} style={{color: 'var(--accent-color)'}} />
                                                <span style={{fontFamily: 'monospace', color: '#fff'}}>{scan.sku}</span>
                                            </div>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                                <span style={{color: '#10b981', fontSize: '0.75rem'}}>{scan.status}</span>
                                                <span style={{color: 'var(--text-secondary)', fontSize: '0.7rem'}}>{scan.time}</span>
                                            </div>
                                        </motion.div>
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
                        { title: "RFID Integration", desc: "Scan thousands of items in seconds with 99.9% accuracy.", icon: <FiZap /> },
                        { title: "Smart Reordering", desc: "Automated procurement triggers based on historic consumption lead times.", icon: <FiTruck /> },
                        { title: "Multi-Warehouse", desc: "Sync stock levels across all locations in one unified database.", icon: <FiLayers /> },
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
                        <h3>Item-Level Traceability</h3>
                        <p>
                            Every item in your inventory is more than just a number. MacanX assigns a 
                            unique digital identity to every piece, tracking its entire lifecycle from 
                            the moment it enters your facility.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiTag />
                                <span>Batch & Serialized tracking for high-value items.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Image-based cataloging for visual verification.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Old Gold / Metal exchange tracking and valuation.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiSearch style={{
                            fontSize: '10rem',
                            opacity: 0.05,
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Item tracking visualization */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            {/* Center item */}
                            <motion.div
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '12px',
                                    background: 'rgba(139, 92, 246, 0.2)',
                                    border: '2px solid var(--accent-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}
                                animate={{
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
                                <FiTag size={32} style={{color: 'var(--accent-color)'}} />
                            </motion.div>

                            {/* Tracking lines */}
                            {[0, 90, 180, 270].map((angle, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        position: 'absolute',
                                        width: '2px',
                                        height: '60px',
                                        background: 'linear-gradient(to bottom, var(--accent-color), transparent)',
                                        transformOrigin: 'top center',
                                        transform: `rotate(${angle}deg)`,
                                        opacity: 0.4
                                    }}
                                    animate={{
                                        opacity: [0.2, 0.6, 0.2]
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.3,
                                        repeat: Infinity
                                    }}
                                />
                            ))}

                            {/* Data points */}
                            {[
                                { x: -80, y: -60, label: 'Batch' },
                                { x: 80, y: -60, label: 'Serial' },
                                { x: -80, y: 60, label: 'Location' },
                                { x: 80, y: 60, label: 'Value' }
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    style={{
                                        position: 'absolute',
                                        left: `calc(50% + ${point.x}px)`,
                                        top: `calc(50% + ${point.y}px)`,
                                        transform: 'translate(-50%, -50%)',
                                        padding: '0.4rem 0.6rem',
                                        background: 'rgba(59, 130, 246, 0.15)',
                                        border: '1px solid rgba(59, 130, 246, 0.3)',
                                        borderRadius: '6px',
                                        fontSize: '0.7rem',
                                        color: '#3b82f6',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {point.label}
                                </motion.div>
                            ))}
                        </div>

                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                padding: '1rem',
                                background: 'rgba(16, 185, 129, 0.1)',
                                border: '1px solid rgba(16, 185, 129, 0.3)',
                                borderRadius: '8px',
                                fontSize: '0.75rem'
                            }}
                        >
                            <div style={{color: '#10b981', fontWeight: 600}}>✓ Tracked</div>
                            <div style={{color: 'var(--text-secondary)', fontSize: '0.7rem', marginTop: '0.25rem'}}>2 mins ago</div>
                        </motion.div>
                    </div>
                </div>

                {/* Detailed Content Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>Automated Stock Audit</h3>
                        <p>
                            Traditional stock-takes are slow and error-prone. Our RFID-integrated 
                            auditing system allows you to reconcile thousands of SKU items in a 
                            matter of minutes, not days.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiBarChart2 />
                                <span>Instant reconciliation with system records.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiShield />
                                <span>Security alerts for unauthorized stock movement.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Digital audit trails for 100% compliance.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiZap style={{
                            fontSize: '10rem',
                            opacity: 0.05,
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Audit progress visualization */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
                            {/* Circular progress */}
                            <div style={{position: 'relative', width: '150px', height: '150px'}}>
                                <svg width="150" height="150" style={{transform: 'rotate(-90deg)'}}>
                                    {/* Background circle */}
                                    <circle
                                        cx="75"
                                        cy="75"
                                        r="65"
                                        stroke="rgba(255, 255, 255, 0.1)"
                                        strokeWidth="10"
                                        fill="none"
                                    />
                                    {/* Progress circle */}
                                    <motion.circle
                                        cx="75"
                                        cy="75"
                                        r="65"
                                        stroke="var(--accent-color)"
                                        strokeWidth="10"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ strokeDasharray: '0 410' }}
                                        animate={{ strokeDasharray: '328 410' }}
                                        transition={{ duration: 2, ease: 'easeOut' }}
                                    />
                                </svg>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    textAlign: 'center'
                                }}>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        style={{fontSize: '2rem', fontWeight: 700, color: 'var(--accent-color)'}}
                                    >
                                        80%
                                    </motion.div>
                                    <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)'}}>Complete</div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div style={{display: 'flex', gap: '2rem'}}>
                                {[
                                    { label: 'Scanned', value: '10,278', icon: <FiBarChart2 size={16} /> },
                                    { label: 'Matched', value: '10,254', icon: <FiCheckCircle size={16} /> }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.5 + i * 0.2 }}
                                        style={{textAlign: 'center'}}
                                    >
                                        <div style={{color: 'var(--accent-color)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center'}}>
                                            {stat.icon}
                                        </div>
                                        <div style={{fontSize: '1.2rem', fontWeight: 600, color: '#fff'}}>
                                            {stat.value}
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                            {stat.label}
                                        </div>
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
                        <h2>Ready for 100% stock accuracy?</h2>
                        <p>Stop guessing your stock levels. Get the professional inventory control your business deserves.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> 99.9% Accuracy</li>
                            <li><FiCheckCircle/> RFID Ready</li>
                            <li><FiCheckCircle/> Zero Discrepancy</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Request Audit Sheet</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InventoryControl;
