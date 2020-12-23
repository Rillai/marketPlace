import React from "react";
import { Route, useHistory } from "react-router-dom";
import { StepOne } from "./stepOne";
import { StepTwo } from "./stepTwo";
import { StepThree } from "./stepThree";

export const OrderSteps = (props) => {
  const history = useHistory();
  const navigate = (path) => {
    history.push(`/cart/order/${path}`);
    props.setError("");
  };

  return (
    <>
      <Route
      exact
        path="/cart/order"
        render={() => (
          <StepOne setError={props.setError} navigate={navigate} />
        )}
      />
      <Route
        path="/cart/order/stepTwo"
        render={() => (
          <StepTwo setError={props.setError} navigate={navigate} />
        )}
      />
      <Route
        path="/cart/order/stepThree"
        render={() => 
        <StepThree navigate={navigate} />
      }
      />
    </>
  );
};
