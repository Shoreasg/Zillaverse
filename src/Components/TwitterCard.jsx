import { Col, Typography } from 'antd';
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const { Title } = Typography;

function TwitterCard(props) {


    console.log(props)

    return (
        <Col span={12}>

            <Title level={2} className="heading" style={{ textAlign: "center" }}>Tweets by: {props.name}</Title>
            <TwitterTimelineEmbed sourceType="profile"
                userId={props.userId}
                options={{ height: 400, width: 600 }}
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