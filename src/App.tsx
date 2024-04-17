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

  return (
    <div>
      <button onClick={() => notification()} className='button'>
        Notification
      </button>
    </div>
  )
}

export default App
