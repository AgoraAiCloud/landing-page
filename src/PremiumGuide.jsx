import React, { useState } from 'react'
import './PremiumGuide.css'

/**
 * Premium Interactive Docker Guide Component
 * Beautiful, professional design for $197+ tier justification
 */

const PremiumGuide = () => {
  const [expandedSections, setExpandedSections] = useState({
    intro: true,
    prerequisites: false,
    wsl2: false,
    docker: false,
  })

  const [darkMode, setDarkMode] = useState(false)

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const sections = [
    {
      id: 'intro',
      title: '📖 Introduction',
      subtitle: 'Why This Guide?',
      content: `This comprehensive guide walks you through setting up OpenClaw with Docker on Windows — completely, step by step, no skipped sections.

Most Docker tutorials assume you already know Docker. This one doesn't. We start from zero and get you to fully operational in under 30 minutes.

**What You'll Have at the End:**
• Docker running smoothly on Windows
• OpenClaw fully configured and tested
• 12 premium skills installed and working
• A foundation for building AI automation

**Who This Is For:**
• Windows developers
• Teams needing consistent environments
• Anyone tired of "Docker on Windows" pain
• People building OpenClaw agents`,
      code: null
    },
    {
      id: 'prerequisites',
      title: '✅ Prerequisites',
      subtitle: 'Before You Start',
      content: `You'll need a few things before we begin. Nothing complicated — just standard stuff.

**Required:**
• Windows 10 (version 22H2) or Windows 11
• Administrator access on your machine
• 10GB free disk space
• 4GB RAM minimum (8GB recommended)
• Stable internet connection

**Optional:**
• Visual Studio Code (for editing configs)
• Git (for version control)
• GitHub account (for skills)

**System Check:**
Your machine should be able to run Docker Desktop smoothly. If you're running ancient hardware or a super locked-down corporate machine, you might hit snags. But in 2026, Docker on Windows is rock solid.

**Note:** This guide is for Windows 10/11 only. If you're on an older Windows or MacOS, the steps will be slightly different (but the concepts are the same).`,
      code: null
    },
    {
      id: 'wsl2',
      title: '🐧 Windows Setup - WSL2',
      subtitle: 'Foundation for Docker',
      content: `WSL2 (Windows Subsystem for Linux 2) is the foundation. Docker needs it to run on Windows properly.

**Step 1: Enable Required Features**

Open PowerShell as Administrator and run:`,
      code: `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`,
      codeLabel: 'PowerShell (as Administrator)'
    },
    {
      id: 'docker',
      title: '🐳 Docker Desktop Installation',
      subtitle: 'Get Docker Running',
      content: `Now that WSL2 is ready, let's install Docker Desktop.

**Step 1: Download Docker Desktop**

Go to: https://www.docker.com/products/docker-desktop
Download the latest version for Windows.

**Step 2: Run the Installer**

1. Double-click the installer
2. Select "Install required Windows components for WSL 2"
3. Follow the wizard
4. Restart your computer when prompted

**Step 3: Verify Installation**

Open PowerShell and run:`,
      code: `docker --version
docker run hello-world`,
      codeLabel: 'PowerShell'
    }
  ]

  return (
    <div className={`premium-guide ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Header */}
      <div className="guide-header">
        <div className="guide-header-content">
          <h1>🏛️ OpenClaw Docker Complete Guide</h1>
          <p className="guide-subtitle">Setup Windows Right • 50+ Pages • Production Ready</p>
          
          <div className="guide-controls">
            <button 
              className="dark-mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <span className="read-time">~15 min read</span>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="table-of-contents">
        <h3>📑 Contents</h3>
        <ol>
          {sections.map((section, idx) => (
            <li key={section.id}>
              <a href={`#${section.id}`} onClick={() => toggleSection(section.id)}>
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Main Content */}
      <div className="guide-content">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="guide-section">
            <div 
              className="section-header"
              onClick={() => toggleSection(section.id)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <h2>{section.title}</h2>
                <p className="section-subtitle">{section.subtitle}</p>
              </div>
              <span className="expand-icon">
                {expandedSections[section.id] ? '▼' : '▶'}
              </span>
            </div>

            {expandedSections[section.id] && (
              <div className="section-body">
                <p className="section-text">{section.content}</p>
                
                {section.code && (
                  <div className="code-block">
                    <div className="code-header">
                      <span className="code-label">{section.codeLabel}</span>
                      <button 
                        className="copy-button"
                        onClick={() => copyToClipboard(section.code)}
                      >
                        📋 Copy
                      </button>
                    </div>
                    <pre><code>{section.code}</code></pre>
                  </div>
                )}

                {section.id === 'intro' && (
                  <div className="callout callout-success">
                    <strong>✅ Success Path:</strong> This guide gets you to a working Docker + OpenClaw environment. No tricks, no workarounds — just clean, working setup.
                  </div>
                )}

                {section.id === 'prerequisites' && (
                  <div className="callout callout-info">
                    <strong>ℹ️ Tip:</strong> If you don't have 8GB RAM, it'll still work, but slower. Docker on Windows with 4GB is like driving a car with 3 cylinders — possible, but not ideal.
                  </div>
                )}

                {section.id === 'wsl2' && (
                  <div className="callout callout-warning">
                    <strong>⚠️ Important:</strong> The first DISM command might take 5-10 minutes. Don't panic — it's downloading and installing Linux components.
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="guide-footer">
        <p>💡 This is just a sample of the complete 50+ page guide.</p>
        <p>Full guide includes: 12 skills setup, troubleshooting, optimization, and more.</p>
      </div>
    </div>
  )
}

export default PremiumGuide
