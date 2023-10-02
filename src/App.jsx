import './App.sass'

import { useEffect, useState } from "react"
import { getCoins } from "./api/api"
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'


function App() {
  
  const [coins, setCoins] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(8);

  const lastCoinsIndex = currentPage * coinsPerPage;
  const firstCoinsIndex = lastCoinsIndex - coinsPerPage;
  const currentCoins = coins.slice(firstCoinsIndex, lastCoinsIndex);
  
  const paginate = (pageNamber) => setCurrentPage(pageNamber);
    
    useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
    };
    fetchData();
  }, []);

  console.log(coins);
  return (
    <>
      <Header />
      <Main
        currentPage={currentPage}
        currentCoins={currentCoins}
        coins={coins}
        coinsPerPage={coinsPerPage}
        totalCoins={coins.length}
        paginate={paginate}
      />
      <Footer />
    </>
  );
}

export default App
