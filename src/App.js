import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Countries from './components/Countries';
import Details from './components/Details';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="details/:country" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
