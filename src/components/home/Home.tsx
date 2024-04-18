import { useEffect } from 'react'

import './Home.css'

export default function Home() {
  const notification = () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification')
    } else if (Notification.permission === 'granted') {
      new Notification('Hi there!')
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Hi there!')
        }
      })
    }
  }

  useEffect(() => {
    setTimeout(() => {
      new Notification('HIii')
    }, 2000)
  }, [])

  const timerNotification = () => {
    setTimeout(() => {
      new Notification('HIii')
    }, 5000)
  }

  return (
    <>
      <header>
        <button onClick={() => notification()} className='button'>
          Notification
        </button>
        <button onClick={() => timerNotification()}>Timer notification</button>
      </header>
      <div className='content'>Content</div>
    </>
  )
}
