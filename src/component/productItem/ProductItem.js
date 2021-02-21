import React, { Component } from "react";
import { Link } from "react-router-dom";

class productItem extends Component {
  onDelete = (id) => {
    if (window.confirm('Are you sure want delete product ??')) {
      this.props.onDelete(id);
    }
  };

  render() {
    var { product } = this.props;
    var statusContent = product.status ? "Stocking" : "Out of stock";
    var classNameStatus = product.status ? "label-success" : "label-warning";
    return (
      <tr>
        <td>{product.id + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label ${classNameStatus}`}>{statusContent}</span>
        </td>
        <td>
          <Link to={`/Products/${product.id}/edit`} className="btn btn-success mr-10">
            Update
          </Link>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default productItem;
