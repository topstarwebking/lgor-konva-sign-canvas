import { internalOptions } from "./constants";

const signInButtonProp = {
  cornerRadius: [0, 10, 20, 30],
  shadowColor: internalOptions.shadowColor,
  fill: internalOptions.baseButtonColor,
  shadowBlur: internalOptions.shadowBlur,
  shadowOpacity: internalOptions.shadowOpacity,
  shadowOffsetX: internalOptions.shadowOffsetX,
  shadowOffsetY: internalOptions.shadowOffsetY,
};

const signInButtonTextProp = {
  text: "Sign In",
  padding: internalOptions.buttonPadding,
  fontSize: internalOptions.buttonFontSize,
  fill: internalOptions.buttonFontColor,
  align: internalOptions.buttonAlign,
};

const signUpButtonProp = {
  cornerRadius: [10, 0, 30, 20],
  shadowColor: internalOptions.shadowColor,
  fill: internalOptions.baseButtonColor,
  shadowBlur: internalOptions.shadowBlur,
  shadowOpacity: internalOptions.shadowOpacity,
  shadowOffsetX: internalOptions.shadowOffsetX,
  shadowOffsetY: internalOptions.shadowOffsetY,
};

const signUpButtonTextProp = {
  text: "Sign Up",
  padding: internalOptions.buttonPadding,
  fontSize: internalOptions.buttonFontSize,
  fill: internalOptions.buttonFontColor,
  align: internalOptions.buttonAlign,
};

const signInInputProp = {
  cornerRadius: [10, 10, 10, 10],
  shadowColor: internalOptions.shadowColor,
  fill: internalOptions.baseInputColor,
  shadowBlur: internalOptions.shadowBlur,
  stroke: internalOptions.strokeInputColor,
  strokeWidth: internalOptions.strokeInputWidth,
  shadowOpacity: internalOptions.shadowOpacity,
  shadowOffsetX: internalOptions.shadowOffsetX,
  shadowOffsetY: internalOptions.shadowOffsetY,
};

const signInInputTextProp = {
  padding: internalOptions.inputPadding,
  fontSize: internalOptions.inputFontSize,
  fill: internalOptions.inputFontColor,
};

export const buttonPosition = {
  signInButtonX: window.innerWidth / 2 - 155,
  signInButtonY: window.innerHeight / 2 + 50,
  signUpButtonX: window.innerWidth / 2 + 5,
  signUpButtonY: window.innerHeight / 2 + 50,
};

export const inputPosition = {
  inputX: window.innerWidth / 2 - 155,
  emailInputY: window.innerHeight / 2 - 92,
  passwordInputY: window.innerHeight / 2 - 20,
};

const signInOptions = {
  signInButtonProp: signInButtonProp,
  signInButtonTextProp: signInButtonTextProp,
  signUpButtonProp: signUpButtonProp,
  signUpButtonTextProp: signUpButtonTextProp,
  signInInputProp: signInInputProp,
  signInInputTextProp: signInInputTextProp,
};

export default signInOptions;
