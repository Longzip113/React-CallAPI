import React, { Component } from "react";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ProductActionPage from "./pages/ProductActionPage";
import { Route, Switch } from "react-router-dom";

var pageList = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/Products",
    exact: true,
    main: () => <ProductsPage />,
  },
  {
    path: "/Products/add",
    exact: false,
    main: ({history}) => <ProductActionPage history={history}/>,
  },
  {
    path: "/Products/:id/edit",
    exact: false,
    main: ({match, history}) => <ProductActionPage match={match} history={history}/>,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

class routers extends Component {
  render() {
    return <Switch>{this.showPage(pageList)}</Switch>;
  }

  showPage = (routers) => {
    var result = null;
    result = routers.map((item, index) => {
      return (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.main}
        />
      );
    });
    return result;
  };
}

export default routers;
