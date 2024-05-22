
import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../products';
import './ProductsList.css';
import FilterContext from '../../ProductFilterContext';



const ProductList: React.FC = () => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHas] = useState(true)
    const { id, setFilter } = useContext(FilterContext)



    const fetchProducts = async () => {
        if (!hasMore) {
            return
        }
        setLoading(true);


        const normalInput = {
            entity: "vibe",
            filters: [],
            id: "#HomeHunts",
            page: page,
            pageSize: 10
        }

        const res = await fetch(`https://api.furrl.in/api/v2/listing/getListingProducts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: normalInput
            })
        });
        const newProducts = await res.json();
        const data = newProducts.data.getListingProducts.products
        console.log(data, id, 'id')
        setProductList(prevProducts => [...prevProducts, ...data]);
        console.log(newProducts, res)
        setLoading(false);
        setHas(data.length > 0)
    };

    const fetchProductsByFilters = async () => {
        if (!hasMore) {
            return
        }
        const filteredInput = {
            entity: "vibe",
            filters: [{ id, type: 'CATEGORY' }],
            id: "#HomeHunts",
            page: page,
            pageSize: 10
        }
        setLoading(true)
        const res = await fetch(`https://api.furrl.in/api/v2/listing/getListingProducts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: filteredInput
            })
        });
        const newProducts = await res.json();
        const data = newProducts.data.getListingProducts.products
        console.log(data, id, 'id')
        setProductList(prevProducts => [...prevProducts, ...data]);
        console.log(newProducts, res)
        setLoading(false);
        setHas(data.length > 0)
    }



    useEffect(() => {
        if (id !== '') {
            fetchProductsByFilters()
        } else {
            fetchProducts()
        }
    }, [page]);

    useEffect(() => {
        setPage(1)
        setProductList([])
        setHas(true)
        if (id !== '') {
            fetchProductsByFilters()
        } else {
            fetchProducts()
        }
    }, [id])

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);




    return (
        <div className="product-list">
            {productList.map((product, index) => <ProductCard key={index} product={product} />)}
            <br />
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default ProductList;
