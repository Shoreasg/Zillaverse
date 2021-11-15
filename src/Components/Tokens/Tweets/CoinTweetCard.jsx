import {Typography } from 'antd';
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const { Title } = Typography;

function CoinTweetCard(props) {
    return (
        <>
            <Title level={2} className="heading" style={{ textAlign: "center" }}>Tweets by: {props.name
                && props.name === "UFF Sports" ? "Score" : props.name}</Title>
            <TwitterTimelineEmbed sourceType="profile"
                userId={props.userId}
                options={{ height: 600 }}
                noFooter
                noHeader
                borderColor="#29CCC4"
                theme="dark" transparent
                placeholder={<Title level={3} className="loading" style={{ textAlign: "center" }}>Loading...</Title>}
            />

        </>

    )
}

export default CoinTweetCard;