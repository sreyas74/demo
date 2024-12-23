import React from "react";
import { Route, Switch } from "react-router-dom";
import { RentalSec } from "../Components/RentalSec/RentalSec";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Open from "../Pages/Dashboard/Open";
import { CarsDesc } from "../Components/RentalSec/CarsDesc";
import { Booking } from "../Components/RentalSec/Booking";
import { PrivateRoute } from "./PrivateRoute";
import { SubscriptionPage } from "../Pages/subscription/MainPart/SubscriptionPage";
import { Payment } from "../Pages/SubscriptionPay/MainPage/Payment";
import { FinalPayment } from "../Pages/payment/FinalPayment";
import Profile from "../Pages/Profile/Profile";
import Trail from "../Pages/Dashboard/Trail";
import Sample from "../Pages/Dashboard/Sample";
import process from "../Components/Dashboard/Process";
import Blog from "../Pages/Dashboard/BlogPage";
import FQ from "../Pages/Dashboard/FQ"



const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        
      
        <Route exact path="/sample">
        <Sample/>
        </Route>
        <Route exact path="/blog">
        <Blog/>
        </Route>
        <Route exact path="/FQ">
        <FQ/>
        </Route>
        <Route exact path="/open">
          <Open />
        </Route>
        <Route exact path="/trail">
          <Trail />
        </Route>
       
        <PrivateRoute exact={true} path="/cars/:location">
          <RentalSec />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/bookcars">
          <Booking />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/subscription/:location">
          <SubscriptionPage />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/subpay/:id">
          <Payment />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/payment/:id/:amount/:type">
          <FinalPayment />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export { Routes };
