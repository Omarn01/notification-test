import './App.css'

function App() {
  const notification = () => {
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      alert('This browser does not support desktop notification')
    } else if (Notification.permission === 'granted') {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification('Hi there!')
      // …
    } else if (Notification.permission !== 'denied') {
      // We need to ask the user for permission
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          const notification = new Notification('Hi there!')
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
