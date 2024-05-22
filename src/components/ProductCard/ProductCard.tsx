import React from 'react';
import { Product } from '../../products';
import { FaShareSquare } from "react-icons/fa";
import './ProductCard.css';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {


    let brand = product.brand[0].name.split(' ').join('')
    let name = product.title.split(' ').join('')
    const productDetailLink = `https://web.furrl.in/productDetail?productId=${product.shopifyId}&id=${product.id}&brand=${brand}&name=${name}`


    const handleShareProduct = (event:any) => {
        event.preventDefault()
        event.stopPropagation() //handling the outer triggers
        alert(`Share the product using the link here :- ${productDetailLink}`)
    }

  return (
    <div className="product-card" ><Link to ={productDetailLink} style={{color:'inherit',textDecoration:'none'}}>
      <img src={product.images[0].src} alt={product.title}  className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.brand[0].name}</h3>
        <p className="product-description">{product.title}</p>
        <div className="product-pricing">
          <span className="product-price">Rs. {product.price.value}</span>
          <span className="product-original-price">Rs. {product.MRP.value}</span>
          <span className="product-discount">{product.discountPercent}%</span>
        </div>
        <div className="product-actions">
          <button className="icon-button" onClick={handleShareProduct}><FaShareSquare /></button>
          <button className="icon-button">❤</button>
        </div>
      </div></Link>
    </div>
  );
};

export default ProductCard;
