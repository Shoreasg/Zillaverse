import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoinResults from './CoinResults';
import ChartResults from '../Chart/ChartResults';
import CoinTweet from '../Tweets/CoinTweet';
import { Row ,Button} from 'antd';
let today = Date.now();


function CoinDetails() {
    const { id } = useParams();
    const [getCoinData, setCoinData] = useState([]);
    const [getChartData, setChartData] = useState([]);
    let navigate = useNavigate();



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

    
   function handleBackClick() {
    navigate("/Tokens")
    }

    return (
        <>
            <CoinResults fetchedDetails={getCoinData} />
            <ChartResults fetchedChart={getChartData} />
            <CoinTweet fetchedId={id} />
            <Row justify="start">
                <Button type="primary" onClick={handleBackClick} size={"small"}>To Tokens</Button>
            </Row>

        </>

    );
}

export default CoinDetails;