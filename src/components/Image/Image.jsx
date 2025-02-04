/* eslint-disable react/prop-types */

import { useDrag } from 'react-dnd';
import { PictureOutlined } from '@ant-design/icons';

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
      <PictureOutlined className="image-preview" />
      <span className="image-name">{name}</span>
    </div>
  );
};

export default Image;
