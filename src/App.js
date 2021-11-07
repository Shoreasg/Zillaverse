import { Layout } from 'antd';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.less';
import FooterBar from './Components/FooterBar';
import NavBar from './Components/NavBar';
import Overview from './Components/Overview';





const App = () => (
  <div className="App">

    <Layout >
      <NavBar />
      <Layout>
        <Routes>
        <Route path="/" element={<Overview />} />
          <Route path="Overview" element={<Overview />} />
        </Routes>
      </Layout>
    </Layout>
    <FooterBar />
  </div >


);

export default App;