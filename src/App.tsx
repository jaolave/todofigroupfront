import React from 'react';
import Todo from './components/Todo';
import { Col, Row } from 'antd';

const App: React.FC = () => {
  return (
    <Row style={{ marginTop: '32px' }}>
    <Col xs={2} sm={2} md={6} lg={6} xl={6}/>
    <Col xs={20} sm={20} md={12} lg={12} xl={12}>
      <Todo />
    </Col>
    <Col xs={2} sm={2} md={6} lg={6} xl={6}/>
  </Row>
  );
};

export default App;