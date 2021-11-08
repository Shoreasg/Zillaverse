import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
const { Content, Header } = Layout;
const { Title } = Typography;

const twitterUserNames =
{
    xcad: "XcademyOfficial",
    duck: "ZilDuck",
    portal: "PackagePortal",
    xsgd: "xfers",
    Lunr: "LunrToken",
    zilswap: "ZilSwap",
    score: "UFFSports",
    blox: "blox_sdk",
    carbon: "contact_carbon",
    demonster: "de_monsters",
    Unifees: "UnifeesToken",
    zilstream: "zilstream",
    zilpay: "pay_zil",
    Oki: "Okimoto_Dex",
    SpardaWallet: "SpardaWallet",
    consult: "ConsultCoin",
    shards: "robounicats",
    Redc: "RedChilliesLabs",
    yoda: "Jody96718451",
    zyro: "zyro_finance",
    zwall: "zwall_zpaint",
    recap: "RECAP_Token",
    gary: "TheGARYToken",
    pillar: "DevPillar",
    bolt: "Bolt_Global",
    pele: "PELENetwork",
    elon: "token_elon",
    mambo: "MrCryptoMambo",
    zilsurvey: "zilSurvey",
    zilliqaAds: "ZilliqaAds",
    zilchess: "zilchess",
    zillex: "zil_all",
    button: "bridge_button"
}

// const twitterEndpoint = `https://api.twitter.com/2/users/by?usernames=${twitterUserNames.xcad},${twitterUserNames.duck}
// ,${twitterUserNames.portal},${twitterUserNames.xsgd},${twitterUserNames.Lunr},${twitterUserNames.zilswap},${twitterUserNames.score}
// ,${twitterUserNames.blox},${twitterUserNames.carbon},${twitterUserNames.demonster},${twitterUserNames.Unifees},${twitterUserNames.zilstream}
// ,${twitterUserNames.zilpay},${twitterUserNames.Oki},${twitterUserNames.SpardaWallet},${twitterUserNames.consult},${twitterUserNames.shards}
// ,${twitterUserNames.Redc},${twitterUserNames.yoda},${twitterUserNames.zyro},${twitterUserNames.zwall},${twitterUserNames.recap}
// ,${twitterUserNames.gary},${twitterUserNames.pillar},${twitterUserNames.bolt},${twitterUserNames.pele},${twitterUserNames.elon}
// ,${twitterUserNames.mambo},${twitterUserNames.zilsurvey},${twitterUserNames.zilliqaAds},${twitterUserNames.zilchess}
// ,${twitterUserNames.zillex},${twitterUserNames.button}`


const getProxyURL = (endPoint) =>
    `https://shrill-cloud-4f83.wenjie-teo.workers.dev/${endPoint}?ga_proxy=`;
const apiBaseURL = "api.twitter.com/2/users/by";
const access_token = "Bearer AAAAAAAAAAAAAAAAAAAAALYVVgEAAAAAHrndQsvCIoQEr7B8dbSR7k3i8m0%3DYKklGOuWZvKnOs8Ii5KWJdUhGNoiUCLtFrutkwM2FXjKSNJmyk"

const apiEndPoint = `?usernames=${twitterUserNames.xcad},${twitterUserNames.duck}
,${twitterUserNames.portal},${twitterUserNames.xsgd},${twitterUserNames.Lunr},${twitterUserNames.zilswap},${twitterUserNames.score}
,${twitterUserNames.blox},${twitterUserNames.carbon},${twitterUserNames.demonster},${twitterUserNames.Unifees},${twitterUserNames.zilstream}
,${twitterUserNames.zilpay},${twitterUserNames.Oki},${twitterUserNames.SpardaWallet},${twitterUserNames.consult},${twitterUserNames.shards}
,${twitterUserNames.Redc},${twitterUserNames.yoda},${twitterUserNames.zyro},${twitterUserNames.zwall},${twitterUserNames.recap}
,${twitterUserNames.gary},${twitterUserNames.pillar},${twitterUserNames.bolt},${twitterUserNames.pele},${twitterUserNames.elon}
,${twitterUserNames.mambo},${twitterUserNames.zilsurvey},${twitterUserNames.zilliqaAds},${twitterUserNames.zilchess}
,${twitterUserNames.zillex},${twitterUserNames.button}`


const URL = getProxyURL(apiEndPoint) + apiBaseURL;

const options =
{
    method: "GET",
    headers: {
        Authorization: access_token
    },
}


function Tweets() {

    const [getUserId, setUserId] = useState([]);


    const fetchId = async () => {
        try {
            const response = await fetch(URL,options);
            const data = await response.text();
            setUserId([data])
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchId();
    }, []);


    return (
        <>
            <Header className="headerbar" />
            <Title level={1} className="heading" style={{ textAlign: "center" }}>Keep track of the latest News and Tweets from the Zilliqa Ecosystem</Title>
            <Content style={{ margin: '0 200px' }}>
                <div className="content">
                    <Title level={2} className="heading" >Latest Tweets</Title>
                    <div className="centerContent">
                        <div className="selfCenter standardWidth">

                        </div>
                    </div>
                </div>
            </Content>


        </>
    )
}


export default Tweets