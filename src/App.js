import { Layout } from 'antd';
import React from 'react';
import './App.less';
import FooterBar from './Components/FooterBar';
import NavBar from './Components/NavBar';
import Overview from './Components/Overview';





const App = () => (
  <div className="App">

    <Layout style={{ minHeight: '100vh' }}>
      <NavBar />
      <Layout>
        <Overview />
      </Layout>
    </Layout>
    <FooterBar />
  </div >


);

export default App;