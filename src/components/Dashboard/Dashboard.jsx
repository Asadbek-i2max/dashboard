/* eslint-disable react/prop-types */
import { useDrop } from 'react-dnd';
import { useState, useEffect } from 'react';
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import './Dashboard.scss';

const LOCAL_STORAGE_KEY = 'dashboard_panels';

const Dashboard = ({ blocks = [], onDrop }) => {
  const [panels, setPanels] = useState([]);
  const [columns, setColumns] = useState(4);

  const updateColumns = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setColumns(4);
    } else if (width >= 768) {
      setColumns(3);
    } else if (width >= 480) {
      setColumns(2);
    } else {
      setColumns(1);
    }
  };

  useEffect(() => {
    updateColumns();

    window.addEventListener('resize', updateColumns);

    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  useEffect(() => {
    const savedPanels = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedPanels) {
      setPanels(JSON.parse(savedPanels));
    }
  }, []);

  useEffect(() => {
    const savedPanels = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedPanels) {
      setPanels(JSON.parse(savedPanels));
    } else {
      initializePanels(blocks);
    }
  }, []);

  useEffect(() => {
    if (panels.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(panels));
    }
  }, [panels]);

  const initializePanels = (blocks) => {
    if (blocks.length === 0) return;

    const newPanels = blocks.map((block, index) => ({
      sizeX: 1,
      sizeY: 1,
      row: Math.floor(index / columns),
      col: index % columns,
      content: `<img src="${block.url}" alt="${block.name}" />`,
    }));

    setPanels(newPanels);
  };

  const [, drop] = useDrop(() => ({
    accept: 'IMAGE',
    drop: (item) => {
      onDrop(item);
      addPanel(item);
    },
  }));

  const addPanel = (item) => {
    setPanels((prevPanels) => {
      const nextCol = prevPanels.length % columns;
      const nextRow = Math.floor(prevPanels.length / columns);

      const newPanel = {
        sizeX: 1,
        sizeY: 1,
        row: nextRow,
        col: nextCol,
        content: `<img src="${item.url}" alt="${item.name}" />`,
      };

      const updatedPanels = [...prevPanels, newPanel];
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(updatedPanels)
      );
      return updatedPanels;
    });
  };

  const cellSpacing = [17, 18];

  const resize = [
    'e-south-east',
    'e-east',
    'e-west',
    'e-north',
    'e-south',
  ];

  const onResizeStart = () => {};
  const onResize = () => {};
  const onResizeStop = () => {};

  return (
    <div id="container" className="dashboard-container" ref={drop}>
      <DashboardLayoutComponent
        id="defaultLayout"
        cellSpacing={cellSpacing}
        panels={panels}
        allowResizing={true}
        columns={columns}
        resizableHandles={resize}
        resizeStart={onResizeStart}
        resize={onResize}
        resizeStop={onResizeStop}
      />
    </div>
  );
};

export default Dashboard;
