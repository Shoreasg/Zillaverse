import { Layout} from 'antd';
import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.less';
import FooterBar from './Components/FooterBar';
import NavBar from './Components/NavBar';
import Tweets from './Components/Tweets';
import Overview from './Components/Overview';
import Tokens from './Components/Tokens';
import CoinDetails from './Components/CoinDetails';
const { Header } = Layout; 





const App = () => (
  <div className="App">
    <Layout>
      <NavBar />
      <Layout>
      <Header className="headerbar"/>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/Tokens/:id" element={<CoinDetails />} />
          <Route path="/Tokens" element={<Tokens />} />
          <Route path="/Tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="Overview" />} />
        </Routes>
      </Layout>
    </Layout>
    <FooterBar />
  </div >


);

export default App;