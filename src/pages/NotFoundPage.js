import React, { Component } from "react";

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <div class="panel panel-danger">
          <div class="panel-heading">
            <h3 class="panel-title">404</h3>
          </div>
          <div class="panel-body">Not found page</div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
