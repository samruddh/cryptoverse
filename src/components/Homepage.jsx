import React from 'react'
import { millify } from "millify";
import {Typography, Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom';
import {useGetCryptosQuery} from "../Services/cryptoApi";
import { News, Cryptocurrencies, Loader } from "../components";


const {Title} = Typography;
export default function Homepage() {
    
    const { data, isFetching} = useGetCryptosQuery(1);
    const globalStats = data?.data?.stats;

    if(isFetching) return <Loader/>;


    return (
        <>
        <Title level={2} className ="heading">Global Crypto Status</Title>
        <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
            <Col span={12}><Statistic title="Total Exchange" value={millify(globalStats.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
            <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)}/></Col>
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Top Cryptocurrencies in the World:</Title>
            <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show more</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Latest Crypto News:</Title>
            <Title level={3} className="show-more"><Link to='/news'>Show more</Link></Title>
        </div>
        <News simplified/>
        </>
    )
}
