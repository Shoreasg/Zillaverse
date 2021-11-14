import { Col, Typography } from 'antd';
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const { Title } = Typography;

function TwitterCard(props) {
    return (
        <Col span={12}>
            <Title level={2} className="heading" style={{ textAlign: "center" }}>Tweets by: {props.name === "Mr. Mambo" ? "Mambo" : props.name
                && props.name === "ZILALL" ? "Zilliqa Index" : props.name && props.name === "robounicats" ? "Shards" : props.name
                    && props.name === "UFF Sports" ? "Score" : props.name}</Title>
            <TwitterTimelineEmbed sourceType="profile"
                userId={props.userId}
                options={{ height: 1000}}
                noFooter
                noHeader
                noScrollbar
                borderColor="#29CCC4"
                theme="dark" transparent
                placeholder={<Title level={3} className="loading" style={{ textAlign: "center" }}>Loading...</Title>}
            />
        </Col>


    )
}

export default TwitterCard;