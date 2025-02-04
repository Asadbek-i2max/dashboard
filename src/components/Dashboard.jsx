/* eslint-disable react/prop-types */
import { Row, Col } from 'antd';
import { useDrop } from 'react-dnd';
import Block from './Block';

const Dashboard = ({ blocks = [], onDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: 'IMAGE',
    drop: (item) => onDrop(item),
  }));

  return (
    <div ref={drop} style={{ padding: '16px' }}>
      <Row gutter={[16, 16]}>
        {blocks.map((block) => (
          <Col key={block.id} span={6}>
            <Block
              id={block.id}
              width={block.width}
              height={block.height}
              onResize={(e, { size }) => {
                block.width = size.width;
                block.height = size.height;
              }}
            >
              <img
                src={block.url}
                alt={block.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Block>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
