import { useMemo } from 'react'
import React from 'react'
import '../styles/audio-visual.css'

function VisualFlow({ theme, seed }) {
  const spans = useMemo(() => {
    return Array.from({ length: 60 }).map(() => ({
  y: Math.random(),
  x: Math.random(),
  t: Math.random(),
  shape: Math.floor(Math.random() * 6),
}))

  }, [seed])

    return (
        <div className={`visual-flow ${theme}`}>
        {spans.map((s, i) => (
  <span
    key={i}
    className={`shape-${s.shape}`}

             style={{
              '--randY': s.y,
              '--randX': s.x,
              '--randT': s.t,
              }}
             /> /*I CHANGED IT TO THIS.SHAPES. AND THIS SHOULD MAKE IT EASIER TO KEEP THINGS ACTUALLY RANDOMIZED. THEN ILL TRY TO MAKE THE AUDIO PLAY AGAIN*/
         ))}
        </div>
    )
}
export default VisualFlow
