import React from "react";

import { Group, Input, InputLabel } from "./style";
const FormInput = ({ handleChange, label }) => (
  <Group>
    <Input onChange={handleChange}/>
    {label ? (
      <InputLabel
        className={
          "Shrink"}
      >
        {label}
      </InputLabel>
    ) : null}
  </Group>
);

export default FormInput;
