export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>&copy; {new Date().getFullYear()} TalkBridge</span>
        <a href="https://app.talk-bridge.org">Open App</a>
      </div>
    </footer>
  )
}
