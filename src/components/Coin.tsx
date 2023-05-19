import React from "react";

type CoinProps = {
  coinItem: CryptoItem;
};

const Coin: React.FC<CoinProps> = ({ coinItem }) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={coinItem.image} alt='crypto' />
          <h1>{coinItem.name}</h1>
          <p className='coin-symbol'></p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${coinItem.price_change_24h}</p>
          <p className='coin-percent red'>
            {coinItem.price_change_percentage_24h}%
          </p>
          <p className='coin-marketcap'>
            Mkt Cap: ${coinItem.market_cap_change_24h}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
