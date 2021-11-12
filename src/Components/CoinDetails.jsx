import { Layout, Typography } from 'antd';
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import CoinData from './CoinData';






function CoinDetails() {
    const { id } = useParams();
    const coingeckoEndpoint = `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true`

    const [getCoinData, setCoinData] = useState([]);

    const fetchCoin = async () => {
        try {
            const response = await fetch(coingeckoEndpoint);
            const data = await response.json();
            setCoinData([data])
            console.log(getCoinData)
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        fetchCoin();
        return () => { setCoinData([]) };
    }, []);

    return (

        <CoinData fetched={getCoinData} />



    );
}

export default CoinDetails;