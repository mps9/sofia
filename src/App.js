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
      ЕБАШУ НА РЕАКТЕ В ТЕЛЕГЕttttttttttttttasdasdasdddddddddddddddtttttt
      <br/>
      test
      <br/>
      <br/>
      <br/>
      <br/>
      asdasdasd
      <br/>
      <br/>
      <br/>
      asdasdasd
      asdasdasd
      asdasdasd
      <br/>
      asdasdasd
      asdasdasd
      asdasdasd
      <br/>
      asdasdasd
      asdasdasd
      asdasdasd
      <br/>
      asdasdasd
      asdasdasd
      asdasdasd
      <br/>
      asdasdasd
      asdasdasd
      asdasdasd
      <br/>
      asdasdasd
      asdasdasd
      asdasdasd
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
