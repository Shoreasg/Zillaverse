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
            <Content style={{ width: 1200, margin: '20px 250px' }}>
                {ChartData}
            </Content>
        </>
    )
}

export default ChartResults