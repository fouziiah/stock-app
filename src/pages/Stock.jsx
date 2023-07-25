import React from 'react';
import { useParams } from 'react-router-dom';
import stocks from '../Data';

export default function Stock() {
  const { symbol } = useParams();
  const stock = stocks.find((stock) => stock.symbol === symbol);

  if (!stock) {
    return <div>Stock not found.</div>;
  }

  return (
    <div>
      <h2>{stock.name}</h2>
      <p>Last Price: {stock.lastPrice}</p>
      <p>Change: {stock.change}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Open: {stock.open}</p>
    </div>
  );
}
