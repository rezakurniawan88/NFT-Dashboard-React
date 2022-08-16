import { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './views/Dashboard';
import Navbar from './components/Navbar';
import Market from './views/Market';
import ActiveBids from './views/ActiveBids';
import Portfolio from './views/Portfolio';
import History from './views/History';
import MyWallet from './views/MyWallet';
import Settings from './views/Settings';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  
    useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if(!menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    });

  });


  return (
    <div className="App flex h-full bg-[#F4F7FE] dark:bg-[#0B0A24]">
      <Navbar innerRef={menuRef} isOpen={isOpen} />
      <Routes>
        <Route path='/' element={<Dashboard onClick={() => setIsOpen(isOpen => !isOpen)} isOpen={isOpen} />} />
        <Route path='market' element={<Market onClick={() => setIsOpen(isOpen => !isOpen)} />} />
        <Route path='activebids' element={<ActiveBids onClick={() => setIsOpen(isOpen => !isOpen)} />} />
        <Route path='portfolio' element={<Portfolio onClick={() => setIsOpen(isOpen => !isOpen)} />} />
        <Route path='history' element={<History onClick={() => setIsOpen(isOpen => !isOpen)} />} />
        <Route path='wallet' element={<MyWallet onClick={() => setIsOpen(isOpen => !isOpen)} />} />
        <Route path='settings' element={<Settings onClick={() => setIsOpen(isOpen => !isOpen)} />} />
      </Routes>
    </div>
  );
}

export default App;
