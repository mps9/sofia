import { useEffect } from 'react';
import './App.css';
import Task from './components/Task/Task';
import './components/Task/style.css';
const tg = window.Telegram.WebApp;

function App() {
  return (
    <Task/>
  );
}

export default App;
