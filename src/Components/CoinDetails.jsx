import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import CoinResults from './CoinResults';
import ChartResults from './ChartResults';
import CoinTweet from './CoinTweet';
let today = Date.now();


console.log(today)


function CoinDetails() {
    const { id } = useParams();
    const [getCoinData, setCoinData] = useState([]);
    const [getChartData, setChartData] = useState([]);




    console.log(getChartData)

    useEffect(() => {

        const fetchCoin = async () => {
            const coingeckoEndpoint = `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true`
            try {
                const response = await fetch(coingeckoEndpoint);
                const data = await response.json();
                setCoinData([data])
            } catch (err) {
                console.log(err);
            }
        }
        fetchCoin();
        return () => { setCoinData([]) };
    }, []);

    useEffect(() => {
        const fetchChart = async () => {
            const chartPriceEndpoint = `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=1609430400&to=${today}`
            try {
                const response = await fetch(chartPriceEndpoint);
                const data = await response.json(response);
                setChartData([data])
            } catch (err) {
                console.log(err);
            }
        }
        fetchChart();
        return () => { setChartData([]) };
    }, []);


    return (
        <>
            <CoinResults fetchedDetails={getCoinData} />
            <ChartResults fetchedChart={getChartData} />
            <CoinTweet fetchedId={id} />
        </>

    );
}

export default CoinDetails;