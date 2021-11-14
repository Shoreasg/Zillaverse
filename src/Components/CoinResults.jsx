import React from 'react';
import CoinData from './CoinData';


function CoinResults(props)
{
    const coinDetails = props.fetchedDetails.map((data, index) => {
       return <CoinData 
        name={data.name}
        image={data.image.small}
        symbol={data.symbol}
        description={data.description.en}
        current={data.market_data.current_price.usd}
        ath={data.market_data.ath.usd}
        atl={data.market_data.atl.usd}
        atl24h={data.market_data.low_24h.usd}
        ath24h={data.market_data.high_24h.usd}
        change24h={data.market_data.price_change_percentage_24h}
        change7d={data.market_data.price_change_percentage_7d}
        change14d={data.market_data.price_change_percentage_14d}
        change30d={data.market_data.price_change_percentage_30d}
        change60d={data.market_data.price_change_percentage_60d}
        change200d={data.market_data.price_change_percentage_200d}
        change1y={data.market_data.price_change_percentage_1y}
        circulatingsupply={data.market_data.circulating_supply}
        totalsupply={data.market_data.total_supply}
        volume={data.market_data.total_volume.usd}
        marketcap={data.market_data.market_cap.usd}
        key={index}
        />
    })

    return(
        <>
        {coinDetails}
        </>
    )
}



export default CoinResults