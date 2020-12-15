import React from "react";

export const Input = (props) => {
  const setValue = (e) => {
    props.func(e.target.value);
  };

  return <input {...props} onChange={setValue} />;
};