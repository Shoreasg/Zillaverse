import { Layout} from 'antd';
import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.less';
import FooterBar from './Components/Layout/FooterBar';
import NavBar from './Components/Layout/NavBar';
import Tweets from './Components/Tweets/Tweets';
import Overview from './Components/Overview/Overview';
import Tokens from './Components/Tokens/Tokens';
import CoinDetails from './Components/Tokens/CoinDetails';
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