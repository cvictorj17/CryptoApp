import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, HomePage, CryptoCurrencies, CryptoDetails, News } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element= {<HomePage />} />
                            <Route exact path="/cryptocurrencies" element={<CryptoCurrencies simplified={false} />} />
                            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                            <Route exact path="/exchanges" element={<Exchanges />} />
                            <Route exact path="/news" element={<News simplified={false} />} />
                        </Routes>
                    </div>
                </Layout> 
                <div className="footer" level={5}>
                    <Typography.Title style={{color: 'white', textAlign: 'center'}}>
                        Cryptoverse <br/>
                        All rights reserverd
                    </Typography.Title>   
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
