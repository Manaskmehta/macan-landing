import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle,
  FiUser, FiBriefcase, FiMessageSquare, FiChevronDown, FiAlertCircle
} from 'react-icons/fi';
import './ContactUs.css';

const SERVICES = [
  'Jewellery ERP',
  'Corporate ERP',
  'Shop Floor Management',
  'MEC Solutions',
  'Inventory Control',
  'Vendor Portal',
  'CRM',
  'POS System',
  'Invoice Utility',
  'Analytics',
  'AI Consulting',
  'AI Agent Development',
  'NLP Services',
  'Computer Vision',
  'Speech & Text Services',
  'Business Automation',
  'DevOps / MLOps',
  'Web & App Development',
  'Other / General Enquiry',
];

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const validate = (fields) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Full name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (fields.phone && !/^[+\d\s\-()]{7,15}$/.test(fields.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!fields.service) errors.service = 'Please select a service you\'re interested in.';
  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  }
  return errors;
};

const ContactUs = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) {
      const fieldErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(INITIAL_FORM).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const fieldErrors = validate(form);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const contactCards = [
    {
      icon: <FiMail />,
      title: 'Email Us',
      lines: ['admin@macanx.in'],
      color: '#8b5cf6',
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      lines: ['+91 76000 67060', 'Mon–Fri, 9 AM – 7 PM IST'],
      color: '#6366f1',
    },
    {
      icon: <FiMapPin />,
      title: 'Find Us',
      lines: ['Mumbai, India', 'Serving clients worldwide'],
      color: '#a855f7',
    },
  ];

  return (
    <div className="contact-page">
      {/* Background glows */}
      <div className="contact-bg-glow glow-1" />
      <div className="contact-bg-glow glow-2" />

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-inner"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-badge">
              <span>✉️</span> We'd love to hear from you
            </div>
            <h1>
              Let's Build Something<br />
              <span className="gradient-text">Great Together</span>
            </h1>
            <p className="contact-hero-sub">
              Whether you're ready to get started or just exploring — our team is happy to answer
              questions, discuss your needs, and show you what MacanX can do for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                className="contact-info-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
              >
                <div className="contact-card-icon" style={{ color: card.color, background: `${card.color}18` }}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                {card.lines.map((line, li) => (
                  <p key={li}>{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <motion.div
              className="contact-form-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2>Send Us a Message</h2>
              <p>Fill in the form and our team will get back to you within 24 hours.</p>

              <div className="trust-points">
                {[ 'Response within 24 hours', 'Talk directly to our team', '10+ global clients served'].map((pt, i) => (
                  <div key={i} className="trust-point">
                    <FiCheckCircle className="trust-icon" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="contact-form-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="success-state"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="success-icon-wrap">
                      <FiCheckCircle className="success-icon" />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>
                      Thanks, <strong>{form.name.split(' ')[0]}</strong>! We've received your message and
                      will get back to you at <strong>{form.email}</strong> within 24 hours.
                    </p>
                    <button className="cta-primary reset-btn" onClick={handleReset}>
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Row 1: Name + Email */}
                    <div className="form-row">
                      <div className={`form-group ${errors.name && touched.name ? 'has-error' : touched.name && !errors.name ? 'has-success' : ''}`}>
                        <label htmlFor="name">
                          <FiUser /> Full Name <span className="required">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="name-error"
                        />
                        <AnimatePresence>
                          {errors.name && touched.name && (
                            <motion.span
                              id="name-error"
                              className="field-error"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                            >
                              <FiAlertCircle /> {errors.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className={`form-group ${errors.email && touched.email ? 'has-error' : touched.email && !errors.email ? 'has-success' : ''}`}>
                        <label htmlFor="email">
                          <FiMail /> Email Address <span className="required">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="email-error"
                        />
                        <AnimatePresence>
                          {errors.email && touched.email && (
                            <motion.span
                              id="email-error"
                              className="field-error"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                            >
                              <FiAlertCircle /> {errors.email}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="form-row">
                      <div className={`form-group ${errors.phone && touched.phone ? 'has-error' : touched.phone && !errors.phone && form.phone ? 'has-success' : ''}`}>
                        <label htmlFor="phone">
                          <FiPhone /> Phone Number <span className="optional">(optional)</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 76000 67060"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="phone-error"
                        />
                        <AnimatePresence>
                          {errors.phone && touched.phone && (
                            <motion.span
                              id="phone-error"
                              className="field-error"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                            >
                              <FiAlertCircle /> {errors.phone}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="form-group">
                        <label htmlFor="company">
                          <FiBriefcase /> Company Name <span className="optional">(optional)</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your Company Ltd."
                          value={form.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Service Select */}
                    <div className={`form-group ${errors.service && touched.service ? 'has-error' : touched.service && !errors.service ? 'has-success' : ''}`}>
                      <label htmlFor="service">
                        <FiBriefcase /> Service Interested In <span className="required">*</span>
                      </label>
                      <div className="select-wrapper">
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="service-error"
                        >
                          <option value="">Select a service…</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <FiChevronDown className="select-arrow" />
                      </div>
                      <AnimatePresence>
                        {errors.service && touched.service && (
                          <motion.span
                            id="service-error"
                            className="field-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                          >
                            <FiAlertCircle /> {errors.service}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Message */}
                    <div className={`form-group ${errors.message && touched.message ? 'has-error' : touched.message && !errors.message ? 'has-success' : ''}`}>
                      <label htmlFor="message">
                        <FiMessageSquare /> Your Message <span className="required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project, goals, or any questions you have…"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-describedby="message-error"
                      />
                      <div className="message-footer">
                        <AnimatePresence>
                          {errors.message && touched.message && (
                            <motion.span
                              id="message-error"
                              className="field-error"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                            >
                              <FiAlertCircle /> {errors.message}
                            </motion.span>
                          )}
                        </AnimatePresence>
                        <span className={`char-count ${form.message.length > 0 && form.message.length < 20 ? 'low' : ''}`}>
                          {form.message.length} / 20 min
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={`cta-primary submit-btn ${loading ? 'loading' : ''}`}
                      disabled={loading}
                      id="contact-submit-btn"
                    >
                      {loading ? (
                        <>
                          <span className="spinner" /> Sending…
                        </>
                      ) : (
                        <>
                          Send Message <FiSend />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
