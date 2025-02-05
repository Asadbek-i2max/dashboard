/* eslint-disable react/prop-types */
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

// eslint-disable-next-line no-unused-vars
const Block = ({ id, children, onResize, width, height }) => {
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
