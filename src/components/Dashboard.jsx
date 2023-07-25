import React from 'react';
import stocks from '../Data';
import {Link } from "react-router-dom"
export default function Dashboard() {
  return (
    <div>
      {stocks.map((stock) => {
        return (
          <Link to={`/${stock.symbol}`} >
          <div className='con' key={stock.symbol}>

            <div className='name'>
            <h2>{stock.name}</h2>
            <hr/>
            </div>

          <div className='lastPrice'>
            <h2>{stock.lastPrice}</h2>
            <hr/>
          </div>

          <div className='change'>
            <h2>{stock.change}</h2>
            <hr/>
          </div>
          
         

          </div>
          </Link>
        );
      })}
    </div>
  );
}

