import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

import { useState } from 'react';
import { Layout } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const { Content } = Layout;

function App() {
  const [blocks, setBlocks] = useState([]);

  const handleDrop = (item) => {
    setBlocks((prevBlocks) => [
      ...prevBlocks,
      {
        url: item.url,
        name: item.name,
        width: 100, 
        height: 100,
      },
    ]);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Content>
            <Dashboard blocks={blocks} onDrop={handleDrop} />
          </Content>
        </Layout>
      </Layout>
    </DndProvider>
  );
}

export default App;
