import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import AddItem from "./components/addItem";
import ItemDetails from "./components/itemDetails";
import Dashboard from './components/dashboard';
import { Provider } from "react-redux";
import store from "./store";

import './index.css';
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/items/details/:id" component={ItemDetails} />
        <Route exact path="/items/create" component={AddItem} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
