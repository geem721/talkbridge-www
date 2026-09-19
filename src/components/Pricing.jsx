const TIERS = [
  {
    name: 'Starter',
    price: '$24.99',
    credits: '250 credits / mo',
    features: ['Voice & text translation', 'Camera OCR & documents', 'Group chat', 'Domestic phone minutes'],
  },
  {
    name: 'Professional',
    price: '$59.99',
    credits: '1,000 credits / mo',
    features: ['Everything in Starter', 'More phone & video minutes', 'International calling', 'Priority translation speed'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$149.99',
    credits: '3,500 credits / mo',
    features: ['Everything in Professional', 'Business Meetings', 'Highest usage caps', 'Priority support'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Pricing</h2>
        <p className="pricing-note">TalkBridge is in beta. Paid tiers below are launching soon.</p>
        <div className="pricing-grid">
          {TIERS.map((t) => (
            <div className={`pricing-card ${t.highlight ? 'pricing-highlight' : ''}`} key={t.name}>
              <h3>{t.name}</h3>
              <div className="pricing-price">{t.price}<span>/mo</span></div>
              <div className="pricing-credits">{t.credits}</div>
              <ul>
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a className="btn btn-primary" href="https://app.talk-bridge.org">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
