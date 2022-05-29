import React from "react";
import Button from "../button";
import Input from "../input";
import { externalOptions } from "../../types/constants";
import signInOptions, {
  buttonPosition,
  inputPosition,
} from "../../types/signInOptions";

interface Props {}

const SignInPanel: React.FC<Props> = () => {
  const { buttonWidth, inputWidth } = externalOptions;
  const { signInButtonX, signInButtonY, signUpButtonX, signUpButtonY } =
    buttonPosition;
  const { inputX, emailInputY, passwordInputY } = inputPosition;
  const {
    signInButtonProp,
    signInButtonTextProp,
    signUpButtonProp,
    signUpButtonTextProp,
    signInInputProp,
    signInInputTextProp,
  } = signInOptions;

  return (
    <>
      <Input
        x={inputX}
        y={emailInputY}
        text="UserName"
        width={inputWidth}
        rectProp={signInInputProp}
        textProp={signInInputTextProp}
      />
      <Input
        x={inputX}
        text="Password"
        y={passwordInputY}
        width={inputWidth}
        rectProp={signInInputProp}
        textProp={signInInputTextProp}
      />
      <Button
        x={signInButtonX}
        y={signInButtonY}
        width={buttonWidth}
        anyRectProp={signInButtonProp}
        anyTextProp={signInButtonTextProp}
      />
      <Button
        x={signUpButtonX}
        y={signUpButtonY}
        width={buttonWidth}
        anyRectProp={signUpButtonProp}
        anyTextProp={signUpButtonTextProp}
      />
    </>
  );
};

export default SignInPanel;
