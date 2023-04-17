import React,{useState,useEffect} from 'react'
import './Main.css';
import Mainpage from '../images/mainpage2.jpg';
import axios from 'axios';



const Main = () => {



  const [data,setData] = useState(null);
  const [data1,setData1] = useState(null);
  const url = 'https://finans.truncgil.com/today.json';
  const url1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false&locale=en';

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


  
  return (
    <div className='main'>
        <div className='container'>


        <div className='col1'>
          <div className='message'>
          <h2>7/24 yatırımlarını takip et </h2>
          <h3>Fiyatlara hemen ulaş</h3>
          </div>
          <div className='price'>
          <a href='/'>Dolar<br/>{data.USD.Satış}</a>
          <a href='/'>Bitcoin<br/>${data1[0].current_price.toLocaleString()}</a>
          <a href='/'>ONS Altın<br/>{data.ons.Satış}</a>
          <a href='/'>Gram Altın<br/>{data["gram-altin"].Satış}</a>
          </div>
        </div>


        <div className='col2'>

        <div className='img-container'>
                <img src={Mainpage} alt=''/>
        </div>
          
        </div>



        </div>
    </div>
  );
};

export default Main;
