import React from "react";
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation";
import { Label } from "reactstrap";

const PersonInfoForm = ({
  fNameValue,
  parentHandleFNameChange,
  lNameValue,
  parentHandleLNameChange,
  emailValue,
  parentHandleEmailChange
}) => (
  <React.Fragment>
    <AvForm noValidate>
      <AvGroup>
        <Label>First Name</Label>
        <AvInput
          value={fNameValue}
          type="First Name"
          name="First Name"
          id="firstName"
          placeholder="First Name..."
          onChange={parentHandleFNameChange}
          autoFocus={true}
          required
        />
        <AvFeedback>required</AvFeedback>
      </AvGroup>

      <AvGroup>
        <Label>Last Name</Label>
        <AvInput
          value={lNameValue}
          type="Last Name"
          name="Last Name"
          id="lastName"
          placeholder="Last Name..."
          onChange={parentHandleLNameChange}
          required
        />
        <AvFeedback>required</AvFeedback>
      </AvGroup>

      <AvGroup>
        <Label>Email</Label>
        <AvInput
          value={emailValue}
          type="mail"
          name="Email"
          id="email"
          placeholder="Email..."
          onChange={parentHandleEmailChange}
          required
        />
        <AvFeedback>required</AvFeedback>
      </AvGroup>
    </AvForm>
  </React.Fragment>
);
export default PersonInfoForm;
