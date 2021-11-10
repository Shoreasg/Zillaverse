import { Row } from 'antd';
import React from 'react';
import TokenCard from './TokenCard';



function TokenResults(props) {
    console.log(props)
    const TokensData = props.tokendata.map((data,index) => {
        return <TokenCard id={data.id} icon={data.image.large} name={data.name} key={index}/>
    })


    return (
        <>
            <Row gutter={[16, 16]}>
                {TokensData}
            </Row>

        </>

    );
}

export default TokenResults;