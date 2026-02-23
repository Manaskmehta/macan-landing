import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, FiX, FiChevronDown,
  FiTruck, FiBox, FiCpu, FiCode, 
  FiCloud, FiSmartphone, FiMonitor, FiLayers, FiSettings,
  FiCommand, FiDatabase, FiMessageSquare, FiTrendingUp 
} from 'react-icons/fi';
import { FaRupeeSign } from "react-icons/fa";

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setMobileOpenGroup(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    {
      title: 'Products',
      type: 'mega',
      groups: [
        {
          title: 'Jewellery ERP',
          items: [
            { label: 'Retail', href: '/jewellery-erp', icon: <FaRupeeSign /> },
            { label: 'Wholesale', href: '/jewellery-erp', icon: <FiBox /> },
            { label: 'Manufacturing', href: '/jewellery-erp', icon: <FiSettings /> },
            { label: 'Catalog App', href: '/jewellery-erp', icon: <FiSmartphone /> }
          ]
        },
        {
          title: 'Enterprise',
          items: [
            { label: 'Corporate ERP', href: '/corporate-erp', icon: <FiLayers /> },
            { label: 'Shop Floor Mgmt', href: '/shopfloor-management', icon: <FiSettings /> },
            { label: "MEC's", href: '/mec', icon: <FiCpu /> }
          ]
        },
        {
          title: 'Core Modules',
          items: [
            { label: 'Inventory Control', href: '/inventory-control', icon: <FiBox /> },
            { label: 'Vendor Portal', href: '/vendor-portal', icon: <FiTruck /> },
            { label: 'CRM', href: '/crm', icon: <FiMessageSquare /> }
          ]
        },
        {
          title: 'Utilities',
          items: [
            { label: 'POS System', href: '/pos-system', icon: <FiMonitor /> },
            { label: 'Invoice Utility', href: '/invoice-utility', icon: <FiBox /> },
            { label: 'Analytics', href: '/analytics', icon: <FiTrendingUp /> }
          ]
        }
      ]
    },
    {
      title: 'Services',
      type: 'mega',
      groups: [
        {
          title: 'Artificial Intelligence',
          items: [
            { label: 'AI Consulting', href: '/artificial-intelligence', icon: <FiCpu /> },
            { label: 'NLP', href: '/artificial-intelligence#nlp', icon: <FiMessageSquare /> },
            { label: 'Computer Vision', href: '/artificial-intelligence#computer-vision', icon: <FiMonitor /> },
            { label: 'Speech Text Services', href: '/artificial-intelligence#speech-text', icon: <FiMessageSquare /> },
            { label: 'Business Automation', href: '/artificial-intelligence#business-automation', icon: <FiSettings /> }
          ]
        },
        {
          title: 'GEN AI',
          items: [
            { label: 'AI Agent Development', href: '/ai-agent-development', icon: <FiCpu /> },
            { label: 'RAG Development', href: '/ai-agent-development#rag', icon: <FiDatabase /> },
            { label: 'LLM Inference', href: '/ai-agent-development#inference', icon: <FiLayers /> },
            { label: 'LLM Chatbot', href: '/ai-agent-development#chatbot', icon: <FiMessageSquare /> }
          ]
        },
        {
          title: 'DevOps',
          items: [
            { label: 'MLOps Service', href: '/devops', icon: <FiSettings /> },
            { label: 'DevOps Consulting', href: '/devops#devops-consulting', icon: <FiCommand /> },
            { label: 'Cloud Solutions', href: '/devops#cloud-solutions', icon: <FiCloud /> }
          ]
        },
        {
          title: 'Web & App',
          items: [
            { label: 'Web Development', href: '/web-app-services#web-dev', icon: <FiMonitor /> },
            { label: 'Mobile App', href: '/web-app-services#mobile-app', icon: <FiSmartphone /> },
            { label: 'UI/UX Design', href: '/web-app-services#ui-ux', icon: <FiLayers /> },
            { label: 'Custom Software', href: '/web-app-services#custom-software', icon: <FiCode /> }
          ]
        }
      ]
    },
        {
          title: 'Company',
          type: 'dropdown',
          items: [
            { label: 'About Us', href: '/about', icon: <FiCommand /> },
            { label: 'Contact Us', href: '/contact', icon: <FiTrendingUp /> }
          ]
        }
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Helper: render link that closes the menu on tap
  const renderLink = (item, className, content) => {
    if (item.href && item.href.startsWith('/')) {
      return (
        <Link to={item.href} className={className} onClick={closeMenu}>
          {content}
        </Link>
      );
    }
    return (
      <a href={item.href || '#'} className={className} onClick={closeMenu}>
        {content}
      </a>
    );
  };

  return (
    <>
      {/* ─── Navbar Bar ─── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="container nav-container">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src="/MacanX Transparent-01 Purple.png"
              alt="MacanX"
              className="logo-img"
            />
          </Link>

          {/* Desktop centre menu */}
          <div className="desktop-menu">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="nav-item-wrapper"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="nav-link">
                  {item.title}
                  <FiChevronDown
                    className={`chevron ${activeDropdown === item.title ? 'rotate' : ''}`}
                  />
                </span>

                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, x: '-50%' }}
                      animate={{ opacity: 1, y: 0, x: '-50%' }}
                      exit={{ opacity: 0, y: 15, x: '-50%' }}
                      transition={{ duration: 0.2 }}
                      className={`dropdown-menu ${item.type}`}
                    >
                      {item.type === 'dropdown' && (
                        <div className="simple-dropdown">
                          {item.items.map((subItem, idx) => (
                            <React.Fragment key={idx}>
                              {renderLink(subItem, 'dropdown-item', (
                                <>
                                  <span className="item-icon">{subItem.icon}</span>
                                  {subItem.label}
                                </>
                              ))}
                            </React.Fragment>
                          ))}
                        </div>
                      )}

                      {item.type === 'grid' && (
                        <div className="grid-dropdown">
                          {item.items.map((subItem, idx) => (
                            <React.Fragment key={idx}>
                              {renderLink(subItem, 'dropdown-item', (
                                <>
                                  <span className="item-icon circle-icon">{subItem.icon}</span>
                                  {subItem.label}
                                </>
                              ))}
                            </React.Fragment>
                          ))}
                        </div>
                      )}

                      {item.type === 'mega' && (
                        <div className="mega-dropdown">
                          {item.groups.map((group, idx) => (
                            <div key={idx} className="mega-column">
                              <h4 className="mega-title">{group.title}</h4>
                              <div className="mega-list">
                                {group.items.map((subItem, subIdx) => (
                                  <React.Fragment key={subIdx}>
                                    {renderLink(subItem, 'dropdown-item', (
                                      <>
                                        <span className="item-icon">{subItem.icon}</span>
                                        {subItem.label}
                                      </>
                                    ))}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="cta-button secondary desktop-only"
            onClick={closeMenu}
          >
            Get Started
          </Link>

          {/* ─── Hamburger button ───
              Kept INSIDE nav-container so it's always in the header row.
              position:relative + z-index ensures it paints above the slide-down panel. */}
          <button
            className={`mobile-toggle ${isOpen ? 'is-open' : ''}`}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </nav>

      {/* ─── Mobile slide-down panel ───
          Rendered as a sibling of <nav>, NOT inside it.
          This breaks it out of the navbar's stacking context so z-index
          never interferes with the hamburger button. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mobile-menu"
          >
            <div className="mobile-menu-inner">
              {navItems.map((item) => (
                <div key={item.title} className="mobile-group">
                  <button
                    className={`mobile-group-title ${mobileOpenGroup === item.title ? 'active' : ''}`}
                    onClick={() =>
                      setMobileOpenGroup(
                        mobileOpenGroup === item.title ? null : item.title
                      )
                    }
                  >
                    <span>{item.title}</span>
                    <FiChevronDown
                      className={`mobile-chevron ${mobileOpenGroup === item.title ? 'rotate' : ''}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileOpenGroup === item.title && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="mobile-group-items">
                          {item.type === 'mega'
                            ? item.groups.map((g, gIdx) => (
                                <div key={gIdx} className="mobile-sub-group">
                                  <div className="mobile-sub-title">{g.title}</div>
                                  {g.items.map((i, iIdx) => (
                                    <React.Fragment key={`${gIdx}-${iIdx}`}>
                                      {renderLink(i, 'mobile-link', (
                                        <>
                                          <span className="mobile-link-icon">{i.icon}</span>
                                          {i.label}
                                        </>
                                      ))}
                                    </React.Fragment>
                                  ))}
                                </div>
                              ))
                            : item.items.map((i, iIdx) => (
                                <React.Fragment key={iIdx}>
                                  {renderLink(i, 'mobile-link', (
                                    <>
                                      <span className="mobile-link-icon">{i.icon}</span>
                                      {i.label}
                                    </>
                                  ))}
                                </React.Fragment>
                              ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                to="/contact"
                className="cta-button mobile-cta"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
