import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import CoinResults from './CoinResults';
import ChartResults from './ChartResults';
let today=Date.now();


console.log(today)


function CoinDetails() {
    const { id } = useParams();
    const coingeckoEndpoint = `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true`
    const chartPriceEndpoint=`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=1609430400&to=${today}`

    const [getCoinData, setCoinData] = useState([]);
    const [getChartData, setChartData] = useState([]);

    const fetchCoin = async () => {
        try {
            const response = await fetch(coingeckoEndpoint);
            const data = await response.json();
            setCoinData([data])
        } catch (err) {
            console.log(err);
        }
    }

    const fetchChart = async () => {
        try {
            const response = await fetch(chartPriceEndpoint);
            const data = await response.json(response);
            setChartData([data])
        } catch (err) {
            console.log(err);
        }
    }

    console.log(getChartData)

    useEffect(() => {
        fetchCoin();
        return () => { setCoinData([]) };
    }, []);

    useEffect(() => {
        fetchChart();
        return () => { setChartData([]) };
    }, []);


    return (
        <>
        <CoinResults fetchedDetails={getCoinData} />
        <ChartResults fetchedChart={getChartData} />
        </>

    );
}

export default CoinDetails;