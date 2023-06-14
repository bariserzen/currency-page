import React, {useEffect,useState} from 'react';
import Button from './Button';
import './Altin.css';
import Gold from '../images/gold.jpg';
import axios from 'axios';

const Altin = () => {

  const [data,setData] = useState(null);
  
  const url = 'https://finans.truncgil.com/today.json';
  
  useEffect(() => {
    axios
    .get(url).then((response) => {setData(response.data)}) 
    .catch((error) => {console.log(error)})
    }, [])

    if (!data) return null
    
  

  return (
    <div className='altin'>

    <div className='header'>
    <Button/> <p className='par'>Ana Sayfa / Altın</p>
    </div>

      <div className='container'>
        <div className='col-1'>
          <ul>
            <li>Ons Altin / Usd : </li>
            <li>{data.ons.Satış}</li>
            <li>Gram Altin / TL : </li>
            <li>{data["gram-altin"].Satış}</li>
            <li>Çeyrek Altin / TL : </li>
            <li>{data["ceyrek-altin"].Satış}</li>
            <li>Yarım Altin / TL :</li>
            <li>{data["yarim-altin"].Satış}</li>
            <li>Tam Altin / TL : </li>
            <li>{data["tam-altin"].Satış}</li>
            <li>Gram Gümüş / TL:</li>
            <li>{data.gumus.Satış}</li>
          </ul>
        </div>
        <div className='col-2'>
          <img src={Gold} alt=''/>
        </div>
      </div>
      
    </div>

  )
}

export default Altin;
