import React, { useEffect, useState } from 'react';
import { Layout, Typography,Button, Space } from 'antd';
import ZilCard from './ZilCard';
import OverviewResults from './OverviewResults';
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;
const { Title } = Typography;




function Overview() {

    const [getZilData, setZilData] = useState([]);
    const [getTokensData, setTokenData] = useState([]);
    let navigate = useNavigate()

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


    function handleNextClick() {
        navigate("/Tokens")
    }
    function handleBackClick() {
        navigate("/Tweets")
    }

    return (
        <>
            <Title level={1} className="heading" style={{ textAlign: "center" }}>Welcome to Zilverse! This page allows you to keep track of the Zilliqa Ecosystem</Title>
            <Content style={{ margin: '0 200px' }}>
                <Title level={2} className="heading" >Zilliqa Statistics</Title>
                <ZilCard fetched={getZilData} />
                <Title level={2} className="heading" style={{ textAlign: "center" }}>Zilliqa EcoSystem Tokens Statistics</Title>
                <OverviewResults fetched={getTokensData} />
            </Content>
            <Space size={1500}>
                <Button type="primary" onClick={handleBackClick} size={"small"}>To Tweets</Button>
                <Button type="primary" onClick={handleNextClick} size={"small"}>To Tokens</Button>
            </Space>
        </>


    );
}

export default Overview;