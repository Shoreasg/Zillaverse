import { Layout } from 'antd';
import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.less';
import FooterBar from './Components/FooterBar';
import NavBar from './Components/NavBar';
import News from './Components/News';
import Overview from './Components/Overview';
import Tokens from './Components/Tokens';





const App = () => (
  <div className="App">
    <Layout>
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="Overview" element={<Overview />} />
          <Route path="Tokens" element={<Tokens />} />
          <Route path="News" element={<News />} />
          <Route path="*" element={<Navigate to="Overview" />}/>
        </Routes>
      </Layout>
    </Layout>
    <FooterBar />
  </div >


);

export default App;