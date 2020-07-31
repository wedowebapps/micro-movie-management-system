import React from "react";
import { SelectContainer } from "./styles";
import { Input, Label } from "reactstrap";

const FilterSelect = (props) => {
  return (
    <SelectContainer>
      <Label for={props.label}>{props.label}</Label>
      <Input
        type="select"
        name="select"
        id={props.label}
        onChange={(e) => {
          props.onSelect(e.target.value);
        }}
      >
        {props.options &&
          props.options.map((item) => (
            <option key={item.id}>{item.value}</option>
          ))}
      </Input>
    </SelectContainer>
  );
};

export default FilterSelect;
