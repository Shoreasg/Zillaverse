import React from 'react';
import CoinChart from './CoinChart';
import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;



function ChartResults(props) {


    const ChartData = props.fetchedChart.map((data, index) => {
        return <CoinChart Chartdata={data.prices} key={index} />
    })
    return (
        <>
            <Title level={3} className="heading" style={{  margin: '10px 200px' }}>Price Chart(USD)</Title>
            <Content style={{ width:"80%", margin:"0 100px"}}>
                {ChartData}
            </Content>
        </>
    )
}

export default ChartResults