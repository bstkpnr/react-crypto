import React, { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";
import { InputGroup, FormControl,Card } from "react-bootstrap";
import { FaSearchDollar } from "react-icons/fa";

function Home({ search, coinName }) {
  const context = useContext(CoinContext);

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white m-1 p-2 rounded">
        <h1 className="text-center text-dark">CRYTPO</h1>
      </div>
      <div className="row">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              <FaSearchDollar />
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
      <div className="row md-3">
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
            <Card style={{width:"19rem",margin:"20px"}} className="card border-danger mb-3">
              <Card.Img variant="top" src={val.image} />
              <Card.Body style={{backgroundColor:'#BBBBBB'}}>
                <Card.Text>Name:{val.name}</Card.Text>
                <Card.Text>Rank : {val.market_cap_rank}</Card.Text>
                <Card.Text>Total : {val.total_volume}</Card.Text>
                <Card.Text>Last Updated : {val.last_updated}</Card.Text>
                <Card.Text>
                  Price Change Percentage - 24h :{" "}
                  {val.price_change_percentage_24h}
                </Card.Text>
                <Link to={val.id} className="btn btn-dark">
                  Details
                </Link>
              </Card.Body>
            </Card>
          ))}
        
        //{" "}
      </div>
      //{" "}
    </div>
    // </div>
  );
}
export default Home;
