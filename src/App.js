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

      ЭТО НОВОЕ АПИ ДЕТКА
      <br/>
      ЕБАШУ НА РЕАКТЕ В ТЕЛЕГЕtttttttttttttttttttt
      <br/>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
