import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight, FiTarget, FiZap, FiShield, FiHeart,
  FiUsers, FiGlobe, FiAward, FiCode, FiTrendingUp,
  FiLinkedin, FiInstagram
} from 'react-icons/fi';
import './AboutUs.css';

/* ─── Data ─────────────────────────────────────────── */
const stats = [
  { value: '10+', label: 'Clients Worldwide', icon: <FiGlobe /> },
  { value: '99.9%', label: 'Uptime Guarantee', icon: <FiShield /> },
  { value: 'Nov 2025', label: 'Founded & Growing', icon: <FiAward /> },
  { value: '24/7', label: 'Expert Support', icon: <FiUsers /> },
];

const values = [
  {
    icon: <FiTarget />,
    title: 'Client-First Thinking',
    desc: 'Every decision we make starts with a question: does this genuinely help our clients? We obsess over outcomes, not features.',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  },
  {
    icon: <FiZap />,
    title: 'Speed & Reliability',
    desc: 'We ship fast without sacrificing quality. Our enterprise-grade infrastructure is engineered to be rock-solid, always on.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  {
    icon: <FiCode />,
    title: 'Engineering Excellence',
    desc: 'We write code that lasts. Clean architecture, rigorous reviews, and a culture of continuous improvement define how we build.',
    gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
  },
  {
    icon: <FiHeart />,
    title: 'People Over Process',
    desc: 'Great products are built by happy teams and trusted partnerships. We invest in relationships — with our clients and each other.',
    gradient: 'linear-gradient(135deg, #ec4899, #a855f7)',
  },
  {
    icon: <FiShield />,
    title: 'Security & Trust',
    desc: "Your data is sacred. We follow industry-best security practices so you can focus on your business, not vulnerabilities.",
    gradient: 'linear-gradient(135deg, #14b8a6, #6366f1)',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Growth Mindset',
    desc: 'We learn from every project. Feedback loops, retrospectives, and constant curiosity keep us ahead of the curve.',
    gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
  },
];

const team = [
  {
    name: 'Manas Mehta',
    role: 'Founder & CEO',
    bio: "Driving MacanX's mission to democratize enterprise-grade software for businesses of all sizes.",
    initials: 'MM',
    color: '#8b5cf6',
  },
];

const timeline = [
  { year: 'Nov 2025', event: 'MacanX Founded', detail: 'Manas Mehta founded MacanX with a vision to build modern, intelligent ERP and AI solutions for businesses of all sizes.' },
  { year: 'Dec 2025', event: 'Product Suite Takes Shape', detail: 'Rapid development of core products — Jewellery ERP, Corporate ERP, and AI consulting services.' },
  { year: 'Early 2026', event: 'First Clients Onboarded', detail: 'Onboarded our first clients and delivered fully custom ERP and AI-powered solutions.' },
  { year: '2026', event: 'Full Platform Launch', detail: 'Launched the unified MacanX platform covering ERP, AI, DevOps, and Web services under one roof — and scaling fast.' },
];

/* ─── Animations ────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay },
});

/* ─── Component ─────────────────────────────────────── */
const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Glow layers */}
      <div className="about-glow about-glow-1" />
      <div className="about-glow about-glow-2" />
      <div className="about-glow about-glow-3" />

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="container">
          <motion.div className="about-hero-inner" {...fadeUp()}>
            <div className="about-badge">
              <span>🏢</span> About MacanX
            </div>
            <h1>
              We Build Software That<br />
              <span className="gradient-text">Actually Works</span>
            </h1>
            <p className="about-hero-sub">
              MacanX is a software company specialising in enterprise ERP, Artificial Intelligence,
              DevOps infrastructure, and custom software development. Founded in November 2025 by
              Manas Mehta, we're on a mission to help businesses of all sizes digitise, automate,
              and scale — one intelligent solution at a time.
            </p>
            <div className="about-hero-cta">
              <Link to="/contact" className="cta-primary about-cta-btn">
                Work With Us <FiArrowRight />
              </Link>
              <a href="#our-story" className="cta-secondary about-cta-btn">
                Our Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map((s, i) => (
              <motion.div key={i} className="about-stat-card glass-panel" {...fadeUp(i * 0.1)}>
                <div className="stat-icon">{s.icon}</div>
                <h2>{s.value}</h2>
                <p>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section className="about-mission-section">
        <div className="container">
          <div className="mission-grid">
            <motion.div className="mission-card glass-panel" {...fadeUp(0)}>
              <div className="mission-icon mission-icon--purple">
                <FiTarget />
              </div>
              <h3>Our Mission</h3>
              <p>
                To make enterprise-grade software accessible and impactful for every business —
                regardless of size or geography. We believe great technology shouldn't be reserved
                for the Fortune 500.
              </p>
            </motion.div>
            <motion.div className="mission-card glass-panel" {...fadeUp(0.15)}>
              <div className="mission-icon mission-icon--blue">
                <FiGlobe />
              </div>
              <h3>Our Vision</h3>
              <p>
                A world where every enterprise operates at peak intelligence — powered by AI,
                streamlined by smart ERPs, and connected by seamless digital infrastructure that
                just works.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Story (Timeline) ── */}
      <section className="about-story-section" id="our-story">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <h2>Our Journey</h2>
            <p>From a focused ERP studio to a full-stack technology company serving the world.</p>
          </motion.div>

          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                {...fadeUp(i * 0.1)}
              >
                <div className="timeline-content glass-panel">
                  <div className="timeline-year">{item.year}</div>
                  <h4>{item.event}</h4>
                  <p>{item.detail}</p>
                </div>
                <div className="timeline-dot" />
              </motion.div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <h2>What We Stand For</h2>
            <p>Principles that guide every line of code we write and every promise we make.</p>
          </motion.div>

          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div key={i} className="value-card glass-panel" {...fadeUp(i * 0.08)}>
                <div className="value-icon" style={{ background: v.gradient }}>
                  {v.icon}
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-team-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <h2>The People Behind MacanX</h2>
            <p>A lean, high-velocity team of engineers, AI researchers, and product thinkers.</p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, i) => (
              <motion.div key={i} className="team-card glass-panel" {...fadeUp(i * 0.1)}>
                <div className="team-avatar" style={{ background: `${member.color}22`, border: `2px solid ${member.color}55` }}>
                  <span style={{ color: member.color }}>{member.initials}</span>
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
                <div className="team-social">
                  {/* Manas – Social links */}
                  <a
                    href="https://www.linkedin.com/in/manasmehta1504/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Manas Mehta LinkedIn"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/ig_manasmehta/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Manas Mehta Instagram"
                  >
                    <FiInstagram />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="about-cta-section">
        <div className="container">
          <motion.div className="about-cta-banner glass-panel" {...fadeUp()}>
            <div className="cta-banner-glow" />
            <h2>Ready to Build Something Great?</h2>
            <p>
              Whether you need a complete ERP overhaul, an AI-powered automation system, or just
              want to explore what's possible — we're one message away.
            </p>
            <Link to="/contact" className="cta-primary about-cta-btn">
              Get in Touch <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
