import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Countries from './components/Countries';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="countries" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
