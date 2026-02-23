import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    FiBox, FiFileText, FiShare2, FiShield, 
    FiSettings, FiArrowRight, FiCheckCircle, 
    FiDownload, FiCopy, FiRefreshCw 
} from 'react-icons/fi';
import './FeaturePages.css';

const InvoiceUtility = () => {
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
                            <span className="dot" style={{backgroundColor: 'var(--accent-color)'}}></span> Smart Documentation
                        </div>
                        <h1>
                            Powerful <br />
                            <span className="gradient-text">Invoice Utility</span>
                        </h1>
                        <p>
                            Beyond just billing. Manage estimates, approvals, and quotations with a unified 
                            utility designed for accuracy and compliance.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>Create Invoice <FiArrowRight /></button>
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
                            {/* Background animation */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '350px',
                                    height: '350px',
                                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
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
                                Invoice Generator
                            </div>

                            {/* Document flow visualization */}
                            <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem', zIndex: 1}}>
                                {/* Step 1: Estimate */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1rem',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        border: '1px solid rgba(59, 130, 246, 0.3)',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '8px',
                                        background: 'rgba(59, 130, 246, 0.2)',
                                        border: '1px solid rgba(59, 130, 246, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#3b82f6',
                                        fontSize: '0.9rem',
                                        fontWeight: 700
                                    }}>
                                        1
                                    </div>
                                    <div style={{flex: 1}}>
                                        <div style={{fontSize: '0.85rem', fontWeight: 600, color: '#3b82f6'}}>
                                            Estimate Created
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                            EST-2024-0234
                                        </div>
                                    </div>
                                    <FiCopy size={18} style={{color: '#3b82f6'}} />
                                </motion.div>

                                {/* Arrow */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    style={{textAlign: 'center', color: 'var(--text-secondary)'}}
                                >
                                    <motion.div
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        ↓
                                    </motion.div>
                                </motion.div>

                                {/* Step 2: Approval */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1rem',
                                        background: 'rgba(245, 158, 11, 0.1)',
                                        border: '1px solid rgba(245, 158, 11, 0.3)',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '8px',
                                        background: 'rgba(245, 158, 11, 0.2)',
                                        border: '1px solid rgba(245, 158, 11, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#f59e0b',
                                        fontSize: '0.9rem',
                                        fontWeight: 700
                                    }}>
                                        2
                                    </div>
                                    <div style={{flex: 1}}>
                                        <div style={{fontSize: '0.85rem', fontWeight: 600, color: '#f59e0b'}}>
                                            Customer Approved
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                            Awaiting conversion
                                        </div>
                                    </div>
                                    <FiCheckCircle size={18} style={{color: '#f59e0b'}} />
                                </motion.div>

                                {/* Arrow */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    style={{textAlign: 'center', color: 'var(--text-secondary)'}}
                                >
                                    <motion.div
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                                    >
                                        ↓
                                    </motion.div>
                                </motion.div>

                                {/* Step 3: Invoice */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1rem',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '1px solid rgba(16, 185, 129, 0.3)',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '8px',
                                        background: 'rgba(16, 185, 129, 0.2)',
                                        border: '1px solid rgba(16, 185, 129, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#10b981',
                                        fontSize: '0.9rem',
                                        fontWeight: 700
                                    }}>
                                        3
                                    </div>
                                    <div style={{flex: 1}}>
                                        <div style={{fontSize: '0.85rem', fontWeight: 600, color: '#10b981'}}>
                                            Invoice Generated
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                            INV-2024-0847 • ₹1,27,500
                                        </div>
                                    </div>
                                    <FiFileText size={18} style={{color: '#10b981'}} />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="container">
                <div className="feature-grid">
                    {[
                        { title: "Smart Estimates", desc: "Convert customer quotations to final bills in a single click.", icon: <FiCopy /> },
                        { title: "Digital Distribution", desc: "Native WhatsApp, Email, and SMS sharing of PDF invoices.", icon: <FiShare2 /> },
                        { title: "Auto-Reconciliation", desc: "Sync physical bills with your GST and accounting ledgers automatically.", icon: <FiRefreshCw /> },
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
                        <h3>Compliance Made Simple</h3>
                        <p>
                            Stay worry-free with automated tax calculations, HSN mapping, and e-invoicing 
                            integration built directly into the workflow.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiShield />
                                <span>100% compliant with the latest GST regulations.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Automatic E-way bill generation for wholesale movements.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Digital backup of all physical and digital invoices.</span>
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

                        {/* GST Compliance Dashboard */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', gap: '1.5rem'}}>
                            {/* Compliance status */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    padding: '1.5rem',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                    borderRadius: '12px',
                                    textAlign: 'center'
                                }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: 'spring' }}
                                >
                                    <FiShield size={48} style={{color: '#10b981', marginBottom: '0.75rem'}} />
                                </motion.div>
                                <div style={{fontSize: '1.1rem', fontWeight: 700, color: '#10b981', marginBottom: '0.5rem'}}>
                                    100% Compliant
                                </div>
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>
                                    All invoices meet GST regulations
                                </div>
                            </motion.div>

                            {/* Validation checks */}
                            <div>
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>
                                    Automated Validations
                                </div>
                                {[
                                    { label: 'HSN Code Mapping', status: 'verified', count: '2,847' },
                                    { label: 'Tax Calculations', status: 'verified', count: '2,847' },
                                    { label: 'E-Invoice Format', status: 'verified', count: '2,847' }
                                ].map((check, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + i * 0.15 }}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '0.75rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '8px',
                                            marginBottom: '0.5rem'
                                        }}
                                    >
                                        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                                            <FiCheckCircle size={16} style={{color: '#10b981'}} />
                                            <span style={{fontSize: '0.8rem', color: '#fff'}}>
                                                {check.label}
                                            </span>
                                        </div>
                                        <span style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>
                                            {check.count} docs
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* E-way bill stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '0.75rem'
                                }}
                            >
                                <div style={{
                                    padding: '0.75rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-color)'}}>
                                        234
                                    </div>
                                    <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                        E-way Bills
                                    </div>
                                </div>
                                <div style={{
                                    padding: '0.75rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: '8px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{fontSize: '1.5rem', fontWeight: 700, color: '#10b981'}}>
                                        100%
                                    </div>
                                    <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem'}}>
                                        Success Rate
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Section 2 */}
                <div className="detail-row reverse">
                    <div className="detail-content">
                        <h3>Custom Branding</h3>
                        <p>
                            Your invoices are a touchpoint. Customize layouts, add your logo, 
                            and include social media handles or promotional content.
                        </p>
                        <div className="detail-list">
                            <div className="detail-list-item">
                                <FiSettings />
                                <span>Drag-and-drop builder for invoice templates.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Multi-language support for international clients.</span>
                            </div>
                            <div className="detail-list-item">
                                <FiCheckCircle />
                                <span>Integrated QR codes for payments and shop follow.</span>
                            </div>
                        </div>
                    </div>
                    <div className="visual-box" style={{position: 'relative', overflow: 'hidden'}}>
                        {/* Background icon */}
                        <FiSettings style={{
                            fontSize: '10rem',
                            opacity: 0.05,
                            color: 'var(--accent-color)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }} />

                        {/* Template builder mockup */}
                        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', gap: '1.5rem'}}>
                            {/* Template preview */}
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
                                {/* Header with logo */}
                                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)'}}>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '8px',
                                            background: 'linear-gradient(135deg, var(--accent-color), #ec4899)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            fontWeight: 700,
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        M
                                    </motion.div>
                                    <div>
                                        <div style={{fontSize: '0.9rem', fontWeight: 700, color: '#fff'}}>
                                            Your Brand Name
                                        </div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)'}}>
                                            Premium Jewellers
                                        </div>
                                    </div>
                                </div>

                                {/* Invoice details */}
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>
                                    <div style={{marginBottom: '0.5rem'}}>Invoice #INV-2024-0847</div>
                                    <div>Date: 09 Feb 2026</div>
                                </div>

                                {/* QR Code placeholder */}
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'end'}}>
                                    <div>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>
                                            Scan to Pay
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 }}
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                borderRadius: '6px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                background: 'linear-gradient(45deg, var(--accent-color), transparent)',
                                                borderRadius: '4px'
                                            }} />
                                        </motion.div>
                                    </div>
                                    <div style={{textAlign: 'right'}}>
                                        <div style={{fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.25rem'}}>
                                            Total Amount
                                        </div>
                                        <div style={{fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-color)'}}>
                                            ₹1,27,500
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Customization options */}
                            <div>
                                <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem'}}>
                                    Customization Options
                                </div>
                                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem'}}>
                                    {[
                                        { label: 'Logo', icon: <FiBox size={14} />, color: '#3b82f6' },
                                        { label: 'Colors', icon: <FiSettings size={14} />, color: '#ec4899' },
                                        { label: 'QR Code', icon: <FiCheckCircle size={14} />, color: '#10b981' },
                                        { label: 'Language', icon: <FiFileText size={14} />, color: '#f59e0b' }
                                    ].map((option, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.6 + i * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                            style={{
                                                padding: '0.75rem',
                                                background: `${option.color}10`,
                                                border: `1px solid ${option.color}30`,
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <div style={{color: option.color}}>
                                                {option.icon}
                                            </div>
                                            <span style={{fontSize: '0.75rem', fontWeight: 600, color: option.color}}>
                                                {option.label}
                                            </span>
                                        </motion.div>
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
                        <h2>Simplify your documentation?</h2>
                        <p>Get started with the fastest invoicing utility in the industry today.</p>
                         <ul className="benefits-list">
                            <li><FiCheckCircle/> Zero Error Rate</li>
                            <li><FiCheckCircle/> 5-Min Setup</li>
                            <li><FiCheckCircle/> Unlimited Storage</li>
                        </ul>
                    </div>
                    <div className="banner-actions">
                        <button className="cta-primary big" onClick={() => navigate('/contact')}>Request Access</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InvoiceUtility;
