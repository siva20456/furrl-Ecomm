import React, { useState, useEffect,useContext } from 'react';
import './ProductFilters.css';
import FilterContext from '../../ProductFilterContext';

const ProductFilters: React.FC = () => {

  const [productFilters, setProductFilters] = useState([])
  const [currentFilter, setCurrentFilter] = useState('')
  const {id,setFilter} = useContext(FilterContext)

  const fetchFilters = async () => {

    const res = await fetch(`https://api.furrl.in/api/v2/listing/getListingFilters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        entity: "vibe",
        id: "#HomeHunts"
      })
    });

    const newProducts = await res.json();

    console.log(newProducts, res)
    const data = newProducts.data.getListingFilters.easyFilters
    console.log(data)
    setProductFilters(data);

  };

  const handleFilterChange = (id: string) => {
    setCurrentFilter(id)
    setFilter(id)
  }


  useEffect(() => {
    fetchFilters()
  }, [])

  return (
    <div className="filters">
      <button onClick={() => handleFilterChange('')} className={`filter-button ${currentFilter === '' ? 'active' : ''}`}>All</button>
      {
        productFilters.map((e: any) => <button key={e.uniqueId} onClick={() => handleFilterChange(e.uniqueId)} className={`filter-button ${currentFilter === e.uniqueId ? 'active' : ''}`}>{e.name}</button>)
      }
    </div>
  );
};

export default ProductFilters;
