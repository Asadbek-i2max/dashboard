/* eslint-disable react/prop-types */

import { useDrag } from 'react-dnd';
import { DashboardFilled } from '@ant-design/icons';

import './Image.scss';

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
      className={`image-container ${isDragging ? 'dragging' : ''}`}
    >
      <DashboardFilled className="image-preview" />
      <span className="image-name">{name}</span>
    </div>
  );
};

export default Image;
