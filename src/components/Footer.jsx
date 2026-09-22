export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>&copy; {new Date().getFullYear()} TalkBridge</span>
        <span className="footer-links">
          <a href="#contact">Contact</a>
          <a href="https://app.talk-bridge.org">Open App</a>
        </span>
      </div>
    </footer>
  )
}
