import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import ZilCard from './ZilCard';
import OverviewResults from './OverviewResults';
const { Content, Header } = Layout;
const { Title } = Typography;
const coingeckoEndpoint = `https://api.coingecko.com/api/v3/coins/zilliqa?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true`
const zilstreamEndpoint = `https://api.zilstream.com/tokens`



function Overview() {

    const [getZilData, setZilData] = useState([]);
    const [getTokensData, setTokenData] = useState([]);


    const fetchZil = async () => {
        try {
            const response = await fetch(coingeckoEndpoint);
            const data = await response.json();
            setZilData([data])
        } catch (err) {
            console.log(err);
        }
    }

    const fetchOtherTokens = async () => {
        try {
            const response = await fetch(zilstreamEndpoint);
            const data = await response.json();
            setTokenData([...data])
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        fetchZil();
        return () =>{ setZilData([])};
    }, []);

    useEffect(() => {
        fetchOtherTokens();
        return () =>{ setTokenData([])};
    }, []);


    return (
        <>
            <Header className="headerbar" />
            <Title level={1} className="heading" style={{ textAlign: "center" }}>Welcome to Zilverse! This page allows you to keep track of the Zilliqa Ecosystem</Title>
            <Content style={{ margin: '0 200px' }}>
                <div className="content">
                    <Title level={2} className="heading" >Zilliqa Statistics</Title>
                    <ZilCard fetched={getZilData} />
                </div>
                <Title level={2} className="heading" style={{ textAlign: "center" }}>Zilliqa EcoSystem Tokens Statistics</Title>
                <OverviewResults fetched={getTokensData} />
            </Content>


        </>


    );
}

export default Overview;