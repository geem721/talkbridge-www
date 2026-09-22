const NOTES = [
  {
    date: 'September 2026',
    title: 'Shared whiteboard with Kanban',
    desc: 'Draw, write, and brainstorm together during a meeting. Add sticky notes, drag them across a To Do / In Progress / Done board — and every participant reads the notes in their own language, automatically.',
  },
  {
    date: 'September 2026',
    title: 'Live polls',
    desc: 'Hosts can launch a quick poll mid-meeting. Everyone votes anonymously, results update live, and each participant sees the question in their own language. Final results are saved with your meeting notes.',
  },
  {
    date: 'September 2026',
    title: 'AI meeting notes',
    desc: 'When the host ends a meeting, TalkBridge turns the multilingual conversation into a summary, key points, decisions, and action items — emailed to the host and saved under Past Meetings.',
  },
  {
    date: 'September 2026',
    title: 'Reactions',
    desc: "Send a quick 👍 ❤️ 😂 👏 🎉 😮 during a meeting without interrupting whoever's speaking.",
  },
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
