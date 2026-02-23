import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiUsers, FiShoppingBag, FiFileText, FiGlobe, FiClock, 
    FiArrowRight, FiCheckCircle, FiShare2, FiShield, FiTrendingUp 
} from 'react-icons/fi';
import './FeaturePages.css';

const VendorPortal = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Supply Chain Collaboration
                        </div>
                        <h1>
                            Connected <br />
                            <span className="gradient-text">Vendor Portal</span>
                        </h1>
                        <p>
                            Bridge the gap between your business and your suppliers. 
                            Automate purchase orders, track deliveries, and manage vendor performance seamlessly.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Partner Login <FiArrowRight /></button>
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
                            {/* Background network pattern */}
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
                                    rotate: 360
                                }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            {/* Header */}
                            <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, zIndex: 1}}>
                                Supplier Network
                            </div>

                            {/* Central hub */}
                            <div style={{position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1}}>
                                <motion.div
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'rgba(139, 92, 246, 0.2)',
                                        border: '2px solid var(--accent-color)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
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
                                    <FiShare2 size={32} style={{color: 'var(--accent-color)'}} />
                                </motion.div>

                                {/* Supplier nodes */}
                                {[
                                    { angle: 0, label: 'Supplier A', status: 'active' },
                                    { angle: 72, label: 'Supplier B', status: 'active' },
                                    { angle: 144, label: 'Supplier C', status: 'pending' },
                                    { angle: 216, label: 'Supplier D', status: 'active' },
                                    { angle: 288, label: 'Supplier E', status: 'active' }
                                ].map((supplier, i) => {
                                    const radius = 120;
                                    const x = Math.cos((supplier.angle * Math.PI) / 180) * radius;
                                    const y = Math.sin((supplier.angle * Math.PI) / 180) * radius;
                                    const isActive = supplier.status === 'active';

                                    return (
                                        <React.Fragment key={i}>
                                            {/* Connection line */}
                                            <motion.div
                                                style={{
                                                    position: 'absolute',
                                                    width: '2px',
                                                    height: `${radius}px`,
                                                    background: `linear-gradient(to bottom, ${isActive ? 'var(--accent-color)' : '#6b7280'}, transparent)`,
                                                    transformOrigin: 'top center',
                                                    transform: `rotate(${supplier.angle}deg)`,
                                                    opacity: 0.3
                                                }}
                                                animate={{
                                                    opacity: isActive ? [0.2, 0.5, 0.2] : 0.1
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    delay: i * 0.2,
                                                    repeat: Infinity
                                                }}
                                            />

                                            {/* Supplier node */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                style={{
                                                    position: 'absolute',
                                                    left: `calc(50% + ${x}px)`,
                                                    top: `calc(50% + ${y}px)`,
                                                    transform: 'translate(-50%, -50%)',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    background: isActive ? 'rgba(16, 185, 129, 0.2)' : 'rgba(107, 114, 128, 0.2)',
                                                    border: `2px solid ${isActive ? '#10b981' : '#6b7280'}`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <FiUsers size={16} style={{color: isActive ? '#10b981' : '#6b7280'}} />
                                            </motion.div>
                                        </React.Fragment>
                                    );
                                })}
                            </div>

                            {/* Stats */}
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', zIndex: 1}}>
                                {[
                                    { label: 'Active', value: '12', color: '#10b981' },
                                    { label: 'Pending', value: '3', color: '#f59e0b' },
                                    { label: 'Orders', value: '47', color: 'var(--accent-color)' }
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
                                        <div style={{fontSize: '1.5rem', fontWeight: 700, color: stat.color}}>
                                            {stat.value}
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                            {stat.label}
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
                        { title: "Automated POs", desc: "Digital purchase orders sent directly to vendor dashboards.", icon: <FiFileText /> },
                        { title: "Delivery Tracking", desc: "Vendors update shipment status in real-time for your logistics team.", icon: <FiClock /> },
                        { title: "Performance Score", desc: "Evaluate vendors on quality, lead time, and pricing trends.", icon: <FiTrendingUp /> },
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
                        <h3>Self-Service Supplier Management</h3>
                        <p>
                            Empower your vendors with the tools they need to serve you better. 
                            Our portal reduces back-and-forth emails and phone calls by 70%.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Digital invoicing and payment status tracking.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Vendors can update availability and lead-time proactively.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Integrated document management for compliance & tax.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiUsers style={{
                            fontSize: '10rem',
                            opacity: 0.05,
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Portal interface mockup */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem'}}>
                            {/* Notification badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: '#10b981',
                                    color: '#000',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '8px',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                                }}
                            >
                                NEW RFP RECEIVED
                            </motion.div>

                            {/* Portal cards */}
                            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                {[
                                    { title: 'Purchase Orders', count: '8 Pending', icon: <FiFileText size={20} />, color: '#3b82f6' },
                                    { title: 'Invoices', count: '3 Awaiting', icon: <FiShoppingBag size={20} />, color: 'var(--accent-color)' },
                                    { title: 'Payments', count: '₹2.4L Due', icon: <FiCheckCircle size={20} />, color: '#10b981' }
                                ].map((card, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + i * 0.15 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '12px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '10px',
                                            background: `${card.color}20`,
                                            border: `1px solid ${card.color}40`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: card.color
                                        }}>
                                            {card.icon}
                                        </div>
                                        <div style={{flex: 1}}>
                                            <div style={{fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginBottom: '0.25rem'}}>
                                                {card.title}
                                            </div>
                                            <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>
                                                {card.count}
                                            </div>
                                        </div>
                                        <FiArrowRight size={16} style={{color: 'var(--text-secondary)'}} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>Strategic Sourcing Intelligence</h3>
                        <p>
                            Don't just buy; source strategically. Analyze vendor performance metrics 
                            to negotiate better terms and ensure supply chain resilience.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiTrendingUp />
                                <span>Cost trend analysis across different suppliers.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiShield />
                                <span>Risk assessment based on delivery delays & defect rates.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Comparative bidding for new production parcels.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiShield style={{
                            fontSize: '10rem',
                            opacity: 0.05,
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Analytics dashboard */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem', padding: '2rem'}}>
                            {/* Performance metrics */}
                            <div>
                                <div style={{fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem'}}>
                                    Vendor Performance Score
                                </div>
                                {[
                                    { vendor: 'Supplier A', score: 95, trend: 'up', color: '#10b981' },
                                    { vendor: 'Supplier B', score: 88, trend: 'up', color: '#3b82f6' },
                                    { vendor: 'Supplier C', score: 72, trend: 'down', color: '#f59e0b' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.15 }}
                                        style={{
                                            marginBottom: '1rem'
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '0.5rem'
                                        }}>
                                            <span style={{fontSize: '0.85rem', color: '#fff'}}>{item.vendor}</span>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                                <FiTrendingUp 
                                                    size={14} 
                                                    style={{
                                                        color: item.color,
                                                        transform: item.trend === 'down' ? 'rotate(180deg)' : 'none'
                                                    }} 
                                                />
                                                <span style={{fontSize: '0.9rem', fontWeight: 600, color: item.color}}>
                                                    {item.score}%
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{
                                            width: '100%',
                                            height: '8px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '4px',
                                            overflow: 'hidden'
                                        }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.score}%` }}
                                                transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                                                style={{
                                                    height: '100%',
                                                    background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`,
                                                    borderRadius: '4px'
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Cost savings indicator */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                style={{
                                    padding: '1.25rem',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                    borderRadius: '12px',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>
                                    Cost Savings (YTD)
                                </div>
                                <div style={{fontSize: '2rem', fontWeight: 700, color: '#10b981'}}>
                                    ₹12.4L
                                </div>
                                <div style={{fontSize: '0.7rem', color: '#10b981', marginTop: '0.25rem'}}>
                                    ↑ 18% vs last quarter
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Deployment Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Ready to optimize your supply chain?</h2>
                        <p>Start collaborating with your vendors in a secure, unified digital environment.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> Zero Communication Gap</li>
                            <li><FiCheckCircle/> Fast Data Exchange</li>
                            <li><FiCheckCircle/> Automated Compliance</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Register Vendor</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VendorPortal;
