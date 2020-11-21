import React, {useState} from 'react';
import {HomeOutlined, SettingOutlined, UserAddOutlined, UserOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import {Link} from "react-router-dom";

const Header = () => {
    const { SubMenu, Item } = Menu;
    const [current, setCurrent] = useState('home');
    const handleClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
            <Item key="home" icon={<HomeOutlined />}>
                <Link to={'/'}>
                    Home
                </Link>
            </Item>
            <Item key="sign-up" icon={<UserAddOutlined />} className="float-right">
                <Link to={'/sign-up'}>
                    Sign Up
                </Link>
            </Item>
            <Item key="SignIn" icon={<UserOutlined />} className="float-right">
                <Link to={'/sign-in'}>
                    Sign In
                </Link>
            </Item>
            <SubMenu key="subMenu" icon={<SettingOutlined />} title="User">
                <Item key="setting:1"><Link to={'/'}>Option 1</Link></Item>
                <Item key="setting:2"><Link to={'/'}>Option 2</Link></Item>
            </SubMenu>
        </Menu>
    );
};

export default Header;
