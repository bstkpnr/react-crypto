import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

export const CoinContext=createContext();

const API_URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export default function Crypto(props){
    const [coin, setCoin] = useState([]);

    useEffect(() => {
        axios
        .get(API_URL)
        .then((response)=>{
            setCoin(response.data);

        })
        .catch((error)=>console.log(error))
    }, []);

    return(
        <CoinContext.Provider value={{coin,setCoin}}>
            {props.children}
        </CoinContext.Provider>
    )
}