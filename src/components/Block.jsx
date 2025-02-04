/* eslint-disable react/prop-types */
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Block = ({ children, onResize, width, height }) => {
  return (
    <Resizable
      width={width}
      height={height}
      onResize={onResize}
      resizeHandles={['se']}
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: '1px solid #ddd',
          padding: '8px',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </Resizable>
  );
};

export default Block;
