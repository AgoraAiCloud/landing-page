import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Open Stripe payment link (Tier 1 - $67)
      window.location.href = `https://buy.stripe.com/cNi8wR3RW2rHejzc984ow00`
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">🏛️ AgoraSystems</div>
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
          <p className="subtitle">$67 Complete Guide • One-Click Installer • 12 Premium Skills</p>
          <p className="description">
            Stop wrestling with Docker on Windows. Get a production-ready OpenClaw environment in minutes with our comprehensive guide, automated installer, and 12 hand-picked skills.
          </p>
          
          <div className="cta-section">
            <button 
              onClick={() => window.location.href='https://buy.stripe.com/cNi8wR3RW2rHejzc984ow00'} 
              className="cta-button"
            >
              Get Access Now - $67
            </button>
            <p className="trust-text">✓ Instant access • ✓ Secure payment • ✓ Lifetime updates</p>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">$67</div>
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
            <div className="feature-icon">📦</div>
            <h3>One-Click Installer</h3>
            <p>PowerShell script that automates the entire setup process. No manual configuration needed.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>50+ Page Guide</h3>
            <p>Step-by-step instructions, troubleshooting, best practices, and optimization tips.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Docker Compose Config</h3>
            <p>Production-ready orchestration with proper networking, volumes, and environment setup.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>12 Premium Skills</h3>
            <p>Pre-selected, tested skills: GitHub, self-improving-agent, weather, and more.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Extensions Guide</h3>
            <p>How to install, configure, and use each skill with working examples.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
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
              <span className="check">❌</span>
              <div>
                <h4>Docker Desktop Complexity</h4>
                <p>The UI is confusing. The settings are scattered. You need the command line anyway.</p>
              </div>
            </div>
            <div className="problem-item">
              <span className="check">❌</span>
              <div>
                <h4>Skill Installation Takes Forever</h4>
                <p>Finding, installing, and configuring skills adds days to your setup.</p>
              </div>
            </div>
            <div className="problem-item">
              <span className="check">❌</span>
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

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <h2>Get Started - $67</h2>
        <div className="pricing-card">
          <h3>Docker Mastery Blueprint</h3>
          <div className="price">$67</div>
          <p className="price-subtitle">One-time purchase • Instant access • Lifetime updates</p>
          <ul className="price-features">
            <li>✓ Complete 50+ page guide (PDF + Web)</li>
            <li>✓ One-click PowerShell installer</li>
            <li>✓ Docker Compose orchestration config</li>
            <li>✓ 12 premium skills pre-configured</li>
            <li>✓ Extensions setup guide</li>
            <li>✓ Troubleshooting & optimization tips</li>
            <li>✓ Email support</li>
            <li>✓ Free updates forever</li>
          </ul>
          <button className="pricing-button" onClick={() => window.location.href='https://buy.stripe.com/cNi8wR3RW2rHejzc984ow00'}>
            Get Started Now - $67
          </button>
        </div>
        
        <p style={{textAlign: 'center', marginTop: '2em', color: '#666', fontSize: '0.9em'}}>
          <strong>Need hands-on help?</strong> Upgrade to <a href="https://buy.stripe.com/14A6oJ88caYd8Zf8WW4ow03" style={{color: '#6B46C1'}}>Personal Assistant Setup ($397)</a> for custom video + 30-day support
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
        <h2>Ready to Stop Struggling With Docker?</h2>
        <p>Get everything you need in one complete package</p>
        <button 
          className="final-button"
          onClick={() => window.location.href='https://buy.stripe.com/cNi8wR3RW2rHejzc984ow00'}
        >
          Get Instant Access Now - $67
        </button>
        <p className="guarantee">🔒 Secure payment • Instant delivery • Lifetime updates</p>
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
