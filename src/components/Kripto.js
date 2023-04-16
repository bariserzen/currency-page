import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './Kripto.css';
import İmg from '../images/ezgif.com-video-to-gif.gif';
import Button from './Button';

const Kripto = () => {

  const [data, setData] = useState(null)
  
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
  
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
  
  
    if (!data) return null

    console.log(data);



  return (
    <div className='kripto'>

      <Button className=''/>
      
      <div className='container'>

        <div className='col-1'>
          <ul>
            <li>Bitcoin:  ${data[0].current_price.toLocaleString()}</li>
            <li>Ethereum: ${data[1].current_price.toLocaleString()} </li>
            <li>Dogecoin: ${data[8].current_price.toLocaleString()} </li>
            <li>Matic:  ${data[9].current_price.toLocaleString()}</li>
            <li>Ripple:  ${data[5].current_price.toLocaleString()}</li>
            <li>Binance:  ${data[3].current_price.toLocaleString()}</li>
          </ul>
        </div>
        
        <div className='col-2'>
          <img src={İmg} alt=''/>
        </div>
      

      </div>
    </div>
  )
}

export default Kripto
