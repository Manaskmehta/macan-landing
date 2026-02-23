import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiMessageSquare, FiHeart, FiSmile, FiTarget, FiSmartphone, 
    FiArrowRight, FiCheckCircle, FiUsers, FiShoppingBag, FiStar 
} from 'react-icons/fi';
import './FeaturePages.css';

const CRM = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Customer First
                        </div>
                        <h1>
                            Experience Driven <br />
                            <span className="gradient-text">Omni-Channel CRM</span>
                        </h1>
                        <p>
                            Know your customers better. track preferences, purchase history, and loyalty 
                            across all touchpoints—online and in-store.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>View Insights <FiArrowRight /></button>
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
                                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
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
                            <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, zIndex: 1}}>
                                Customer Engagement Dashboard
                            </div>

                            {/* Customer satisfaction score */}
                            <div style={{textAlign: 'center', zIndex: 1}}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, type: 'spring' }}
                                >
                                    <FiHeart style={{fontSize: '4rem', color: '#ec4899', marginBottom: '0.5rem'}} />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    style={{fontSize: '2.5rem', fontWeight: 700, color: '#ec4899', marginBottom: '0.5rem'}}
                                >
                                    4.8/5
                                </motion.div>
                                <div style={{display: 'flex', gap: '0.25rem', justifyContent: 'center', marginBottom: '0.5rem'}}>
                                    {[1, 2, 3, 4, 5].map((star, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + i * 0.1 }}
                                        >
                                            <FiStar 
                                                size={20}
                                                style={{
                                                    color: i < 4 ? '#fbbf24' : '#6b7280',
                                                    fill: i < 4 ? '#fbbf24' : 'none'
                                                }} 
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>
                                    Based on 2,847 reviews
                                </div>
                            </div>

                            {/* Recent interactions */}
                            <div style={{zIndex: 1}}>
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>
                                    Recent Interactions
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                                    {[
                                        { type: 'Purchase', customer: 'Priya S.', time: '2m ago', icon: <FiShoppingBag size={14} />, color: '#10b981' },
                                        { type: 'Message', customer: 'Rahul K.', time: '5m ago', icon: <FiMessageSquare size={14} />, color: '#3b82f6' },
                                        { type: 'Review', customer: 'Anjali M.', time: '12m ago', icon: <FiStar size={14} />, color: '#fbbf24' }
                                    ].map((interaction, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1 + i * 0.1 }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.75rem',
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                                borderRadius: '8px'
                                            }}
                                        >
                                            <div style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '8px',
                                                background: `${interaction.color}20`,
                                                border: `1px solid ${interaction.color}40`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: interaction.color
                                            }}>
                                                {interaction.icon}
                                            </div>
                                            <div style={{flex: 1}}>
                                                <div style={{fontSize: '0.8rem', color: '#fff', fontWeight: 500}}>
                                                    {interaction.type}
                                                </div>
                                                <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)'}}>
                                                    {interaction.customer}
                                                </div>
                                            </div>
                                            <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)'}}>
                                                {interaction.time}
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
                        { title: "360° Customer View", desc: "A singular profile for every customer with complete interaction history.", icon: <FiSmile /> },
                        { title: "Loyalty Engines", desc: "Automated reward points and personalized offer engine.", icon: <FiTarget /> },
                        { title: "WhatsApp Marketing", desc: "Push-button campaigns and support directly via WhatsApp messenger.", icon: <FiMessageSquare /> },
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
                        <h3>Hyper-Personalized Engagement</h3>
                        <p>
                            Stop sending generic messages. MacanX CRM uses behavioral data to segments 
                            your customers, allowing you to send the right offer at exact right time.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Purchase-based segmentation (Diamond lovers vs Gold buyers).</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Automated anniversary and birthday wishes with unique coupons.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Abandoned wishlist tracking for catalog apps.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiSmartphone style={{
                            fontSize: '10rem',
                            opacity: 0.05,
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Personalized messaging interface */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', gap: '1.5rem'}}>
                            {/* Customer segments */}
                            <div>
                                <div style={{fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>
                                    Active Segments
                                </div>
                                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                                    {[
                                        { label: 'Diamond Lovers', count: '847', color: '#ec4899' },
                                        { label: 'Gold Buyers', count: '1,234', color: '#fbbf24' },
                                        { label: 'VIP Members', count: '156', color: 'var(--accent-color)' }
                                    ].map((segment, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                            style={{
                                                padding: '0.6rem 1rem',
                                                background: `${segment.color}15`,
                                                border: `1px solid ${segment.color}40`,
                                                borderRadius: '8px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <div style={{fontSize: '0.75rem', fontWeight: 600, color: segment.color}}>
                                                {segment.label}
                                            </div>
                                            <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                                {segment.count} customers
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Message preview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                style={{
                                    padding: '1.25rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: '12px'
                                }}
                            >
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
                                    <FiMessageSquare size={20} style={{color: '#10b981'}} />
                                    <div>
                                        <div style={{fontSize: '0.85rem', fontWeight: 600, color: '#fff'}}>
                                            Birthday Campaign
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)'}}>
                                            Scheduled for 23 recipients
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    padding: '0.75rem',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    border: '1px solid rgba(16, 185, 129, 0.2)',
                                    borderRadius: '8px',
                                    fontSize: '0.75rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.5'
                                }}>
                                    "Happy Birthday [Name]! 🎉 Enjoy 20% off on your favorite collection. Valid for 7 days."
                                </div>
                            </motion.div>

                            {/* Campaign stats */}
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem'}}>
                                {[
                                    { label: 'Open Rate', value: '68%', color: '#10b981' },
                                    { label: 'Click Rate', value: '42%', color: '#3b82f6' }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        style={{
                                            padding: '0.75rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '8px',
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
                    </div>
                </div>

                {/* Detailed Content Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>Omni-Channel Loyalty</h3>
                        <p>
                            Reward your customers wherever they shop. Our loyalty system syncs 
                            seamlessly between your retail POS and your customer-facing mobile apps.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiUsers />
                                <span>Unified member database across all retail branches.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiShoppingBag />
                                <span>Redeem points instantly at checkout or via the mobile app.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Tiered membership management (Silver, Gold, Platinum).</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiTarget style={{
                            fontSize: '10rem',
                            opacity: 0.05,
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Loyalty tier visualization */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', gap: '2rem'}}>
                            {/* Tier progression */}
                            <div>
                                <div style={{fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem'}}>
                                    Membership Tiers
                                </div>
                                {[
                                    { tier: 'Platinum', members: 156, color: '#8b5cf6', percentage: 95 },
                                    { tier: 'Gold', members: 487, color: '#fbbf24', percentage: 75 },
                                    { tier: 'Silver', members: 1234, color: '#6b7280', percentage: 45 }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.15 }}
                                        style={{marginBottom: '1.25rem'}}
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
                                                <span style={{fontSize: '0.85rem', fontWeight: 600, color: '#fff'}}>
                                                    {item.tier}
                                                </span>
                                            </div>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                                <span style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>
                                                    {item.members} members
                                                </span>
                                                <span style={{fontSize: '0.85rem', fontWeight: 600, color: item.color}}>
                                                    {item.percentage}%
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{
                                            width: '100%',
                                            height: '10px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '5px',
                                            overflow: 'hidden'
                                        }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.percentage}%` }}
                                                transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                                                style={{
                                                    height: '100%',
                                                    background: `linear-gradient(90deg, ${item.color}, ${item.color}cc)`,
                                                    borderRadius: '5px'
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Points redemption stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '1rem',
                                    padding: '1.25rem',
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                    borderRadius: '12px'
                                }}
                            >
                                <div style={{textAlign: 'center'}}>
                                    <div style={{fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent-color)'}}>
                                        2.4M
                                    </div>
                                    <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                        Points Issued
                                    </div>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <div style={{fontSize: '1.8rem', fontWeight: 700, color: '#10b981'}}>
                                        1.8M
                                    </div>
                                    <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                        Points Redeemed
                                    </div>
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
                        <h2>Ready to win back your customers?</h2>
                        <p>Build lasting relationships with a CRM designed for the modern luxury market.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> Increased Retention</li>
                            <li><FiCheckCircle/> Personalized CX</li>
                            <li><FiCheckCircle/> Direct Marketing</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Request CRM Setup</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CRM;
