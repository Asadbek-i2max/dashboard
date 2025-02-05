import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';

import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './App.scss';

function App() {
  const [blocks, setBlocks] = useState([]);

  const handleDrop = (item) => {
    setBlocks((prevBlocks) => [
      ...prevBlocks,
      {
        id: Date.now(),
        url: item.url,
        name: item.name,
      },
    ]);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="main-content">
          <header className="header">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="profile">
              <img
                src="/src/assets/images/profile.png"
                className="profile-img"
              ></img>
              <span>Fido-Biznes User</span>
            </div>
          </header>

          <div className="dashboard">
            <Dashboard blocks={blocks} onDrop={handleDrop} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
