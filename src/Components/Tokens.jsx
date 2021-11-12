import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import TokenResults from './TokenResults';
const { Content } = Layout;
const { Title } = Typography;
const coingeckoEndpoint=
{zil:`https://api.coingecko.com/api/v3/coins/zilliqa?tickers=false&market_data=false`,
xcad:`https://api.coingecko.com/api/v3/coins/xcad-network?tickers=false&market_data=false`,
xsgd:`https://api.coingecko.com/api/v3/coins/xsgd?tickers=false&market_data=false`,
gzil:`https://api.coingecko.com/api/v3/coins/governance-zil?tickers=false&market_data=false`,
zwap:`https://api.coingecko.com/api/v3/coins/zilswap?tickers=false&market_data=false`,
score:`https://api.coingecko.com/api/v3/coins/score-token?tickers=false&market_data=false`,
blox:`https://api.coingecko.com/api/v3/coins/blox-token?tickers=false&market_data=false`,
redc:`https://api.coingecko.com/api/v3/coins/redchillies?tickers=false&market_data=false`,
srv:`https://api.coingecko.com/api/v3/coins/zilsurvey?tickers=false&market_data=false`,
zlp:`https://api.coingecko.com/api/v3/coins/zilpay-wallet?tickers=false&market_data=false`,
dmz:`https://api.coingecko.com/api/v3/coins/dmz-token?tickers=false&market_data=false`,
fees:`https://api.coingecko.com/api/v3/coins/unifees?tickers=false&market_data=false`,
bolt:`https://api.coingecko.com/api/v3/coins/bolt?tickers=false&market_data=false`,
zyro:`https://api.coingecko.com/api/v3/coins/zyro?tickers=false&market_data=false`,
carb:`https://api.coingecko.com/api/v3/coins/carbon-labs?tickers=false&market_data=false`,
port:`https://api.coingecko.com/api/v3/coins/packageportal?tickers=false&market_data=false`,
zch:`https://api.coingecko.com/api/v3/coins/zilchess?tickers=false&market_data=false`,
recap:`https://api.coingecko.com/api/v3/coins/review-capital?tickers=false&market_data=false`,
elons:`https://api.coingecko.com/api/v3/coins/elons?tickers=false&market_data=false`,
}

function Tokens() {


    const [getTokensData, setTokensData] = useState([]);

    const fetchData = async () => {

        try {
           const  response = await Promise.all([
                fetch(coingeckoEndpoint.zil),
                fetch(coingeckoEndpoint.xcad),
                fetch(coingeckoEndpoint.xsgd),
                fetch(coingeckoEndpoint.gzil),
                fetch(coingeckoEndpoint.zwap),
                fetch(coingeckoEndpoint.score),
                fetch(coingeckoEndpoint.blox),
                fetch(coingeckoEndpoint.redc),
                fetch(coingeckoEndpoint.srv),
                fetch(coingeckoEndpoint.zlp),
                fetch(coingeckoEndpoint.dmz),
                fetch(coingeckoEndpoint.fees),
                fetch(coingeckoEndpoint.bolt),
                fetch(coingeckoEndpoint.zyro),
                fetch(coingeckoEndpoint.carb),
                fetch(coingeckoEndpoint.port),
                fetch(coingeckoEndpoint.zch),
                fetch(coingeckoEndpoint.recap),
                fetch(coingeckoEndpoint.elons),
            ])
            const data = await Promise.all(response.map(res=> res.json()))
            setTokensData(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
        return () =>{ setTokensData([])};
    }, []);


    return (
        <>
            <Title level={1} className="heading" style={{ textAlign: "center" }}>Find out more about the coins by clicking on the card</Title>
            <Content style={{ margin: '0 200px' }}>
                       <TokenResults tokendata={getTokensData}/>
            </Content>
        </>
    )
}


export default Tokens