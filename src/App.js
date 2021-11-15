import { Layout, Spin } from 'antd';
import { React, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.less';
import FooterBar from './Components/Layout/FooterBar';
import NavBar from './Components/Layout/NavBar';
const { Header } = Layout;
const Overview = lazy(() => import('./Components/Overview/Overview'));
const Tokens = lazy(() => import('./Components/Tokens/Tokens'));
const Tweets = lazy(() => import('./Components/Tweets/Tweets'));
const CoinDetails = lazy(() => import('./Components/Tokens/Detailed/CoinDetails'));



const App = () => (
  <div className="App">
    <Layout>
      <NavBar />
      <Layout>
        <Header className="headerbar" />
        <Routes>
          <Route path="/" element={<Suspense fallback={<Spin>Loading</Spin>} ><Overview /></Suspense>} />
          <Route path="/Overview" element={<Suspense fallback={<Spin>Loading</Spin>} ><Overview /></Suspense>} />
          <Route path="/Tokens/:id" element={<Suspense fallback={<Spin>Loading</Spin>} ><CoinDetails /></Suspense>} />
          <Route path="/Tokens" element={<Suspense fallback={<Spin>Loading</Spin>} ><Tokens /></Suspense>} />
          <Route path="/Tweets" element={<Suspense fallback={<Spin>Loading</Spin>} ><Tweets /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<Spin>Loading</Spin>} ><Overview /></Suspense>} />
        </Routes>
      </Layout>
    </Layout>
    <FooterBar />
  </div >


);

export default App;