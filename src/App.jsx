import { useState, useEffect } from 'react'
import PremiumGuide from './PremiumGuide'

export default function App() {
  useEffect(() => {
    // SEO & Conversion Meta Tags
    document.title = 'OpenClaw Docker Complete Guide - From $97 | AI Infrastructure for Windows'
    
    const metaTags = [
      { name: 'description', content: 'Professional Docker setup for Windows. Complete 50+ page guide + one-click installer + 12 premium skills. From $97. Lifetime updates. No hassle.' },
      { name: 'keywords', content: 'Docker Windows, OpenClaw setup, WSL2 guide, AI infrastructure, automation, Windows developer tools' },
      { property: 'og:title', content: 'OpenClaw Docker Complete Guide - Professional AI Infrastructure' },
      { property: 'og:description', content: 'Master Docker on Windows with our complete guide. 50+ pages, instant access, lifetime updates. From $97.' },
      { property: 'og:type', content: 'product' },
      { property: 'og:image', content: 'https://landing-page-weld-eight-72.vercel.app/og-image.png' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#6B46C1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ]

    metaTags.forEach(tag => {
      const element = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`)
      if (element) {
        element.setAttribute('content', tag.content)
      } else {
        const newTag = document.createElement('meta')
        if (tag.property) {
          newTag.setAttribute('property', tag.property)
        } else {
          newTag.setAttribute('name', tag.name)
        }
        newTag.setAttribute('content', tag.content)
        document.head.appendChild(newTag)
      }
    })
  }, [])
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Open Stripe payment link (Tier 1 - $97)
      window.location.href = `https://buy.stripe.com/cNi9AVgEI6HX1wNehg4ow0h`
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">⚡ AgoraSystems</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>OpenClaw Docker Setup for Windows</h1>
          <p className="subtitle">$97 Complete Guide • One-Click Installer • 12 Premium Skills</p>
          <p className="description">
            Stop wrestling with Docker on Windows. Get a production-ready OpenClaw environment in minutes with our comprehensive guide, automated installer, and 12 hand-picked skills.
          </p>
          
          <div className="cta-section">
            <button 
              onClick={() => window.location.href='https://buy.stripe.com/cNi9AVgEI6HX1wNehg4ow0h'} 
              className="cta-button"
            >
              Get Access Now - $97
            </button>
            <p className="trust-text">✓ Instant access • ✓ Secure payment • ✓ Lifetime updates</p>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">$97</div>
              <div className="stat-label">Complete Guide + Installer</div>
            </div>
            <div className="stat">
              <div className="stat-number">30 min</div>
              <div className="stat-label">From Start to Live</div>
            </div>
            <div className="stat">
              <div className="stat-number">12</div>
              <div className="stat-label">Premium Skills Included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>What You Get</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">▲</div>
            <h3>One-Click Installer</h3>
            <p>PowerShell script that automates the entire setup process. No manual configuration needed.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✎</div>
            <h3>50+ Page Guide</h3>
            <p>Step-by-step instructions, troubleshooting, best practices, and optimization tips.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚙</div>
            <h3>Docker Compose Config</h3>
            <p>Production-ready orchestration with proper networking, volumes, and environment setup.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">◉</div>
            <h3>12 Premium Skills</h3>
            <p>Pre-selected, tested skills: GitHub, self-improving-agent, weather, and more.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚒</div>
            <h3>Extensions Guide</h3>
            <p>How to install, configure, and use each skill with working examples.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">→</div>
            <h3>Launch Ready</h3>
            <p>Everything configured and tested. Go from download to running in under 30 minutes.</p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="problem">
        <div className="problem-content">
          <h2>Why Most People Fail With Docker on Windows</h2>
          <div className="problems-list">
            <div className="problem-item">
              <span className="check">❌</span>
              <div>
                <h4>WSL2 Configuration Hell</h4>
                <p>Getting WSL2 working is a nightmare. Most guides skip half the steps.</p>
              </div>
            </div>
            <div className="problem-item">
              <span className="check">✗</span>
              <div>
                <h4>Docker Desktop Complexity</h4>
                <p>The UI is confusing. The settings are scattered. You need the command line anyway.</p>
              </div>
            </div>
            <div className="problem-item">
              <span className="check">✗</span>
              <div>
                <h4>Skill Installation Takes Forever</h4>
                <p>Finding, installing, and configuring skills adds days to your setup.</p>
              </div>
            </div>
            <div className="problem-item">
              <span className="check">✗</span>
              <div>
                <h4>No Integration Guide</h4>
                <p>You get Docker working, but then what? Integrating skills is a separate battle.</p>
              </div>
            </div>
          </div>

          <h3 className="solution-title">Our Solution</h3>
          <p className="solution-text">
            We've done the work for you. One installer, one guide, one complete setup that just works.
          </p>
        </div>
      </section>

      {/* Pricing Section - TWO PRODUCTS */}
      <section id="pricing" className="pricing">
        <h2>Choose Your Path</h2>
        <p style={{textAlign: 'center', fontSize: '1.1em', color: '#666', marginBottom: '3em'}}>
          Start simple or go professional. Both include everything you need to succeed.
        </p>
        
        <div className="pricing-grid">
          {/* TIER 1: Docker Guide */}
          <div className="pricing-card">
            <div className="tier-label">TIER 1</div>
            <h3>Docker Setup Guide</h3>
            <div className="price">$97</div>
            <p className="price-subtitle">One-time • Lifetime access • Free updates</p>
            <button className="pricing-button" onClick={() => window.location.href='https://buy.stripe.com/cNi9AVgEI6HX1wNehg4ow0h'}>
              Get Started - $97
            </button>
            <ul className="price-features">
              <li>✓ 50+ page complete guide</li>
              <li>✓ One-click installer script</li>
              <li>✓ Docker Compose config</li>
              <li>✓ 12 premium skills</li>
              <li>✓ Troubleshooting guide</li>
              <li>✓ Email support</li>
              <li>✓ Lifetime updates</li>
            </ul>
          </div>

          {/* TIER 2: Premium Guide */}
          <div className="pricing-card pricing-card-premium">
            <div className="tier-label tier-label-premium">TIER 2 • MOST POPULAR</div>
            <h3>Premium Interactive Guide</h3>
            <div className="price">$197</div>
            <p className="price-subtitle">One-time • Lifetime access • Free updates</p>
            <button className="pricing-button pricing-button-premium" onClick={() => window.location.href='https://buy.stripe.com/4gMaEZ6048Q5fnDb544ow0i'}>
              Get Premium - $197
            </button>
            <ul className="price-features">
              <li>✓ Everything in Tier 1</li>
              <li>✓ Interactive web guide (dark/light mode)</li>
              <li>✓ Code syntax highlighting & copy buttons</li>
              <li>✓ Expandable sections & TOC</li>
              <li>✓ Video walkthroughs</li>
              <li>✓ 30-day email support</li>
              <li>✓ Configuration review (1 session)</li>
            </ul>
          </div>
        </div>

        <p style={{textAlign: 'center', marginTop: '3em', color: '#666', fontSize: '0.95em'}}>
          <strong>Need hands-on setup?</strong> Book <a href="mailto:agora@agorasystems.cloud" style={{color: '#6B46C1', fontWeight: '600'}}>1-on-1 configuration session</a> ($397)
        </p>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Will this work with my Windows version?</h4>
            <p>Yes. Tested on Windows 10 (22H2) and Windows 11. WSL2 required (we show you how to set it up).</p>
          </div>
          <div className="faq-item">
            <h4>What if I get stuck?</h4>
            <p>The 50+ page guide covers 99% of issues. Email support is included for edge cases.</p>
          </div>
          <div className="faq-item">
            <h4>Can I use this commercially?</h4>
            <p>Yes. Full commercial license included. Use it for client projects, your business, or agency work.</p>
          </div>
          <div className="faq-item">
            <h4>What if Docker updates?</h4>
            <p>We update the guide when Docker changes. All customers get free updates forever.</p>
          </div>
          <div className="faq-item">
            <h4>Is this beginner-friendly?</h4>
            <p>Absolutely. We assume zero Docker experience. The guide walks through every concept.</p>
          </div>
          <div className="faq-item">
            <h4>Money-back guarantee?</h4>
            <p>Yes. 30 days, no questions asked. If it doesn't work for you, we'll refund 100%.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Stop Struggling With Docker Setup</h2>
        <p>Get instant access to your complete setup guide + installer + premium skills</p>
        <button 
          className="final-button"
          onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}
        >
          Choose Your Plan - From $97
        </button>
        <p className="guarantee">✓ Secure Stripe payment • ✓ Instant download • ✓ Lifetime access & updates</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>AgoraSystems</h4>
            <p>Building AI-first infrastructure for modern teams</p>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="mailto:agora@agorasystems.cloud">Email Support</a>
            <p style={{fontSize: '0.9em', marginTop: '0.5em', color: '#666'}}>agora@agorasystems.cloud</p>
          </div>
        </div>
        <p className="footer-copyright">© 2026 AgoraSystems. All rights reserved.</p>
      </footer>
    </div>
  )
}
