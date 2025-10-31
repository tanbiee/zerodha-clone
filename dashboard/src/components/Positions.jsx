
import React, {useState,useEffect} from "react";
import axios from "axios";

// import { positions } from "../data/data";


export default function Positions() {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  
  

  useEffect(()=>{
    axios.get("http://localhost:3030/allPositions").then((res)=>{
      
      setAllPositions(res.data);
      setLoading(false);
      console.log(res.data);
    })
    .catch((err)=>{
      console.error("error fetching holdings: ",err);
      setLoading(false);
    });
  }, [])

  if(loading){
    return <p>loading holdings....</p>
  }
  return (
    <div className="positions-container">
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  
                  <td>P&L</td>
                  
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
