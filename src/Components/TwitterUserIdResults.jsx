import {Row } from 'antd';
import React from 'react';
import TwitterCard from './TokenCard';


function TokensResults(props) {

    const TokensData = props.fetched.map((data, index) => {


        return <
         
        />



    })
    return (
        <>
            <Row gutter={[48,48]}>
              
                    {TokensData}
            
            </Row>

        </>

    );
}

export default TokensResults;