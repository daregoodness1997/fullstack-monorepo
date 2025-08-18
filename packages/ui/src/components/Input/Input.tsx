import { forwardRef } from "react";
import { TextInput, type TextInputProps } from "@mantine/core";

const Input = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return <TextInput ref={ref} {...props} />;
});

Input.displayName = "Input";
export default Input;
