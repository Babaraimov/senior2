import React from "react";
import {
  CheckBoxRadio,
  CheckBoxContainer,
  CheckBoxInput,
  CheckBoxLabel,
} from "./styled";
import CheckBoxArrowIcon from "../../../assets/Icons/CheckBoxArrowIcon";

function CheckBox({ id }) {
  return (
    <CheckBoxContainer>
      <CheckBoxInput id={id} type="checkbox" />
      <CheckBoxLabel htmlFor={id}>
        <CheckBoxRadio>
          <CheckBoxArrowIcon />
        </CheckBoxRadio>
      </CheckBoxLabel>
    </CheckBoxContainer>
  );
}

export default CheckBox;
