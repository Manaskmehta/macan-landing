import React from 'react';
import { motion } from 'framer-motion';
import { 
    FiGlobe, FiSmartphone, FiPenTool, FiCode, 
    FiDatabase, FiLayers, FiLayout, FiActivity,
    FiCheck, FiPieChart, FiTrendingUp, FiMousePointer
} from 'react-icons/fi';
import './WebAppVisuals.css';

const WindowHeader = () => (
    <div className="window-header">
        <div className="window-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
        </div>
        <div className="window-address-bar"></div>
    </div>
);

export const FullStackHeroVisual = () => {
    return (
        <div className="webapp-visual-container hero-visual">
            <motion.div 
                className="browser-window main-window"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <WindowHeader />
                <div className="window-content dashboard">
                    <div className="dashboard-sidebar">
                        <div className="sidebar-line long"></div>
                        <div className="sidebar-line short"></div>
                        <div className="sidebar-line med"></div>
                    </div>
                    <div className="dashboard-main">
                        <div className="area-chart-container">
                            <svg viewBox="0 0 400 150" className="area-chart">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <motion.path 
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    d="M0,120 Q50,110 100,100 T200,80 T300,40 T400,60 L400,150 L0,150 Z" 
                                    fill="url(#chartGradient)"
                                />
                                <motion.path 
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    d="M0,120 Q50,110 100,100 T200,80 T300,40 T400,60" 
                                    fill="none" 
                                    stroke="var(--accent-color)" 
                                    strokeWidth="3"
                                />
                            </svg>
                        </div>
                        <div className="dashboard-grid">
                            <div className="mini-card"></div>
                            <div className="mini-card"></div>
                            <div className="mini-card"></div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Revenue Card */}
                <motion.div 
                    className="floating-card revenue-card"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <span className="label">Revenue</span>
                    <span className="value">₹1.2Lakhs</span>
                </motion.div>

                {/* Floating Growth Card */}
                <motion.div 
                    className="floating-card growth-card"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <span className="label">Growth</span>
                    <span className="value">+125%</span>
                </motion.div>
            </motion.div>
        </div>
    );
};

export const WebDevVisual = () => {
    return (
        <div className="webapp-visual-container">
            <motion.div 
                className="browser-window sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <WindowHeader />
                <div className="window-content flex-center">
                    <FiGlobe className="central-icon" />
                    <div className="code-lines">
                        <div className="code-line w-80"></div>
                        <div className="code-line w-60"></div>
                        <div className="code-line w-90"></div>
                        <div className="code-line w-40"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export const MobileAppVisual = () => {
    return (
        <div className="webapp-visual-container">
            <motion.div 
                className="phone-mockup"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="phone-nav"></div>
                <div className="phone-content">
                    <div className="phone-card"></div>
                    <div className="phone-card"></div>
                    <div className="phone-circle"></div>
                </div>
                <div className="phone-home"></div>
            </motion.div>
        </div>
    );
};

export const UIUXVisual = () => {
    return (
        <div className="webapp-visual-container">
            <motion.div 
                className="design-canvas"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="canvas-layers">
                    <motion.div className="layer l1" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }}><FiLayers /></motion.div>
                    <motion.div className="layer l2" animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}><FiLayout /></motion.div>
                    <motion.div className="layer l3" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }}><FiMousePointer /></motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export const CustomSoftwareVisual = () => {
    return (
        <div className="webapp-visual-container">
            <motion.div 
                className="browser-window grid-window"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <WindowHeader />
                <div className="window-content software-grid">
                    <div className="stat-card">
                        <span className="label">Daily Sales</span>
                        <span className="value">₹24.5L</span>
                    </div>
                    <div className="stat-card">
                        <span className="label">Gold Rate</span>
                        <span className="value">₹7,650</span>
                    </div>
                    <div className="stat-card">
                        <span className="label">Stock (Au)</span>
                        <span className="value">4.2 kg</span>
                    </div>
                    <div className="stat-card">
                        <span className="label">Karigar Due</span>
                        <span className="value">850 g</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
