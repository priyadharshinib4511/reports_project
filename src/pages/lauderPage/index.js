// import './App.css';
import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DoubleLeftOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import ACSPage from "../ACSPage";
import './styles.css'
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import Home from "../Home";
import Reports from "../Reports";
import SignInpage from "../SignInPage";

const items = [
    {
        title: 'Sales',
        key: '1',
        path: '/sales',
        active: true

    },
    {
        title: 'Activate',
        key: '2',
        path: '/activate',
        active: true

    }
    // ,
    // {
    //     title: 'Option 2',
    //     key: '2',
    //     path: '/option2',
    //     active: false
    // },
    // {
    //     title: 'Option 3',
    //     key: '3',
    //     path: '/option3',
    //     active: false
    // }
];

function LauderMain() {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedColor, setSelectedColor] = useState(false);
    const [activeColor, setActiveColor] = useState(true);
    const [activeLink, setActiveLink] = useState('1');
    const [userData, setUserData]  = useState(items)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        setSelectedColor(!selectedColor);
    };
    useEffect(() => {
        console.log('clicked update-----@@@@', userData)
        setUserData(userData)
    }, [userData])

    const handleChangeLink = (e, index) => {
        const finalIndex = index + 1;

        const finalItem = items.map((value, index) => {
            if (value.key === finalIndex.toString()) {
                return { ...items[index], active: true }
            }
            else {
                return { ...items[index], active: false }
            }
        })
        console.log('-------', finalItem)

        // items = finalItem
        setUserData(finalItem);
        setActiveLink(e)
    }

   
    return (
        <div className="lauder-main">
            <div className="lauder-collapse" style={{ backgroundColor: selectedColor ? 'rgb(2 18 138 / 80%)' : 'white' }}>
                {
                    collapsed ?
                        null
                        : <Button
                            className="collapse-button"
                            type="primary"
                            onClick={toggleCollapsed}
                            style={{ height: '20px' }}
                        >
                            {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                        </Button>
                }
                {
                    collapsed ?
                        <div className="menu-main">
                            <div className="minimize" >
                                <DoubleLeftOutlined style={{ display: "flex", flexDirection: "row-reverse", padding: '7px', color: 'white' }} onClick={toggleCollapsed} />
                            </div>
                            <div className="menu-items">
                                {userData.map((item, index) => {
                                    return (
                                        <div onClick={() => handleChangeLink(item.key, index)}>
                                            <li key={index} className="menu-text" style={{backgroundColor: item.active ? '#888a8b': 'rgb(51 64 163 / 80%)'}}>
                                                {/* <NavLink to={'/user'+item.path} > */}
                                                { item.active ? <div className="menu-selection"></div> : <></>}
                                                <span >
                                                    {item.title}
                                                </span>
                                                {/* </NavLink> */}
                                            </li>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        : null
                }
            </div>
            {
                activeLink === '1' ?
                    <Home /> : <Reports />
            }
            <PageChange />
        </div>
    )
}

function PageChange() {
    return (
        <div>
            <Routes>
                <Route path='/option1' element={<Home />} />
                <Route path='/option2' element={<Reports />} />
            </Routes>
        </div>
    )
}


export default LauderMain;