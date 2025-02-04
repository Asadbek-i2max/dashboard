import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
