import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import ProductList from "./pages/ProductList";
import store from "./redux/store";
import NoMatch from "./pages/NoMatch";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route key="productList" exact path="/" component={ProductList} />
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
