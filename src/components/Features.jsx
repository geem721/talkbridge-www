const FEATURES = [
  {
    title: 'Live Voice Translation',
    desc: 'Speak naturally and get an accurate spoken or written translation back in real time, across 27+ languages.',
  },
  {
    title: 'Phone Calls',
    desc: 'Call anyone on a real phone number in a different language. TalkBridge bridges both legs of the call and translates as you talk.',
  },
  {
    title: 'Video Calls',
    desc: 'Face-to-face conversation with live translated captions, powered by self-hosted, low-latency video infrastructure.',
  },
  {
    title: 'Business Meetings',
    desc: 'Multi-party, host-managed video meetings with live translation, screen share, and host controls — built for real work.',
  },
  {
    title: 'Group Chat',
    desc: 'Text chat where every participant reads messages in their own language, automatically.',
  },
  {
    title: 'Camera OCR',
    desc: 'Point your camera at a menu, sign, or document and get an instant translation overlay.',
  },
  {
    title: 'Document Translation',
    desc: 'Upload a document and get a full translated version back, formatting intact.',
  },
  {
    title: 'History',
    desc: 'Every translation is saved so you can find and reuse it later.',
  },
]

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Everything you need to be understood</h2>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
