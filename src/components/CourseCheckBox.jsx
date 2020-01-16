import { Label, CustomInput } from "reactstrap";
import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange, sendID }) => (
  <div>
    <Label>
      <CustomInput
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        id={sendID}
      >
        {label}
      </CustomInput>
    </Label>
  </div>
);

export default Checkbox;
