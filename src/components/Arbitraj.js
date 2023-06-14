import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Arbitraj.css';
import İmg from '../images/ezgif.com-video-to-gif.gif';
import Button from './Button';




const Arbitraj = () => {
 
  const [data,setData] = useState(null);
  const [data1,setData1] = useState(null);
  
  const url = 'https://www.paribu.com/ticker';
  const url1 = 'https://finans.truncgil.com/today.json';

  useEffect(() => {
    axios
    .get(url).then((response) => {setData(response.data)}) 
    .catch((error) => {console.log(error)})
    }, [])

  useEffect(() => {
    axios
    .get(url1).then((response) => {setData1(response.data)}) 
    .catch((error) => {console.log(error)})
    }, [])

    if (!data) return null
    if (!data1) return null
  
    // console.log(data);
    // console.log(data1);

    let usd = (data1.USD.Satış) ;
    let usdt = (data.USDT_TL.last);
    // let value = (usdt) / (usd);  ******************************** 



  return (
    <div className='arbitraj'>
    

    <div className='header'>
    <Button/> <p className='par'>Ana Sayfa / Arbitraj</p>
    </div>

      <div className='container'>

        <div className='col-1'>
          <ul>
            
          <li className='left'> TETHER = {usdt}</li>
          <li className='left'></li>
          <li className='left'></li>
          <li className='left'> USD = {usd} </li>
          
          
          </ul>
        </div>
        
        <div className='col-2'>
          <img src={İmg} alt=''/>
        </div>
      

      </div>
    </div>
  )
}

export default Arbitraj;
