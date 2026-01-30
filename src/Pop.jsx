/*GOTTA MAKE IT SO ONCE YOU SCROLL UP THE MODAL CLOSES*/
import { useEffect } from 'react'
import './body.css'

export default function Pop({ open, onClose, children }) {
 useEffect(() => {
  if (!open) return

  const handleScroll = () => {
    const y = window.scrollY
    if (y < 220) { //i think this might be enough space to give it
     onClose()
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
 }, [open, onClose])

 if (!open) return null
 
 return (
    <div className="pop-overlay" onClick={onClose}>
        <div className="pop-modal" onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
 )
}
