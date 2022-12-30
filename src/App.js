// import { useEffect } from 'react';
import './App.css';
import Task from './components/Task/Task';
import './components/Task/style.css';
// const tg = window.Telegram.WebApp;

function App() {
  return (
    <div className='App'>
      <div className='header'>Сегодня</div>
      <Task/>
      <Task/>
      <Task/>
      <div className='header'>Завтра</div>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </div>
  );
}

export default App;
