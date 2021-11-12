import { Descriptions, Statistic, Card, Row, Col, Layout, Typography } from 'antd';
import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const { Content } = Layout;
const { Title } = Typography;




function CoinData(props) {
    console.log(props)
    const coinDetails = props.fetched.map((data, index) => {

        console.log((`${data.market_data.total_volume.usd}`/`${data.market_data.market_cap.usd}`))

        return <>
            <Content style={{ margin: '0 200px' }}>
                <div className="content">
                    <Descriptions title={<Title level={3} className="heading" >{data.name}</Title>} extra={<img src={data.image.small} alt={index} />}>
                        <Descriptions.Item label={`What is ${data.name}(${data.symbol})`}>{data.description.en === 'Zilliqa (ZIL) is a token developed in the year 2017. Zilliqa is mainly based on the concept of Sharding and primarily aims at improving the scalability of the cryptocurrency networks as in case of <a href="https://www.coingecko.com/en/coins/bitcoin">Bitcoin</a> or <a href="https://www.coingecko.com/en/coins/ethereum">Ethereum</a>. The white paper mentions that the transactions speed would be approximately a thousand times more than that of Ethereum network. Ziliqa is fast, secured and decentralized. Zilliqa’s high throughput means that you can focus on developing your ideas without worrying about network congestion, high transaction fees or security which are the key issues with legacy blockchain platforms.\r\n\r\nZilliqa network uses a concept called Sharding where the transactions are grouped into smaller groups and divided among the miners for the parallel transactional verification. Developing smaller groups for transactional verification means the Consensus can be reached faster and hence a higher number of transactions can be processed in a given time frame. The capacity of the network linearly increases in other cryptocurrencies as the number of people joins the network, but in this case, the capacity is increased at a higher variable rate than the number of members joining the network. By incorporating the Sharding Technology, it can completely revolutionize the smart contract functionality too.\r\n\r\nZiliqa has few pros as it has a great new technology. Zilliqa is the first platform to use sharding technology. This puts it ahead of the rest of the market. It’s a completely new kind of blockchain designed to solve the problem of scalability. Third-generation platforms like Zilliqa could be the big winners in the future of cryptocurrency. Ziliqa has a strong community. The platform has a lot of fans. The Zilliqa ICO only happened because there was so much demand for it. The Zilliqa ICO also shows that the crypto community is ready to see blockchain technology move to the next phase of its development.' ?
                            "Zilliqa (ZIL) is a token developed in the year 2017. Zilliqa is mainly based on the concept of Sharding and primarily aims at improving the scalability of the cryptocurrency networks as in case of Bitcoin or Ethereum. The white paper mentions that the transactions speed would be approximately a thousand times more than that of Ethereum network. Ziliqa is fast, secured and decentralized. Zilliqa’s high throughput means that you can focus on developing your ideas without worrying about network congestion, high transaction fees or security which are the key issues with legacy blockchain platforms. Zilliqa network uses a concept called Sharding where the transactions are grouped into smaller groups and divided among the miners for the parallel transactional verification. Developing smaller groups for transactional verification means the Consensus can be reached faster and hence a higher number of transactions can be processed in a given time frame. The capacity of the network linearly increases in other cryptocurrencies as the number of people joins the network, but in this case, the capacity is increased at a higher variable rate than the number of members joining the network. By incorporating the Sharding Technology, it can completely revolutionize the smart contract functionality too. Ziliqa has few pros as it has a great new technology. Zilliqa is the first platform to use sharding technology. This puts it ahead of the rest of the market. It’s a completely new kind of blockchain designed to solve the problem of scalability. Third-generation platforms like Zilliqa could be the big winners in the future of cryptocurrency. Ziliqa has a strong community. The platform has a lot of fans. The Zilliqa ICO only happened because there was so much demand for it. The Zilliqa ICO also shows that the crypto community is ready to see blockchain technology move to the next phase of its development." : `${data.description.en}`}</Descriptions.Item>
                    </Descriptions>
                </div>
                <Title level={3} className="heading" >{data.name} Statistics</Title>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >{data.name} price</Title>}
                                value={`$${data.market_data.current_price.usd.toFixed(6)}`}
                                precision={2}
                                valueStyle={{ color: '#036F7D' }}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >Price Change(24h)</Title>}
                                value={`$${data.market_data.price_change_24h.toFixed(6)}`}
                                valueStyle={data.market_data.price_change_24h < 0 ? { color: '#cf1322' } : { color: '#3f8600' }}
                                prefix={data.market_data.price_change_24h < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                            />
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >24h low / 24 high</Title>}
                                value={`$${data.market_data.low_24h.usd.toFixed(6)}/ $${data.market_data.high_24h.usd.toFixed(6)}`}
                                precision={2}
                                valueStyle={{ color: '#036F7D' }}

                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4}>Trading Volume</Title>}
                                value={`$${data.market_data.total_volume.usd}`}
                                precision={2}
                                valueStyle={{ color: '#036F7D' }}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >Volume / Market Cap</Title>}
                                value={(`${data.market_data.total_volume.usd}`/`${data.market_data.market_cap.usd}`) === Infinity ? "N/A":(`${data.market_data.total_volume.usd}`/`${data.market_data.market_cap.usd}`)}
                                precision={4}
                                valueStyle={{ color: '#036F7D' }}

                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4}>Trading Volume</Title>}
                                value={`$${data.market_data.total_volume.usd}`}
                                precision={2}
                                valueStyle={{ color: '#036F7D' }}
                            />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </>
    })

    return (
        <>
            {coinDetails}
        </>
    );
}

export default CoinData;