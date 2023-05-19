import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Coins from "./components/Coins";
import { useQuery } from "react-query";

const getCryptos = async () => {
  const { data } = await axios.get("./db.json");
  return data;
};

function App() {
  // const [cryptos, setCryptos] = useState([]);
  // const [isLoading, setIsloading] = useState(false);

  const { data, isLoading, error, isFetching } = useQuery(
    "cryptos",
    getCryptos
  );

  // useEffect(() => {
  //   const getCryptos = async () => {
  //     setIsloading(true);
  //     const { data } = await axios.get("./db.json");
  //     setCryptos(data);
  //     setIsloading(false);
  //   };
  //   getCryptos();
  // }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error :(</h1>;
  }

  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/'>Cryptos</Link>
      <Routes>
        <Route path='/' element={<Coins cryptos={data} />} />
        <Route path='/home' element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
