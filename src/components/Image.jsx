/* eslint-disable react/prop-types */

import { useDrag } from 'react-dnd';

const Image = ({ id, url, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'IMAGE',
    item: { id, url, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        marginBottom: '8px',
      }}
    >
      <img
        src={url}
        alt={name}
        style={{ width: '50px', height: '50px' }}
      ></img>
      <span style={{ marginLeft: '8px' }}>{name}</span>
    </div>
  );
};

export default Image;
