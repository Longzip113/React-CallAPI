import React, { Component } from "react";
import { Link } from "react-router-dom";
import callApi from "../utils/callApi";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      callApi(`/Product/${match.params.id}`, "GET", null).then((res) => {
        var { data } = res;
        this.setState({
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status,
        });
      });
    }
  }

  onChange = (event) => {
    event.preventDefault();
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (event) => {
    event.preventDefault();
    var { txtName, txtPrice, chkbStatus } = this.state;
    var { history, match } = this.props;
    if (match) {
      callApi(`/Product/${match.params.id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then((res) => {
        console.log(res);
        history.goBack();
      });
    } else {
        this.props.actAddProduct({
          name: txtName,
          price: txtPrice,
          status: chkbStatus
        })
        history.goBack();
    }
  };
  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <form onSubmit={this.onSave}>
            <legend>Add product</legend>

            <div className="form-group">
              <label>Name: </label>
              <input
                type="text"
                className="form-control"
                name="txtName"
                value={txtName}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Price: </label>
              <input
                type="number"
                className="form-control"
                name="txtPrice"
                value={txtPrice}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Status: </label>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="chkbStatus"
                    value={chkbStatus}
                    onChange={this.onChange}
                    checked={chkbStatus}
                  />
                  Stocking
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mr-10">
              Submit
            </button>

            <Link to="/Products" className="btn btn-warning">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actAddProduct : (product) => {
      dispatch(actions.actAddProductCallApi(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
