import { Descriptions, Statistic, Card, Row, Col, Layout, Typography } from 'antd';
import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const { Content } = Layout;
const { Title } = Typography;




function CoinData(props) {
   
        console.log(props)

        return <>
            <Content style={{ margin: '0 200px' }}>
                <div className="content">
                    <Descriptions title={<Title level={3} className="heading" >{props.name}</Title>} extra={<img src={props.image} alt={props.name} />}>
                        <Descriptions.Item label={`What is ${props.name}(${props.symbol})`}>{props.description === 'Zilliqa (ZIL) is a token developed in the year 2017. Zilliqa is mainly based on the concept of Sharding and primarily aims at improving the scalability of the cryptocurrency networks as in case of <a href="https://www.coingecko.com/en/coins/bitcoin">Bitcoin</a> or <a href="https://www.coingecko.com/en/coins/ethereum">Ethereum</a>. The white paper mentions that the transactions speed would be approximately a thousand times more than that of Ethereum network. Ziliqa is fast, secured and decentralized. Zilliqa’s high throughput means that you can focus on developing your ideas without worrying about network congestion, high transaction fees or security which are the key issues with legacy blockchain platforms.\r\n\r\nZilliqa network uses a concept called Sharding where the transactions are grouped into smaller groups and divided among the miners for the parallel transactional verification. Developing smaller groups for transactional verification means the Consensus can be reached faster and hence a higher number of transactions can be processed in a given time frame. The capacity of the network linearly increases in other cryptocurrencies as the number of people joins the network, but in this case, the capacity is increased at a higher variable rate than the number of members joining the network. By incorporating the Sharding Technology, it can completely revolutionize the smart contract functionality too.\r\n\r\nZiliqa has few pros as it has a great new technology. Zilliqa is the first platform to use sharding technology. This puts it ahead of the rest of the market. It’s a completely new kind of blockchain designed to solve the problem of scalability. Third-generation platforms like Zilliqa could be the big winners in the future of cryptocurrency. Ziliqa has a strong community. The platform has a lot of fans. The Zilliqa ICO only happened because there was so much demand for it. The Zilliqa ICO also shows that the crypto community is ready to see blockchain technology move to the next phase of its development.' ?
                            "Zilliqa (ZIL) is a token developed in the year 2017. Zilliqa is mainly based on the concept of Sharding and primarily aims at improving the scalability of the cryptocurrency networks as in case of Bitcoin or Ethereum. The white paper mentions that the transactions speed would be approximately a thousand times more than that of Ethereum network. Ziliqa is fast, secured and decentralized. Zilliqa’s high throughput means that you can focus on developing your ideas without worrying about network congestion, high transaction fees or security which are the key issues with legacy blockchain platforms. Zilliqa network uses a concept called Sharding where the transactions are grouped into smaller groups and divided among the miners for the parallel transactional verification. Developing smaller groups for transactional verification means the Consensus can be reached faster and hence a higher number of transactions can be processed in a given time frame. The capacity of the network linearly increases in other cryptocurrencies as the number of people joins the network, but in this case, the capacity is increased at a higher variable rate than the number of members joining the network. By incorporating the Sharding Technology, it can completely revolutionize the smart contract functionality too. Ziliqa has few pros as it has a great new technology. Zilliqa is the first platform to use sharding technology. This puts it ahead of the rest of the market. It’s a completely new kind of blockchain designed to solve the problem of scalability. Third-generation platforms like Zilliqa could be the big winners in the future of cryptocurrency. Ziliqa has a strong community. The platform has a lot of fans. The Zilliqa ICO only happened because there was so much demand for it. The Zilliqa ICO also shows that the crypto community is ready to see blockchain technology move to the next phase of its development." : `${props.description}`}</Descriptions.Item>
                    </Descriptions>
                </div>
                <Title level={3} className="heading" >{props.name} Statistics</Title>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >{props.name} price</Title>}
                                value={props.current}
                                prefix={"$"}
                                valueStyle={{ color: '#036F7D' }}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >All time high / All time low</Title>}
                                value={`$${props.ath}/ $${props.atl}`}
                                valueStyle={{ color: '#036F7D' }}


                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >24h low / 24 high</Title>}
                                value={`$${props.atl24h}/ $${props.ath24h}`}
                                valueStyle={{ color: '#036F7D' }}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >Price Change(24h)</Title>}
                                value={props.change24h === 0 ? "N/A" : props.change24h}
                                valueStyle={props.change24h <= 0 ? { color: '#cf1322' } : { color: '#3f8600' }}
                                prefix={props.change24h < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined /> && props.change24h === 0 ? "" : props.change24h < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                                precision={2}
                                suffix={props.change24h === 0 ? "" : "%"}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >Price Change(7D)</Title>}
                                value={props.change7d === 0 ? "N/A" : props.change7d}
                                valueStyle={props.change7d <= 0 ? { color: '#cf1322' } : { color: '#3f8600' }}
                                prefix={props.change7d < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined /> && props.change7d === 0 ? "" : props.change7d < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                                precision={2}
                                suffix={props.change7d === 0 ? "" : "%"}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >Price Change(14D)</Title>}
                                value={props.change14d === 0 ? "N/A" : props.change14d}
                                valueStyle={props.change14d <= 0 ? { color: '#cf1322' } : { color: '#3f8600' }}
                                prefix={props.change14d < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined /> && props.change14d === 0 ? "" : props.change14d < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                                precision={2}
                                suffix={props.change14d === 0 ? "" : "%"}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >Price Change(30D)</Title>}
                                value={props.change30d === 0 ? "N/A" : props.change30d}
                                valueStyle={props.change30d <= 0 ? { color: '#cf1322' } : { color: '#3f8600' }}
                                prefix={props.change30d < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined /> && props.change30d === 0 ? "" : props.change30d < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                                precision={2}
                                suffix={props.change30d === 0 ? "" : "%"}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >Price Change(60D)</Title>}
                                value={props.change60d === 0 ? "N/A" : props.change60d}
                                valueStyle={props.change60d <= 0 ? { color: '#cf1322' } : { color: '#3f8600' }}
                                prefix={props.change60d < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined /> && props.change60d === 0 ? "" : props.change60d < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                                precision={2}
                                suffix={props.change60d === 0 ? "" : "%"}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >Price Change(200D)</Title>}
                                value={props.change200d === 0 ? "N/A" : props.change200d}
                                valueStyle={props.change200d <= 0 ? { color: '#cf1322' } : { color: '#3f8600' }}
                                prefix={props.change200d < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined /> && props.change200d === 0 ? "" : props.change200d < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                                precision={2}
                                suffix={props.change200d === 0 ? "" : "%"}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >Price Change(1Y)</Title>}
                                value={props.change1y === 0 ? "N/A" : props.change1y}
                                valueStyle={props.change1y <= 0 ? { color: '#cf1322' } : { color: '#3f8600' }}
                                prefix={props.change1y < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined /> && props.change1y === 0 ? "" : props.change1y < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                                precision={2}
                                suffix={props.change1y === 0 ? "" : "%"}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4}>Circulating Supply</Title>}
                                value={props.circulatingsupply === 0 ? "N/A" : props.circulatingsupply}
                                valueStyle={{ color: '#036F7D' }}
                                suffix={props.circulatingsupply === 0 ? "" : props.symbol}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4}>Total Supply</Title>}
                                value={props.totalsupply === null ? "N/A" : props.totalsupply}
                                valueStyle={{ color: '#036F7D' }}
                                suffix={props.totalsupply === null ? "" : props.symbol}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4} >Volume / Market Cap</Title>}
                                value={(`${props.volume}` / `${props.marketcap}`) === Infinity ? "N/A" : (`${props.volume}` / `${props.marketcap}`)}
                                precision={4}
                                valueStyle={{ color: '#036F7D' }}

                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title={<Title level={4}>Trading Volume</Title>}
                                value={`$${props.volume}`}
                                precision={2}
                                valueStyle={{ color: '#036F7D' }}
                            />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </>
 

 
}

export default CoinData;