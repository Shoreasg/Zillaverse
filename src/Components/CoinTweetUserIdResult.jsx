import React from 'react';
import CoinTweetCard from './CoinTweetCard';


function CoinTweetUserIdResult(props) {
    
    const TwitterUserIdData = props.user.map((userdata,index) => {
       
        return <CoinTweetCard userId={userdata.id} name={userdata.name} key={index}/>
    })

    return (
        <>
                {TwitterUserIdData}
        </>

    );
}

export default CoinTweetUserIdResult;