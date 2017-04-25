import React from "react";
import "./App.css";
import state from "./state";


function ProductDetail() {

  function showProductDetail(product) {
    return (
      <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
          <img src="{product.imgUrl}" alt="" />
          <div className="caption">
            <h4 className="pull-right">
              {products.price}
            </h4>
            <h4>
              <a href="#">{product.name}</a>
            </h4>
            <p>{product.description}<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
          </div>
          <div className="ratings">
            <p className="pull-right">{product.reviews} reviews</p>
            <p>
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
            </p>
          </div>
        </div>
      </div>
    );
  }
  state.products.map((product) => {
    return (
      <showProductDetail key={product.id} imgUrl={product.imgUrl} />
    );
  });
}

export default ProductDetail;