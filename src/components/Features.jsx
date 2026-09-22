import translateImg from '../assets/screenshots/talkbridge-translate.webp'
import phoneImg from '../assets/screenshots/talkbridge-phone.webp'
import videoCallImg from '../assets/screenshots/talkbridge-video-call.webp'
import meetingsImg from '../assets/screenshots/talkbridge-meetings.webp'
import groupChatImg from '../assets/screenshots/talkbridge-group-chat.webp'
import cameraOcrImg from '../assets/screenshots/talkbridge-camera-ocr.webp'
import documentsImg from '../assets/screenshots/talkbridge-documents.webp'

const FEATURES = [
  {
    title: 'Live Voice & Text Translation',
    desc: 'Speak naturally or type what you want to say, and get an accurate translation back in real time across 27+ languages. Read it on screen, or tap Listen to hear it spoken aloud.',
    img: translateImg,
  },
  {
    title: 'Phone Calls',
    desc: 'Call anyone on a real phone number in a different language. TalkBridge bridges both legs of the call and translates as you talk.',
    img: phoneImg,
  },
  {
    title: 'Video Calls',
    desc: 'Face-to-face conversation with live translated captions, powered by self-hosted, low-latency video infrastructure.',
    img: videoCallImg,
  },
  {
    title: 'Business Meetings',
    desc: 'Multi-party, host-managed video meetings with live translated captions, screen share, polls, reactions, a shared whiteboard, and AI meeting notes — built for real work.',
    img: meetingsImg,
  },
  {
    title: 'Group Chat',
    desc: 'Text chat where every participant reads messages in their own language, automatically.',
    img: groupChatImg,
  },
  {
    title: 'Camera OCR',
    desc: 'Point your camera at a menu, sign, or document and get an instant translation overlay.',
    img: cameraOcrImg,
  },
  {
    title: 'Document Translation',
    desc: 'Upload a document and get a full translated version back, formatting intact.',
    img: documentsImg,
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
        <h2>Everything you need to bridge the communication gap.</h2>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              {f.img && (
                <div className="feature-card-img">
                  <img src={f.img} alt={`${f.title} in TalkBridge`} loading="lazy" />
                </div>
              )}
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
