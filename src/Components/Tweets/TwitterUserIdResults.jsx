import { Row } from 'antd';
import React from 'react';
import TwitterCard from './TwitterCard';


function TwitterUserIdResults(props) {

    const TwitterUserIdData = props.user.map((userdata,index) => {

        return <TwitterCard userId={userdata.id} name={userdata.name} key={index}/>
    })

    return (
        <>
            <Row gutter={[48, 48]}>
                {TwitterUserIdData}
            </Row>

        </>

    );
}

export default TwitterUserIdResults;