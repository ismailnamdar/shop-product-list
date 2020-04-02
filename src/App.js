import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ProductList from "./pages/ProductList";
import store from "./redux/store";

const AppRouter = () => {
  return (
    <Router>
      <Route key="productList" exact path="/" component={ProductList} />
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
