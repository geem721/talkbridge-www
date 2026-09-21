import { useEffect, useState } from 'react'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('talkbridge-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch (e) {
    // localStorage unavailable — fall back to default
  }
  return 'light'
}

export default function Header() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('talkbridge-theme', theme)
    } catch (e) {
      // localStorage unavailable — theme just won't persist
    }
  }, [theme])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top">TalkBridge</a>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#tutorial">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#whats-new">What's New</a>
          <button
            type="button"
            className="theme-toggle"
            aria-label="Switch to light mode"
            aria-pressed={theme === 'light'}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb" />
            </span>
            <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
          <a className="btn btn-primary" href="https://app.talk-bridge.org">Open App</a>
        </nav>
      </div>
    </header>
  )
}
