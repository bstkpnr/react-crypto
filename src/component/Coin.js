import React,{useContext} from 'react';
import { useParams,Link } from 'react-router-dom';
import { CoinContext} from '../context/CoinContext';

function Coin(){
    const {id}=useParams();
    const context = useContext(CoinContext);
    const filter=context.coin.filter((item)=>item.id===id);

    return(
        <div className="container text-center">
        <div className="bg-white m-1 p-2 rounded">
          <h1 className="text-center text-dark">Cryptos </h1>
        </div>
  
        <div className="row offset-4" >
          <div className="col-6 mt-5 text-white " >
            {filter.map((item) => (
              <div className="card bg-dark  shadow" key={item.id} >
                <div
                  className="mx-auto"
                  style={{ width: "244px", height: "244px"}}
                >
                  <img src={item.image} className="card-img-top" alt={item.id} />
                </div>
                <div className="card-body" style={{backgroundColor:'#FDFAF6'}}>
                  <h5 className="card-title" style={{color:'#325288'}}>
                    Current Price : {item.current_price}
                  </h5>
                  <p className="card-text" style={{color:'#325288'}}>Name : {item.name}</p>
                  <p className="card-text" style={{color:'#325288'}}>Rank : {item.market_cap_rank}</p>
                  <p className="card-text" style={{color:'#325288'}}>Total : {item.total_volume}</p>
                
                </div>
                <Link to="/" className="btn btn-secondary">
                  Home
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )

}
export default Coin;