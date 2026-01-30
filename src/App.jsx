import { useState } from 'react'
import AudioPlayer from './components/AudioPlayer'
import Body from './Body'

const socials = [
 { id: 'spotify', icon: 'fa-spotify', style: 'brands', link: 'https://open.spotify.com/artist/6HJqFsXnlWehSwPu6s4BAO' },
 { icon: 'fa-apple', style: 'brands', link: 'https://music.apple.com/us/artist/shalfi/1480185339' },
 { icon: 'fa-bandcamp', style: 'brands', link: 'https://shalfi.bandcamp.com/' },
 { icon: 'fa-instagram', style: 'brands', link: 'https://www.instagram.com/shalfiedu' },
 { icon: 'fa-youtube', style: 'brands', link: 'https://www.youtube.com/@shalfii' },

  {
    icon: 'fa-envelope',
    style: 'solid',
    link: 'mailto:shalfiedu@gmail.com',
    type: 'email',
  },

 { icon: 'fa-facebook', style: 'brands', link: 'https://www.facebook.com/shalfitheguitarist' },
 { icon: 'fa-tiktok', style: 'brands', link: 'https://www.tiktok.com/@shalfi_' },
 { icon: 'fa-x-twitter', style: 'brands', link: 'https://x.com/shalfi_' },
 { icon: 'fa-twitch', style: 'brands', link: 'https://www.twitch.tv/shalfi_' },
 { icon: 'fa-soundcloud', style: 'brands', link: 'https://soundcloud.com/shalfitheguitarist' },
 { icon: 'fa-threads', style: 'brands', link: 'https://www.threads.com/@shalfiedu' },
 { icon: 'fa-feather', style: 'solid', link: 'https://bsky.app/profile/shalfi.bsky.social' },
]

export default function App() {
  const [open, setOpen] = useState(false)
  const [playTrigger, setPlayTrigger] = useState(0)

 return (
 <div className="app" onClick={() => open && setOpen(false)}>
  {/*this will be the guiter button*/}
  {!open && (
    <div className="guitar-btn"
    onClick={(e) => {
      e.stopPropagation()
      setOpen(true)
    }}
    >
      <i className="fa-solid fa-guitar" />
 </div>
 )}
{/*Social media modal goes here*/}
{open && (
  <div className="social-modal" onClick={(e) => e.stopPropagation()}>
    {socials.map((s, i) => (
      <a
       key={i}
       href={s.link}
       className="social-icon"
         target={s.type === 'email' ? undefined : '_blank'}
         rel={s.type === 'email' ? undefined : 'noopener noreferrer'}
      >
        <i className={`fa-${s.style} ${s.icon}`} />
      </a>
    ))}
    </div>
)}
{/*This will be some simple css name animation*/}
<div className="impact-name">
  <span className="letters">
    <span>S</span>
    <span>h</span>
    <span>a</span>
    <span>l</span>
    <span>f</span>
    <span>i</span>
    <span>e</span>
    <span>d</span>
    <span>u</span>
  </span>
</div>

{/*Hero goes here*/}
<section className="hero">
  <img src="/banner.png" alt="Banner" className="banner" />
</section>

<section className='content'>

  {/*back wave*/}
  <svg
    className="wave wave-back"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="var(--c4)"
      fillOpacity="0.9"
      d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,138.7C672,171,768,213,864,224C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L0,0Z"
    />
  </svg>

  <svg
    className="wave wave-middle"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="var(--c5)"
      fillOpacity="0.9"
      d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,138.7C672,171,768,213,864,224C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L0,0Z"
    />
  </svg>

  <svg
    className="wave wave-front"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="var(--c1)"
      d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,138.7C672,171,768,213,864,224C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L0,0Z"
    />
  </svg>

  <div
    className="head-video-btn"
    onClick={() => setPlayTrigger(t => t + 1)}
  >
    <video
      src="/headbutton.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>

  <AudioPlayer trigger={playTrigger} />
  <Body />

</section>
</div>
 )
}
