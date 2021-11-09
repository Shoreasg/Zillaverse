import { Row } from 'antd';
import React from 'react';
import TwitterCard from './TwitterCard';


function TwitterUserIdResults(props) {

    const TwitterUserIdData = props.user.map((userdata) => {

        return <TwitterCard userId={userdata.id} name={userdata.name} />
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