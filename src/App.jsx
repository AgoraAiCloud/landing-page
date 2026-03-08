import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Open Gumroad link
      window.location.href = `https://agoraai.gumroad.com/l/OpenClawDockerCompleteGuide?email=${encodeURIComponent(email)}`
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
          <p className="subtitle">One-Click Installation • Complete Guide • 12 Premium Skills</p>
          <p className="description">
            Stop wrestling with Docker on Windows. Get a production-ready OpenClaw environment in minutes with our comprehensive guide, automated installer, and 12 hand-picked skills.
          </p>
          
          <div className="cta-section">
            <form onSubmit={handleSubmit} className="email-form">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="cta-button">Get Access Now</button>
            </form>
            <p className="trust-text">✓ Instant access • ✓ 30-day guarantee • ✓ No spam</p>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Pages of Documentation</div>
            </div>
            <div className="stat">
              <div className="stat-number">300+</div>
              <div className="stat-label">Lines in Installer</div>
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
        <h2>Simple Pricing</h2>
        <div className="pricing-card">
          <h3>OpenClaw Docker Complete</h3>
          <div className="price">$97</div>
          <p className="price-subtitle">One-time purchase • Lifetime access • Updates included</p>
          <ul className="price-features">
            <li>✓ Complete 50+ page guide (PDF + Web)</li>
            <li>✓ One-click PowerShell installer</li>
            <li>✓ Docker Compose orchestration config</li>
            <li>✓ 12 premium skills pre-configured</li>
            <li>✓ Extensions setup guide</li>
            <li>✓ Troubleshooting & optimization tips</li>
            <li>✓ 30-day money-back guarantee</li>
            <li>✓ Free updates forever</li>
          </ul>
          <button className="pricing-button" onClick={() => document.querySelector('input[type="email"]').focus()}>
            Get Started
          </button>
        </div>
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
        <form onSubmit={handleSubmit} className="final-form">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="final-button">Get Instant Access - $97</button>
        </form>
        <p className="guarantee">🔒 30-day money-back guarantee • SSL secured • Privacy protected</p>
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
            <h4>Legal</h4>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <p className="footer-copyright">© 2026 AgoraSystems. All rights reserved.</p>
      </footer>
    </div>
  )
}
