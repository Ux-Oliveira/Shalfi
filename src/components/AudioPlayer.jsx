{/*This is the audio player logic using wave surfer for the media visualization*/}

import { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import VisualFlow from './VisualFlow'
import '../styles/audio-visual.css'

const SONGS = [
{ file: '/song1.mp3', theme: 'rose', text: 'Everyday since you left, I’ve crawled naked through a field of rose bushes, passing out just before the end, waking up in the morning at the beginning again' },
{ file: '/song2.mp3', theme: 'random', text: 'All the things I used to do with you, because of you, I feel I should keep doing them so I can still feel close to you, but I’m afraid of what it will feel like to do them without you' },
{ file: '/song3.mp3', theme: 'random', text: 'You let me get a lot closer than I ever thought you would; I’ll never be able to express how grateful I am for that' },
{ file: '/song4.mp3', theme: 'random', text: 'There was something sacred about the silence that filled the rooms you were in' },
{ file: '/song5.mp3', theme: 'random', text: 'In hindsight, it was dumb to hope that you wouldn’t talk about me to everyone else they way you talked about everyone else to me' },
]

export default function AudioPlayer({ trigger }) {
const waveformRef = useRef(null)
const wsRef = useRef(null)
const lastIndex = useRef(null)

const [song, setSong] = useState(null)
const [visualSeed, setVisualSeed] = useState(0)
const [visible, setVisible] = useState(false)

useEffect(() => {
    if (!trigger) return

    let next
    do {
        next = Math.floor(Math.random() * SONGS.length)
    } while (next === lastIndex.current)

    lastIndex.current = next
    setSong(SONGS[next])
    setVisualSeed(v => v + 1)
    setVisible(true)
}, [trigger])

useEffect(() => {
  if (!song) return
  if (!waveformRef.current) return

  wsRef.current?.destroy()

  wsRef.current = WaveSurfer.create({
    container: waveformRef.current,
    height: 0,
    barWidth: 0,
    barRadius: 0,
    cursorWidth: 0,
    interact: false,
    url: song.file,
  })
  wsRef.current.on('ready', () => {
    wsRef.current.setVolume(1)
    wsRef.current.play()
  })

    wsRef.current.on('finish', () => {
        setVisible(false)
    })

  return () => wsRef.current?.destroy()
}, [song])

    if (!song || !visible) return null //this will make it be hidden after finished
    return (
        <div className="audio-block">
        <div id="waveform" ref={waveformRef} style={{ display: 'none' }} />
        <div className="song-text">{song.text}</div>
        <VisualFlow theme={song.theme} seed={visualSeed} />
        </div>
    )
}
