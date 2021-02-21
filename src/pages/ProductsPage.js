import React, { Component } from "react";
import Products from "../component/products/Products";
import ProductItem from "../component/productItem/ProductItem";
import { connect } from "react-redux";
import * as actions from "../actions/index";


class ProductsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    var product = this.props.data;
    return (
      <div className="row">
        {/* Products */}
        <Products>{this.showProductItem(product)}</Products>
      </div>
    );
  }

  showProductItem = (products) => {
    var result = null;
    if (products) {
      result = products.map((item, index) => {
        return <ProductItem key={index} product={item} onDelete={this.onDelete}/>;
      });
    }
    return result;
  };

  onDelete = id => {
    this.props.actDeleteProduct(id);
  }
}

var mapStateToProps = (state) => {
  return {
    data: state.product,
  };
};

var mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProducts :() =>  {
      dispatch(actions.actFetchProductCallApi());
    },
    actDeleteProduct : (id) => {
      dispatch(actions.actDeleteProductCallApi(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
