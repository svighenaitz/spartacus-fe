import React from 'react';
import { Row, Col } from 'antd'

interface MainLayoutProps {
    
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Row justify='center' style={{ padding: '20px' }}>
        <Col span={20}>
            {children}
        </Col>
        </Row>
    );
}

export default MainLayout