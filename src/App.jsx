import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';

import './App.scss';


function App() {
  return (
    <>
      <div className="app">
        <div className="main-container">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
