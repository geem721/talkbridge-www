export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <h1>Talk to anyone. In any language. In real time.</h1>
        <p className="hero-sub">
          TalkBridge translates voice, video calls, phone calls, and documents live.
          No awkward pauses, no lost meaning.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary btn-lg" href="https://app.talk-bridge.org">Try TalkBridge</a>
          <a className="btn btn-ghost btn-lg" href="#features">See what it does</a>
        </div>
        <p className="hero-note">Currently in beta.</p>
      </div>
    </section>
  )
}
