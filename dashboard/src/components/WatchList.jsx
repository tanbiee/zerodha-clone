// src/components/WatchList.jsx
import React, { useState, useContext } from "react";
import {Tooltip, Grow} from '@mui/material';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlinedIcon  from "@mui/icons-material/BarChartOutlined";
import { watchlist } from "../data/data";
import  MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GeneralContext from "./GeneralContext";
import DoughnutChart from "./DoughnutChart";


export default function WatchList() {
  const labels = watchlist.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      }
    ],
  }
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index)=>{
          return(
            <WatchListItem stock={stock} key = {index}/>
          )
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
}

const WatchListItem = ({stock})=>{
  const [showWatchListActions, setShowWatchListAction] = useState(false);

  const handleMouseEnter = (e) =>{
    setShowWatchListAction(true);
  }

  const handleMouseExit = (e)=>{
    setShowWatchListAction(false);
  }

  return (
    <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseExit}>
      <div className="item">
        <p className={stock.isDown? "down":"up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="percent">{stock.percent}</span>
            {stock.isDown? (
              <KeyboardArrowDownIcon className="down" />
            ): (
              <KeyboardArrowUpIcon className="up" />
            )}
            <span className="price">{stock.price}</span>
          </div>
       
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({uid})=>{
  const { openBuyWindow } = useContext(GeneralContext);

  const handleBuy = () => openBuyWindow(uid);
  const handleSell = () => openBuyWindow(uid); // open same action window for sell for now

  return <span className="actions">
    <span>
      <Tooltip title="buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuy}>Buy</button>
      </Tooltip>
      <Tooltip title="sell(s)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell" onClick={handleSell}>sell</button>
      </Tooltip>
      <Tooltip title="Analitics(A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlinedIcon className= "icon"/>
          </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="btn">
            <MoreHorizIcon className="icon"/>
          </button>
      </Tooltip>
    </span>
  </span>
}