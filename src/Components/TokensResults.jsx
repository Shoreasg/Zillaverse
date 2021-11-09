import { Row } from 'antd';
import React from 'react';
import TokenCard from './TokenCard';


function TokensResults(props) {

    const TokensData = props.fetched.map((data, index) => {
        return <TokenCard
            title={data.name}
            image={data.icon}
            price={data.rate_usd}
            changed24h={data.market_data.change_percentage_24h}
            dailyVolume={data.market_data.daily_volume}
            marketcap={data.market_data.market_cap}
            ath={data.market_data.ath}
            atl={data.market_data.atl}
            changePercent7D={data.market_data.change_percentage_7d}
            changePercent14D={data.market_data.change_percentage_14d}
            changePercent30D={data.market_data.change_percentage_30d}
            totalSupply={data.market_data.total_supply}
            circulatingSupply={data.current_supply}
            vetted={data.unvetted}
            key={index}
        />



    })
    return (
        <>
            <Row gutter={[48, 48]}>
                {TokensData}
            </Row>

        </>

    );
}

export default TokensResults;