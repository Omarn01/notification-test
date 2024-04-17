import { useEffect } from 'react'
import './App.css'

function App() {
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
    <div className='wrapper'>
      <button onClick={() => notification()} className='button'>
        Notification
      </button>
      <button onClick={() => timerNotification()}>Timer notification</button>
    </div>
  )
}

export default App
