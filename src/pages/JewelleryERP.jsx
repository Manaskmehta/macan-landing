import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiArrowRight, FiCheckCircle, FiPieChart, FiBox, FiShoppingBag, 
    FiTool, FiUsers, FiGlobe, FiSmartphone, FiShield, FiPrinter, 
    FiLayers, FiTrendingUp, FiDatabase, FiPlus, FiMinus
} from 'react-icons/fi';
import './JewelleryERP.css';

// Feature Data with Categories
const featureCategories = [
    {
        id: 'retail',
        label: 'Retail & POS',
        icon: <FiShoppingBag />,
        content: {
            title: "Lightning-Fast Retail Experience",
            description: "Empower your sales team with a POS system built for speed and customer engagement.",
            highlight: "Bill a customer in under 30 seconds.",
            stats: [
                { value: "30s", label: "Avg Checkout" },
                { value: "100%", label: "Accuracy" }
            ],
            features: [
                "Scan-to-Bill Technology",
                "Integrated CRM & Loyalty",
                "Approval & Estimate Mgmt",
                "WhatsApp Invoice Sharing"
            ]
        }
    },
    {
        id: 'inventory',
        label: 'Inventory Command',
        icon: <FiBox />,
        content: {
            title: "Precision Stock Management",
            description: "From loose diamonds to finished sets, track every milligram with complete visibility.",
            highlight: "Eliminate pilferage with RFID tracking.",
            stats: [
                { value: "Zero", label: "Stock Discrepancy" },
                { value: "Real-time", label: "Valuation" }
            ],
            features: [
                "RFID & Barcode Scanning",
                "Image-based Cataloging",
                "Old Gold Exchange Tracking",
                "Automated Reordering"
            ]
        }
    },
    {
        id: 'manufacturing',
        label: 'Manufacturing (Karigar)',
        icon: <FiTool />,
        content: {
            title: "End-to-End Production Traceability",
            description: "Monitor metal movement from melting to finishing. Control wastage at every stage.",
            highlight: "Digital Job Cards for every artisan.",
            stats: [
                { value: "Tracking", label: "Stage-wise" },
                { value: "Loss", label: "Monitoring" }
            ],
            features: [
                "Melting & Casting Logs",
                "Worker/Karigar Accounts",
                "Wastage (Ghat) Analysis",
                "BOM & Cost Estimation"
            ]
        }
    },
    {
        id: 'finance',
        label: 'Accounting & Gold',
        icon: <FiPieChart />,
        content: {
            title: "Dual-Currency Accounting",
            description: "Manage Metal (Gold/Silver) and Currency balances simultaneously in a single ledger.",
            highlight: "Automated GST & 100% Compliance.",
            stats: [
                { value: "Dual", label: "Ledger Mode" },
                { value: "Auto", label: "Reconciliation" }
            ],
            features: [
                "Metal + Cash Accounting",
                "Fixing & Unfixing Management",
                "Daily Rate Adjustments",
                "Expense & P&L Tracking"
            ]
        }
    }
];

const JewelleryERP = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('retail');

    return (
        <div className="jewellery-page">
            <div className="bg-glow-effect"></div>
            
            {/* Value Proposition Hero */}
            <section className="modern-hero">
                <div className="container hero-split">
                    <motion.div 
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="pill-badge">
                            <span className="dot"></span> Enterprise Grade
                        </div>
                        <h1>
                            The Operating System <br />
                            for <span className="gradient-text">Modern Jewellers</span>
                        </h1>
                        <p>
                            Replace fragmented tools with a unified platform. 
                            From <span className="highlight-word">Manufacturing</span> to <span className="highlight-word">Retail</span>, 
                            control your entire value chain.
                        </p>
                        <div className="cta-row">
                            <button className="cta-primary" onClick={() => navigate('/contact')}>
                                Get a Demo <FiArrowRight />
                            </button>
                            <button className="cta-secondary" onClick={() => navigate('/contact')}>
                                Contact Sales
                            </button>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="app-mockup glass-panel">
                            <div className="mockup-header">
                                <span className="circle red"></span>
                                <span className="circle yellow"></span>
                                <span className="circle green"></span>
                            </div>
                            <div className="mockup-body">
                                <div className="dashboard-grid">
                                    <div className="dash-card small">Daily Sales <br/><h3>₹ 24.5L</h3></div>
                                    <div className="dash-card small">Gold Rate <br/><h3>₹ 7,650</h3></div>
                                    <div className="dash-card small">Stock (Au) <br/><h3>4.2 kg</h3></div>
                                    <div className="dash-card small">Karigar Due <br/><h3>850 g</h3></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Feature Tabs */}
            <section className="interactive-features container">
                <div className="tabs-header">
                    <h2>Everything you need to scale</h2>
                    <p>Designed for performance, built for scale.</p>
                </div>
                
                <div className="feature-tabs-container">
                    <div className="tabs-nav">
                        {featureCategories.map((cat) => (
                            <button 
                                key={cat.id}
                                className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(cat.id)}
                            >
                                <span className="tab-icon">{cat.icon}</span>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="tab-content-area glass-panel">
                        <AnimatePresence mode="wait">
                            {featureCategories.map((cat) => (
                                cat.id === activeTab && (
                                    <motion.div 
                                        key={cat.id}
                                        className="tab-pane"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="pane-content">
                                            <h3>{cat.content.title}</h3>
                                            <p className="pane-desc">{cat.content.description}</p>
                                            
                                            <div className="pane-stats">
                                                {cat.content.stats.map((stat, i) => (
                                                    <div key={i} className="stat-item">
                                                        <h4>{stat.value}</h4>
                                                        <span>{stat.label}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pane-highlight">
                                                <FiCheckCircle className="check-icon" /> {cat.content.highlight}
                                            </div> 
                                        </div>
                                        <div className="pane-features-list">
                                            {cat.content.features.map((feat, i) => (
                                                <div key={i} className="feature-pill">
                                                    {feat}
                                                </div>
                                            ))}
                                            <div className="visual-placeholder-mini"></div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Modern Grid for Other Modules */}
            <section className="modules-grid-section container">
                <div className="section-header">
                    <h2>Advanced Capabilities</h2>
                </div>
                <div className="modules-grid">
                    {[
                        { title: "Schemes Management", desc: "Automated monthly gold schemes with customer app access.", icon: <FiTrendingUp /> },
                        { title: "Wholesale Parcels", desc: "Manage bulk approval parcels and traveling salesman stock.", icon: <FiGlobe /> },
                        { title: "Imitation Jewellery", desc: "High-volume barcode tagging and MRP-based discounting.", icon: <FiLayers /> },
                        { title: "Mobile Ecosystem", desc: "Apps for Owners, Customers, and Sales teams.", icon: <FiSmartphone /> },
                    ].map((mod, i) => (
                        <div key={i} className="module-card glass-panel">
                            <div className="icon-box">{mod.icon}</div>
                            <h4>{mod.title}</h4>
                            <p>{mod.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

             {/* Deployment Section */}
             <section className="deployment-section">
                <div className="container">
                    <div className="deploy-banner glass-panel">
                        <div className="banner-content">
                            <h2>Ready to modernize your operations?</h2>
                            <p>Join 500+ jewellers scaling with MacanX ERP.</p>
                            <ul className="benefits-list">
                                <li><FiCheckCircle/> Customized Implementation</li>
                                <li><FiCheckCircle/> Free Data Migration</li>
                                <li><FiCheckCircle/> 24/7 Priority Support</li>
                            </ul>
                        </div>
                        <div className="banner-actions">
                            <button className="cta-primary big" onClick={() => navigate('/contact')}>Contact Sales</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JewelleryERP;
