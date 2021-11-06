import React,{useEffect,useState} from 'react';
import { Layout,Typography } from 'antd';
const { Content, Header } = Layout;
const {Title}= Typography;
const coingeckoEndpoint=`https://api.coingecko.com/api/v3/coins/zilliqa?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true`




function Overview() {

const [getZilData, setZilData] = useState([]);


    const fetchZil = async() =>
{
    try
    {
        const response = await fetch(coingeckoEndpoint);
        const data = await response.json();
        setZilData([data.market_data])
        console.log(getZilData);
    } catch (err)
    {
        console.log(err);
    }
}

useEffect(() => {
    fetchZil();

}, []);

const mapZilData = getZilData.map((data)=>
{
    return <p>{data.market_cap.usd}</p>
})

    return (
        <>
            <Header className="headerbar" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
       
                <div className="content" style={{ padding: 24, minHeight: 360 }}>
                <Title level={2} className="heading">Zilliqa Stats</Title>
                Market Cap: {mapZilData}
                </div>
            </Content>
        </>


    );
}

export default Overview;