const STEPS = [
  {
    n: '1',
    title: 'Create your account',
    desc: 'Sign up with your email in a few seconds — no app to install, it runs in your browser.',
  },
  {
    n: '2',
    title: 'Pick how you want to talk',
    desc: 'Type or speak for instant translation, call a real phone number, start a video call, or host a business meeting.',
  },
  {
    n: '3',
    title: 'Talk naturally',
    desc: 'TalkBridge listens, translates, and speaks or displays the result in real time, across 27+ languages.',
  },
  {
    n: '4',
    title: 'Pick up where you left off',
    desc: 'Every conversation is saved to your history so you can find and reuse it later.',
  },
]

export default function Tutorial() {
  return (
    <section id="tutorial" className="tutorial">
      <div className="container">
        <h2>How it works</h2>
        <div className="tutorial-steps">
          {STEPS.map((s) => (
            <div className="tutorial-step" key={s.n}>
              <div className="tutorial-num">{s.n}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
