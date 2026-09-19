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
  {
    date: 'Good to know',
    title: 'What to expect: call latency',
    desc: "TalkBridge translates speech in real time, but there's a natural delay of a few seconds between when someone finishes speaking and the translation plays back. Pausing briefly after you speak gives the best result.",
  },
  {
    date: 'Good to know',
    title: 'Known: extra latency on some phone languages',
    desc: 'Calls in Thai, Bengali, Urdu, and Hebrew currently take a bit longer to translate than other languages, since they route through a different voice provider. We\'re working on closing this gap.',
  },
  {
    date: 'Good to know',
    title: "Known: Listen playback depends on your browser",
    desc: "Voice playback for translated text uses your browser's built-in voices. Arabic, Hindi, Swahili, Turkish, Vietnamese, Thai, Ukrainian, Indonesian, Persian, Bengali, Urdu, and Korean may have limited or no voice playback depending on your browser and device.",
  },
  {
    date: 'Good to know',
    title: "Known: Persian and Swahili phone calls aren't supported yet",
    desc: "Phone calls in Persian and Swahili aren't available yet — none of our voice providers currently cover them. We're looking at ways to add coverage.",
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
