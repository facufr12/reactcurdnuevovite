import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'; // Asegúrate de que estas líneas estén aquí
import './App.css'
import Analytics from './components/Analytics';
import Overview from './components/Overview';
import Calendar from './components/Calendar';
import Chat from './components/Chat';
import NavbarVertical from './components/VerticalNavbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <NavbarVertical />
      <Routes>
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/calendar" element={<Calendar />} />
        <Route path="/dashboard/chat" element={<Chat />} />
      </Routes>
  
    </>
  )
}

export default App
