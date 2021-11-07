import { Card,Typography } from 'antd';
import React from 'react';



const {Title}= Typography; 
const gridStyle = {

    width: "50%",
    textAlign: 'center',
};

function ZilCard(props) {

    const ZilData = props.fetched.map((data,index) => {


        return <Card title={<Title level={3} style={{textAlign: "center"}}>{data.name}</Title>} extra={<img src={data.image.thumb}/>}key={index}>
        <Card.Grid style={gridStyle}><Title level={5}>Price:</Title>${data.market_data.current_price.usd.toFixed(6)}</Card.Grid> 
        <Card.Grid style={gridStyle}><Title level={5}>Price Change(24h):</Title>${data.market_data.price_change_24h_in_currency.usd.toFixed(6)}</Card.Grid> 
        <Card.Grid style={gridStyle}><Title level={5}>Trading Volume:</Title>${data.market_data.total_volume.usd.toFixed(2)}</Card.Grid> 
        <Card.Grid style={gridStyle}><Title level={5}>Market Cap:</Title>${data.market_data.market_cap.usd.toFixed(6)}</Card.Grid> 
        <Card.Grid style={gridStyle}><Title level={5}>All Time High(24h):</Title>${data.market_data.high_24h.usd.toFixed(6)}</Card.Grid> 
        <Card.Grid style={gridStyle}><Title level={5}>All Time Low(24h):</Title>${data.market_data.low_24h.usd.toFixed(6)}</Card.Grid> 
        <Card.Grid style={gridStyle}><Title level={5}>Change Percentage(7D):</Title>{data.market_data.price_change_percentage_7d.toFixed(2)}%</Card.Grid> 
        <Card.Grid style={gridStyle}><Title level={5}>Change Percentage(14D):</Title>{data.market_data.price_change_percentage_14d.toFixed(2)}%</Card.Grid> 
        <Card.Grid style={gridStyle}><Title level={5}>Change Percentage(30D):</Title>{data.market_data.price_change_percentage_30d.toFixed(2)}%</Card.Grid> 
        <Card.Grid style={gridStyle}><Title level={5}>Total Supply:</Title>{data.market_data.circulating_supply}</Card.Grid> 
        <Title level={5} style={{textAlign: "center"}}>Circulating Supply: {data.market_data.total_supply}</Title>
        </Card>
    })

    return (
        <>
            {ZilData}
        </>
    );
}

export default ZilCard;