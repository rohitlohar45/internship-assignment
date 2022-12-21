import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
// import products from '../data';
import ProductComponent from '../components/singleProduct';

const Products = () => {
  const [products, productList] = useState([]);

  const fetchData = () => {
    return fetch("https://dummyjson.com/products")
          .then((response) => response.json())
          .then((data) => productList(data.products))
  }
  useEffect(() => {
    fetchData();
  },[])
  
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default Products;
