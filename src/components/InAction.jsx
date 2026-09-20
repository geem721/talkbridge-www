import officerVideo from '../assets/videos/talkbridge-video-1-officer.mp4'
import hospitalVideo from '../assets/videos/talkbridge-video-3-hospital-altcut.mp4'
import homeOfficeVideo from '../assets/videos/talkbridge-video-4-homeoffice.mp4'
import livingRoomVideo from '../assets/videos/talkbridge-video-5-livingroom.mp4'

const CLIPS = [
  { title: 'On the job', src: officerVideo },
  { title: 'In the field', src: hospitalVideo },
  { title: 'At home', src: homeOfficeVideo },
  { title: 'With family', src: livingRoomVideo },
]

export default function InAction() {
  return (
    <section id="in-action" className="in-action">
      <div className="container">
        <h2>See TalkBridge in action</h2>
        <div className="in-action-grid">
          {CLIPS.map((c) => (
            <div className="in-action-card" key={c.title}>
              <video controls preload="metadata" playsInline>
                <source src={c.src} type="video/mp4" />
              </video>
              <div className="in-action-label">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
