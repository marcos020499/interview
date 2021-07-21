import React from "react";

import { Inverted, Button } from "./style";
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <Button
    className={` ${inverted ? { Inverted } : ""}`}
    {...otherProps}
  >
    {children}
  </Button>
);

export default CustomButton;
