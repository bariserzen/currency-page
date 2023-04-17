import React, {useEffect,useState} from 'react';
import Button from './Button';
import './Döviz.css';
import Dövizimg from '../images/döviz.jpg';
import axios from 'axios';

const Döviz = () => {

  const [data,setData] = useState(null);
  
  const url = 'https://finans.truncgil.com/today.json';
  
  useEffect(() => {
    axios
    .get(url).then((response) => {setData(response.data)}) 
    .catch((error) => {console.log(error)})
    }, [])

    if (!data) return null
    
  

  return (
    <div className='döviz'>
      <Button/>
      <div className='container'>
        <div className='col-1'>
          <ul>
            <li>Dolar / TL : </li>
            <li>{data.USD.Satış}</li>
            <li>Euro / TL : </li>
            <li>{data.EUR.Satış}</li>
            <li>Pound / TL : </li>
            <li>{data.GBP.Satış}</li>
            <li>J.Yeni / TL : </li>
            <li>{data.JPY.Satış}</li>
          </ul>
        </div>
        <div className='col-2'>
          <img src={Dövizimg} alt=''/>
        </div>
      </div>
      
    </div>

  )
}

export default Döviz;
