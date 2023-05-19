import React from "react";
import Coin from "./Coin";

type CoinsProps = {
  cryptos: CryptoItem[];
};

const Coins: React.FC<CoinsProps> = ({ cryptos }) => {
  return (
    <div>
      {cryptos.map((crypto) => {
        return <Coin coinItem={crypto} />;
      })}
    </div>
  );
};

export default Coins;
