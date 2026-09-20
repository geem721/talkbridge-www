const TIERS = [
  {
    name: 'Starter',
    price: '$24.99',
    yearlyPrice: '$249.90',
    translations: '250 translations / mo',
    features: [
      'Voice & text translation',
      'Camera OCR & documents',
      'Group chat',
      '35 domestic + 13 international phone minutes/mo',
      '609 video call minutes/mo',
    ],
  },
  {
    name: 'Professional',
    price: '$59.99',
    yearlyPrice: '$599.90',
    translations: '1,000 translations / mo',
    features: ['Everything in Starter', 'More phone & video minutes', 'International calling', 'Priority translation speed'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$149.99',
    yearlyPrice: '$1,499.90',
    translations: '3,500 translations / mo',
    features: ['Everything in Professional', 'Business Meetings', 'Highest usage caps', 'Priority support'],
  },
]

const TOPUPS = [
  { name: 'Quick Top-Up', minutes: '15 minutes', price: '$18.99' },
  { name: 'Standard Top-Up', minutes: '45 minutes', price: '$53.99' },
  { name: 'Bulk Top-Up', minutes: '120 minutes', price: '$136.99' },
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
              <div className="pricing-yearly">{t.yearlyPrice}<span> /yr billed annually (2 months free)</span></div>
              <div className="pricing-translations">{t.translations}</div>
              <ul>
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a className="btn btn-primary" href="https://app.talk-bridge.org">Get Started</a>
            </div>
          ))}
        </div>

        <div className="topups">
          <h3 className="topups-title">Need more call time?</h3>
          <p className="pricing-note">Extra phone or video call minutes, usable on any plan, whenever you need them.</p>
          <div className="topup-grid">
            {TOPUPS.map((pk) => (
              <div className="topup-card" key={pk.name}>
                <div className="topup-name">{pk.name}</div>
                <div className="topup-minutes">{pk.minutes}</div>
                <div className="topup-price">{pk.price}</div>
                <a className="btn btn-ghost" href="https://app.talk-bridge.org">Add to Plan</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
