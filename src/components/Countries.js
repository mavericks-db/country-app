import { useEffect, useState } from 'react';
import '../stylesheets/countries.scss';
import { nanoid } from 'nanoid';
import Cards from './Cards';
import Navbar from './Navbar';

function Countries() {
  const [arr, setArr] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setArr(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="fixed">
        <Navbar />
      </div>
      <div className="countries-container">
        {arr ? (
          arr.map((country) => <Cards key={nanoid()} country={country} />)
        ) : (
          <h5>Loading data...</h5>
        )}
      </div>
    </>
  );
}

export default Countries;
