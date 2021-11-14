import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import ZilCard from './ZilCard';
import OverviewResults from './OverviewResults';
const { Content } = Layout;
const { Title } = Typography;




function Overview() {

    const [getZilData, setZilData] = useState([]);
    const [getTokensData, setTokenData] = useState([]);






    useEffect(() => {
        const coingeckoEndpoint = `https://api.coingecko.com/api/v3/coins/zilliqa?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true`
        const fetchZil = async () => {
            try {
                const response = await fetch(coingeckoEndpoint);
                const data = await response.json();
                setZilData([data])
            } catch (err) {
                console.log(err);
            }
        }
        fetchZil();
        return () => { setZilData([]) };
    }, []);

    useEffect(() => {

        const zilstreamEndpoint = `https://api.zilstream.com/tokens`
        const fetchOtherTokens = async () => {
            try {
                const response = await fetch(zilstreamEndpoint);
                const data = await response.json();
                setTokenData([...data])
            } catch (err) {
                console.log(err);
            }
        }

        fetchOtherTokens();
        return () => { setTokenData([]) };
    }, []);


    return (
        <>
            <Title level={1} className="heading" style={{ textAlign: "center" }}>Welcome to Zilverse! This page allows you to keep track of the Zilliqa Ecosystem</Title>
            <Content style={{ margin: '0 200px' }}>
                <Title level={2} className="heading" >Zilliqa Statistics</Title>
                <ZilCard fetched={getZilData} />
                <Title level={2} className="heading" style={{ textAlign: "center" }}>Zilliqa EcoSystem Tokens Statistics</Title>
                <OverviewResults fetched={getTokensData} />
            </Content>
        </>


    );
}

export default Overview;