import './body.css'
import Pop from './Pop'
import { useState } from 'react'

export default function Body() {
const [active, setActive] = useState(null)

const cards = [
    { top: '/quad1.png',
      bottom: '/banner.png',
    },
    { top: '/quad2.png',
      bottom: '/banner.png',
    },
    { top: '/quad3.png',
      bottom: '/banner.png',
    },
    { top: '/quad4.png',
      bottom: '/banner.png',
    }, /*Ill add the photos later*/
]

return (
 <section className="body-section">
    <div className="grid">
        {cards.map((c, i) => (
        <div
         key={i} className="card"
         onClick={() => setActive(i)}>
            <div className="img-top" style={{  backgroundImage: `url(${c.top})`}} />
            <div className="img-bottom" style={{  backgroundImage: `url(${c.bottom})`}} />
        </div>
        ))}
    </div>

    {/*im gonna put the modals here*/}

    <Pop open={active === 0} onClose={() => setActive(null)}>
      <h1>A guitarist and a guitar teacher.</br>Shalfi translates the most specific feelings and thoughts into fire riffs!</h1>
      <a id="record-icon" href="https://counterintuitiverecords.com/collections/shalfi" target="_blank" rel="noreferrer"><p>Buy his recent record!</p></a>
    </Pop>
    <Pop open={active === 1} onClose={() => setActive(null)}>
      <h1>Listen Now!</h1>
      <a href="https://soundcloud.com/shalfitheguitarist" target="_blank" rel="noreferrer">
      <i className="fa-brands fa-soundcloud fa-4x sc" />
      </a>
    </Pop>
    <Pop open={active === 2} onClose={() => setActive(null)}>
      <h1>Exclusive tracks on BandCamp:</h1>
      <a href="https://shalfi.bandcamp.com/" target="_blank" rel="noreferrer">
      <i className="fa-brands fa-bandcamp fa-4x bc" />
      </a>
    </Pop>
    <Pop open={active === 3} onClose={() => setActive(null)}>
      <h1>Tune in on his streams:</h1>
      <a href="https://www.twitch.tv/shalfi_" target="_blank" rel="noreferrer">
      <i className="fa-brands fa-twitch fa-4x tw" />
      </a>
    </Pop>
    <div className="made-by">
     <span>Made by </span>
      <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="made-link"> Rick's a Human</a></div>
  </section>
 )
}
