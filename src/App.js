import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
      tg.ready()
    }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      hi
      hi
      hi
      ЭТО НОВОЕ АПИ ДЕТКА
      hi
      hi
      hi
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
