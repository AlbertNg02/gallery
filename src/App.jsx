    
import React from "react";
import { Col, Layout, Row } from "antd";
import AppHeader from "./components/AppHeader/AppHeader";
import AppRoutes from "./Routes";

import 'antd/dist/reset.css';
const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Header>
            <AppHeader />
          </Header>
        </Col>
        <Col span={22} offset={1}>
          <Content>
            <AppRoutes />
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};

export default App;