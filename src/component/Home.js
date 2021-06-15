import React, { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";
import {InputGroup,FormControl} from 'react-bootstrap'
import {FaSearchDollar} from 'react-icons/fa'


function Home({ search, coinName }) {
  const context = useContext(CoinContext);

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white m-1 p-2 rounded">
        <h1 className="text-center text-success">CRYTPO</h1>
      </div>
      <div className="row">
        {/* <form>
          <div className="col-md-5 mx-auto mt-4">
            <input
              className="form-control"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={coinName}
            />
          </div>
        </form> */}
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default" >
           < FaSearchDollar />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search Crypto"
            value={search}
            onChange={coinName}
            
            
          />
        </InputGroup>
      </div>
      <div className="row">
        {context.coin
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
            return false;
          })
          .map((val) => (
            <div className="col-6 col-md-4 mt-5" key={val.id}>
              <div className="card text-center bg-success shadow">
                <div
                  className="mx-auto w-50 mt-5 mb-5 "
                  style={{ width: "244px", height: "150px" }}
                >
                  <img src={val.image} className="card-img-top" alt={val.id} />
                </div>
                <div className="card-body text-white">
                  <h5 className="card-title">
                    Current Price : {val.current_price}
                  </h5>
                  <p className="card-text">Name : {val.name}</p>
                  <p className="card-text">Rank : {val.market_cap_rank}</p>
                  <p className="card-text">Total : {val.total_volume}</p>
                  {/* <p className="card-text">Last Updated : {val.last_updated}</p>
                  <p className="card-text">
                    Price Change Percentage - 24h :{" "}
                    {val.price_change_percentage_24h}
                  </p> */}
                  <Link to={val.id} className="btn btn-warning shadow">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Home;
