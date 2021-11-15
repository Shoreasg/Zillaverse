import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
    DollarCircleOutlined,
    HomeOutlined,
    ReadOutlined,
} from '@ant-design/icons';


const { Sider } = Layout;
const { Title } = Typography;

function NavBar() {
    const [ShowCollapsed, setShowCollapsed] = useState(false);

    const onCollapse = () => {
        ShowCollapsed ? setShowCollapsed(false) : setShowCollapsed(true);
    }

    return (

        <Sider collapsible collapsed={ShowCollapsed} onCollapse={onCollapse}>
            <div className="logo" >
              <Link to="Overview">  <Title level={4} style={{ textAlign: 'center' }} >{`ZilVerse`}</Title></Link>
            </div>
            <Menu  mode="inline" selectable={false}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="Overview">Overview</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DollarCircleOutlined />}>
                    <Link to="Tokens">Tokens</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ReadOutlined />}>
                    <Link to="Tweets">Tweets</Link>
                </Menu.Item>
            </Menu>
        </Sider>


    );
}


export default NavBar;