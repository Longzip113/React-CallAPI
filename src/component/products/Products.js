import React, { Component } from "react";
import Controls from "../control/Controls";

class products extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {/* Controls */}
        <Controls />

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">LIST PRODUCT</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* ProductItem */}
                {this.props.children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default products;
