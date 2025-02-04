import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

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
