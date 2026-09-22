// About + Contact. Email addresses are assembled in the browser (user + "@" + domain)
// so the plain address never appears as one string in the built bundle for scrapers.
const CONTACTS = [
  { label: 'Support', user: 'geem721', domain: 'gmail.com' },
  { label: 'General', user: 'geem721', domain: 'outlook.com' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <h2>About TalkBridge</h2>
        <p>
          TalkBridge was created and engineered by <strong>Gregory C. McCullar</strong>, an IT veteran with decades of
          hands-on experience across mainframes, Unix/Linux systems, software testing, and system architecture.
        </p>
        <p>
          Greg earned his degree in Computer Science from Lowry Technical in Aurora, Colorado, and cut his teeth as a
          computer science specialist in the U.S. Air Force, working on IBM mainframes. After his military service, he
          joined Republic Bank, learning computer operations hands-on in a large commercial banking environment, and then
          spent two years as a Senior JCL/Production Control Technician. He was later hired as a Software Test Engineer at
          a major software firm in the Dallas Metroplex, where he rose to Software Test Manager and led testing for
          several years.
        </p>
        <p>
          From there he moved into development and testing, and then into system architecture, specializing in
          Unix/Linux environments. Today he builds, runs, and maintains his own servers and applications in-house,
          bringing experience from thousands of software rollouts and upgrades, thousands of hours of back-end
          networking work (TCP/UDP and port management), and deep cybersecurity know-how. Across thousands of projects he
          has led, collaborated on, or owned, his standard has never changed: deliver quality results that hold up.
        </p>
        <p>
          TalkBridge is the latest of his ideas brought to life. We believe it can make a real difference for people
          everywhere who need to be understood across a language barrier.
        </p>

        <div className="contact-card" id="contact">
          <h3>Contact us</h3>
          <p>
            TalkBridge is in beta, and your feedback shapes what we build next. Every suggestion is read and considered.
          </p>
          <div className="contact-list">
            {CONTACTS.map((c) => {
              const addr = [c.user, c.domain].join('@')
              return (
                <div className="contact-row" key={c.label}>
                  <span className="contact-label">{c.label}</span>
                  <a href={'mailto:' + addr}>{addr}</a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
