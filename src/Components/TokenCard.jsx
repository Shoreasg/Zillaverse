import { Card, Col } from 'antd';
import React from 'react';
const { Meta } = Card;

const iconStyle = {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'contain'
}


function TokenCard(props) {
    return (
        <Col span={6}>
            <Card
                hoverable="true"
                style={{ width: 200 }}
                cover={
                    <img
                        alt={props.id}
                        src={props.icon}
                        style={iconStyle}
                    />
                }
            >
                <Meta
                    title={<h3 style={{ textAlign: "center" }}>{props.name}</h3>}
                />
            </Card>
        </Col>
    )
}

export default TokenCard;