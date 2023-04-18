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
    

    <div className='header'>
    <Button/> <p className='par'>Ana Sayfa / Kripto Para</p>
    </div>

      <div className='container'>

        <div className='col-1'>
          <ul>
            
            <li><img src={data[0].image} alt=''/>Bitcoin :</li>
            <li className='left'>${data[0].current_price.toLocaleString()}</li>

            <li><img src={data[1].image} alt=''/>Ethereum :</li>
            <li className='left'>${data[1].current_price.toLocaleString()}</li>

            <li><img src={data[8].image} alt=''/>Dogecoin :</li>
            <li className='left'> ${data[8].current_price.toLocaleString()}</li>

            <li><img src={data[9].image} alt=''/>Matic :</li>
            <li className='left'>${data[9].current_price.toLocaleString()}</li>

            <li><img src={data[5].image} alt=''/>Ripple :</li>
            <li className='left'>${data[5].current_price.toLocaleString()}</li>

            <li><img src={data[3].image} alt=''/>Bnb : </li>
            <li className='left'>${data[3].current_price.toLocaleString()}</li>
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
