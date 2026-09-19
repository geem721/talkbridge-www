const NOTES = [
  {
    date: 'September 2026',
    title: 'Smarter phone calls',
    desc: 'TalkBridge now detects voicemail and answering machines automatically, so a call ends cleanly instead of translating a recorded greeting.',
  },
  {
    date: 'September 2026',
    title: 'Business Meetings',
    desc: 'Host multi-party video meetings with live translation, screen sharing, and host controls — built for real work, not just casual calls.',
  },
  {
    date: 'September 2026',
    title: 'Meeting scheduling',
    desc: 'Schedule a meeting ahead of time and share one link. Guests see a waiting screen until it starts; the host can begin early.',
  },
]

export default function ReleaseNotes() {
  return (
    <section id="whats-new" className="release-notes">
      <div className="container">
        <h2>What's new</h2>
        <div className="release-list">
          {NOTES.map((n) => (
            <div className="release-item" key={n.title}>
              <div className="release-date">{n.date}</div>
              <div>
                <h3>{n.title}</h3>
                <p>{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
