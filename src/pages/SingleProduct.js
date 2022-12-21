import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";

const SingleProduct = () => {
  const { productId } = useParams();

  const [product, producDetails] = useState([]);

  const fetchData = () => {
    return fetch(`https://dummyjson.com/products/${productId}`)
          .then((response) => response.json())
          .then((data) => producDetails(data))
  }
  useEffect(() => {
    fetchData();
  },[])
  const { images, title, description,price } = product;

  console.log(product);


  return (

    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={images[0]} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">Rs{price}</a>
                </h2>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
