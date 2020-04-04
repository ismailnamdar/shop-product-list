import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.sass";

// pages
import ProductList from "./pages/ProductList";
import NoMatch from "./pages/NoMatch";
import ProductDetail from "./pages/ProductDetail";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route key="productList" exact path="/" component={ProductList} />
        <Route
          key="productDetail"
          exact
          path="/product/:productId"
          component={ProductDetail}
        />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};
function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
