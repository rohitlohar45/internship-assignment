import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const [products, productList] = useState([]);

    const fetchData = () => {
      return fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => productList(data.products))
    }
    useEffect(() => {
      fetchData();
    },[])
  const renderList = products.map((product) => {
    const { id, title, images, price} = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/products/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                {/* {images[0]} */}
                <img src={images[0]} alt={title} />
              {/* {images.map(image => <img src={image} alt={title} />)} */}
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">Rs {price}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;