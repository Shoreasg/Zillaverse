import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import CoinTweetUserIdResult from './CoinTweetUserIdResult';
const { Content } = Layout;
const { Title } = Typography;


function CoinTweet(props) {
    const [getUserId, setUserId] = useState([]);
    let query = ""

    if (props.fetchedId === "zilliqa")
        query = "zilliqa"
    if (props.fetchedId === "xcad-network")
        query = "XcademyOfficial"
    if (props.fetchedId === "packageportal")
        query = "PackagePortal"
    if (props.fetchedId === "xsgd")
        query = "xfers"
    if (props.fetchedId === "zilswap")
        query = "ZilSwap"
    if (props.fetchedId === "score-token")
        query = "UFFSports"
    if (props.fetchedId === "blox-token")
        query = "blox_sdk"
    if (props.fetchedId === "carbon-labs")
        query = "contact_carbon"
    if (props.fetchedId === "dmz-token")
        query = "de_monsters"
    if (props.fetchedId === "unifees")
        query = "UnifeesToken"
    if (props.fetchedId === "zilpay-wallet")
        query = "pay_zil"
    if (props.fetchedId === "redchillies")
        query = "RedChilliesLabs"
    if (props.fetchedId === "zyro")
        query = "zyro_finance"
    if (props.fetchedId === "review-capital")
        query = "RECAP_Token"
    if (props.fetchedId === "bolt")
        query = "Bolt_Global"
    if (props.fetchedId === "elons")
        query = "token_elon"
    if (props.fetchedId === "zilsurvey")
        query = "zilSurvey"
    if (props.fetchedId === "zilchess")
        query = "zilchess"
    if (props.fetchedId === "governance-zil")
        query = "zilliqa"





    useEffect(() => {

        const url = `https://shrill-cloud-4f83.wenjie-teo.workers.dev/2/users/by?usernames=${query}&ga_proxy=api.twitter.com`;
        const access_token = process.env.REACT_APP_Twitter_KEY;

        const options =
        {
            method: "GET",
            headers: {
                Authorization: access_token
            },
        }

        const fetchId = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                let openArray = [data.data];
                setUserId(...openArray)
            } catch (err) {
                console.log(err);
            }
        }
        fetchId();
        return () => { setUserId([]) };
    }, []);


    return (
        <>
            <Title level={1} className="heading" style={{ textAlign: "center" }}>Keep track of the latest Tweets from the project</Title>
            <Content style={{ margin: '0 400px' }}>
                <CoinTweetUserIdResult user={getUserId} />
            </Content>
        </>
    )
}


export default CoinTweet