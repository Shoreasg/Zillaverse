import React from 'react';
import { Line } from '@ant-design/charts';





function CoinChart(props)
{

  const mapData= props.Chartdata.map((data)=>
  {
    let mydate= new Date((data[0]))
    let getDate = mydate.getDate();
    let getMonth = mydate.toLocaleString("en-us",{month: "short"});
    return {date: `${getDate}-${getMonth}`, price: data[1]}
  })

  const data = mapData

      const config = {
        data,
        xField: 'date',
        yField: 'price',
        point: {
          size: 2,
          shape: 'diamond',
        },
    };

    return(<Line {...config} />)
}


export default CoinChart