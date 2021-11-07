import { Card, Typography, Col } from 'antd';
import React from 'react';



const { Title } = Typography;
const gridStyle = {
    width:"50%",
    textAlign: 'center',
};

function TokenCard(props) {
    return (
        <Col span={12}>
            <Card title={<Title level={3} style={{textAlign: "center"}} >{props.title}</Title>}>
            <Card.Grid style={gridStyle}><Title level={5}>Price:</Title>${props.price.toFixed(6)}</Card.Grid>
            <Card.Grid style={gridStyle}><Title level={5}>Price Change(24h):</Title>${props.changed24h.toFixed(6)}</Card.Grid>
            <Card.Grid style={gridStyle}><Title level={5}>Trading Volume:</Title>${props.dailyVolume.toFixed(6)}</Card.Grid>
            <Card.Grid style={gridStyle}><Title level={5}>Market Cap:</Title>${props.marketcap.toFixed(2)}</Card.Grid>
            <Card.Grid style={gridStyle}><Title level={5}>All Time High:</Title>${props.ath.toFixed(6)}</Card.Grid>
            <Card.Grid style={gridStyle}><Title level={5}>All Time Low:</Title>${props.atl.toFixed(6)}</Card.Grid>
            <Card.Grid style={gridStyle}><Title level={5}>Change Percentage(7D):</Title>{props.changePercent7D.toFixed(2)}%</Card.Grid>
            <Card.Grid style={gridStyle}><Title level={5}>Change Percentage(14D):</Title>{props.changePercent14D.toFixed(2)}%</Card.Grid>
            <Card.Grid style={gridStyle}><Title level={5}>Change Percentage(30D):</Title>{props.changePercent30D.toFixed(2)}%</Card.Grid>
            <Card.Grid style={gridStyle}><Title level={5}>Total Supply:</Title>{props.totalSupply}</Card.Grid>
            <Title level={5} style={{textAlign: "center"}}>Circulating Supply:{props.circulatingSupply}</Title>
            </Card>
        </Col>

    )
}

export default TokenCard;