// import { useEffect } from 'react';
import './App.css';
import Task from './components/Task/Task';
import './components/Task/style.css';
// const tg = window.Telegram.WebApp;

function App() {
  return (
    <div className='App'>
      <div className='header'>Today</div>
      <Task info={{header: 'My first task', date: '30 december 12:30'}}/>
      <Task info={{header: 'I need some sleep', date: '30 december 18:30'}}/>
      <Task info={{header: 'I want to sleep', date: '30 december 18:30'}}/>
      <div className='header'>Tomorrow</div>
      <Task info={{header: 'Happy new year', date: '31 december 23:50'}}/>
      <Task info={{header: 'Happy new year', date: '31 december 23:51'}}/>
      <Task info={{header: 'Happy new year', date: '31 december 23:52'}}/>
      <Task info={{header: 'Happy new year', date: '31 december 23:53'}}/>
      <Task info={{header: 'Happy new year', date: '31 december 23:54'}}/>
      <Task info={{header: 'Happy new year', date: '31 december 23:55'}}/>
      <Task info={{header: 'Happy new year', date: '31 december 23:56'}}/>
      <Task info={{header: 'Happy new year', date: '31 december 23:57'}}/>
      <Task info={{header: 'Happy new year', date: '31 december 23:58'}}/>
      <Task info={{header: 'Happy new year', date: '31 december 23:59'}}/>

    </div>
  );
}

export default App;
