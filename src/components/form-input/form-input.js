import React from "react";

import { Group, Input, InputLabel } from "./style";
const FormInput = ({ handleChange, label }) => (
  <Group>
    {label ? (
      <InputLabel
        className={
          "Shrink"}
      >
        {label}
      </InputLabel>
    ) : null}
    <Input onChange={handleChange}/>
  </Group>
);

export default FormInput;
