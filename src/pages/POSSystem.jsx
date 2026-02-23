import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiMonitor, FiZap, FiShoppingBag, FiPrinter, 
    FiSmartphone, FiArrowRight, FiCheckCircle, 
    FiCreditCard, FiSearch, FiLayers 
} from 'react-icons/fi';
import './FeaturePages.css';

const POSSystem = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> High-Speed Retail
                        </div>
                        <h1>
                            Modern <br />
                            <span className="gradient-text">Retail POS System</span>
                        </h1>
                        <p>
                            Designed for speed, accuracy, and customer experience. 
                            Empower your sales team with a POS that's built for the high-end jewelry market.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Launch POS Terminal <FiArrowRight /></button>
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
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity
                                }}
                            />

                            {/* Header */}
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1}}>
                                <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500}}>
                                    POS Terminal
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
                                    ONLINE
                                </motion.div>
                            </div>

                            {/* Cart items */}
                            <div style={{flex: 1, zIndex: 1}}>
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>
                                    Current Transaction
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                                    {[
                                        { item: 'Gold Ring 22K', weight: '8.5g', price: '₹42,500' },
                                        { item: 'Diamond Pendant', weight: '0.5ct', price: '₹85,000' }
                                    ].map((product, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + i * 0.15 }}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '0.75rem',
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                                borderRadius: '8px'
                                            }}
                                        >
                                            <div>
                                                <div style={{fontSize: '0.85rem', fontWeight: 600, color: '#fff'}}>
                                                    {product.item}
                                                </div>
                                                <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                                    {product.weight}
                                                </div>
                                            </div>
                                            <div style={{fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-color)'}}>
                                                {product.price}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Total and payment */}
                            <div style={{zIndex: 1}}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    style={{
                                        padding: '1.25rem',
                                        background: 'rgba(139, 92, 246, 0.1)',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        borderRadius: '12px',
                                        marginBottom: '1rem'
                                    }}
                                >
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                                            Total Amount
                                        </div>
                                        <div style={{fontSize: '2rem', fontWeight: 700, color: 'var(--accent-color)'}}>
                                            ₹1,27,500
                                        </div>
                                    </div>
                                </motion.div>

                                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem'}}>
                                    {[
                                        { label: 'UPI', icon: <FiSmartphone size={16} /> },
                                        { label: 'Card', icon: <FiCreditCard size={16} /> },
                                        { label: 'Cash', icon: <FiShoppingBag size={16} /> }
                                    ].map((method, i) => (
                                        <motion.button
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 + i * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                            style={{
                                                padding: '0.75rem',
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '8px',
                                                color: '#fff',
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}
                                        >
                                            {method.icon}
                                            {method.label}
                                        </motion.button>
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
                        { title: "Lightning Billing", desc: "Generate complex invoices with multi-metal and gst in under 30 seconds.", icon: <FiZap /> },
                        { title: "Omni-Channel Sales", desc: "Sync sales from your physical store with your online catalogs instantly.", icon: <FiLayers /> },
                        { title: "Payment Integration", desc: "Native support for UPI, Cards, and EMI programs at the counter.", icon: <FiCreditCard /> },
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
                        <h3>Frictionless Sales Experience</h3>
                        <p>
                            Our POS avoids the clutter of traditional systems. Every interaction is 
                            optimized to keep the salesperson focused on the customer, not the screen.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Scan-to-cart functionality with instant valuation.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Real-time stock availability check across all branches.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Integrated loyalty points redemption at checkout.</span>
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

                        {/* Scan-to-cart visualization */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', padding: '2rem'}}>
                            {/* Scanning animation */}
                            <div style={{position: 'relative', width: '200px', height: '120px'}}>
                                {/* Barcode representation */}
                                <div style={{display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '1rem'}}>
                                    {[8, 12, 6, 10, 8, 14, 7, 9, 11, 8].map((height, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0.3 }}
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{
                                                duration: 2,
                                                delay: i * 0.1,
                                                repeat: Infinity
                                            }}
                                            style={{
                                                width: '6px',
                                                height: `${height * 4}px`,
                                                background: 'var(--accent-color)',
                                                borderRadius: '2px'
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Scanning laser line */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: 'linear-gradient(90deg, transparent, #ef4444, transparent)',
                                        boxShadow: '0 0 10px #ef4444'
                                    }}
                                    animate={{
                                        y: [0, 60, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                />
                            </div>

                            {/* Product info card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                style={{
                                    width: '100%',
                                    maxWidth: '280px',
                                    padding: '1.25rem',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                    borderRadius: '12px'
                                }}
                            >
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem'}}>
                                    <motion.div
                                        animate={{
                                            rotate: 360
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'linear'
                                        }}
                                    >
                                        <FiZap size={24} style={{color: '#10b981'}} />
                                    </motion.div>
                                    <div>
                                        <div style={{fontSize: '0.85rem', fontWeight: 600, color: '#10b981'}}>
                                            Item Scanned
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)'}}>
                                            Added to cart
                                        </div>
                                    </div>
                                </div>
                                <div style={{fontSize: '0.9rem', color: '#fff', marginBottom: '0.5rem'}}>
                                    Gold Necklace 22K
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <span style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>Weight: 15.2g</span>
                                    <span style={{fontSize: '1.1rem', fontWeight: 700, color: '#10b981'}}>₹76,000</span>
                                </div>
                            </motion.div>

                            {/* Speed indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <FiZap size={14} style={{color: 'var(--accent-color)'}} />
                                Scanned in 0.8s
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>Digital Invoicing & Printing</h3>
                        <p>
                            Beautiful, compliant invoices that represent your brand. Send digital 
                            receipts via WhatsApp or print traditional thermal/A4 invoices instantly.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiPrinter />
                                <span>Support for all major thermal and laser printers.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiSmartphone />
                                <span>WhatsApp/SMS invoice sharing built-in.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Customizable invoice templates to match your brand.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiPrinter style={{
                            fontSize: '10rem',
                            opacity: 0.05,
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Digital invoice mockup */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', gap: '1.5rem'}}>
                            {/* Invoice preview */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    padding: '1.25rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: '12px'
                                }}
                            >
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem'}}>
                                    <div>
                                        <div style={{fontSize: '0.9rem', fontWeight: 700, color: '#fff'}}>
                                            INVOICE #INV-2024-0847
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                            09 Feb 2026, 12:35 PM
                                        </div>
                                    </div>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5, type: 'spring' }}
                                        style={{
                                            padding: '0.4rem 0.8rem',
                                            background: 'rgba(16, 185, 129, 0.15)',
                                            border: '1px solid rgba(16, 185, 129, 0.3)',
                                            borderRadius: '6px',
                                            fontSize: '0.7rem',
                                            color: '#10b981',
                                            fontWeight: 600
                                        }}
                                    >
                                        PAID
                                    </motion.div>
                                </div>

                                <div style={{borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '0.75rem', marginBottom: '0.75rem'}}>
                                    <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>
                                        Customer: Priya Sharma
                                    </div>
                                    <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>
                                        Items: 2 | Total: ₹1,27,500
                                    </div>
                                </div>

                                <div style={{borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '0.75rem'}}>
                                    <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>
                                        GST Breakdown
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem'}}>
                                        <span style={{color: 'var(--text-secondary)'}}>CGST (1.5%)</span>
                                        <span style={{color: '#fff'}}>₹1,913</span>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginTop: '0.25rem'}}>
                                        <span style={{color: 'var(--text-secondary)'}}>SGST (1.5%)</span>
                                        <span style={{color: '#fff'}}>₹1,913</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Delivery options */}
                            <div>
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>
                                    Send Invoice Via
                                </div>
                                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem'}}>
                                    {[
                                        { label: 'WhatsApp', icon: <FiSmartphone size={16} />, color: '#10b981' },
                                        { label: 'Email', icon: <FiCheckCircle size={16} />, color: '#3b82f6' },
                                        { label: 'Print', icon: <FiPrinter size={16} />, color: 'var(--accent-color)' }
                                    ].map((option, i) => (
                                        <motion.button
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + i * 0.1 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            style={{
                                                padding: '0.75rem',
                                                background: `${option.color}10`,
                                                border: `1px solid ${option.color}30`,
                                                borderRadius: '8px',
                                                color: option.color,
                                                fontSize: '0.7rem',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}
                                        >
                                            {option.icon}
                                            {option.label}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Deployment Section */}
             <section className="deployment-section container">
                <div className="deploy-banner glass-panel" style={{borderColor: 'var(--accent-color)', background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                    <div className="banner-content">
                        <h2>Ready to speed up your sales?</h2>
                        <p>Join hundreds of retailers who have optimized their retail experience with MacanX POS.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> 24/7 Priority Support</li>
                            <li><FiCheckCircle/> Cloud & Offline Sync</li>
                            <li><FiCheckCircle/> 100% GST Compliant</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Contact POS Expert</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default POSSystem;
