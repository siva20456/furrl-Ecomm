import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductFilters from './components/ProductFilters/ProductFilters';
import ProductList from './components/ProductsList/ProductsList';
import './App.css';
import FilterContext from './ProductFilterContext';

const App: React.FC = () => {

  const [filter, setFilter] = useState('')


  return (
    <FilterContext.Provider value={{ id: filter, setFilter }}>
      <div className="App">
        <NavBar />
        <header className="header">
          <h1>#HomeHunts</h1>
        </header>
        <ProductFilters />
        <ProductList />
      </div>
    </FilterContext.Provider>
  );
};

export default App;
